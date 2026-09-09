import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateAndroidApp } from "@/lib/generate";
import { SKELETON_SPEC, type AppSpec } from "@/lib/spec";
import { TEMPLATES } from "@/lib/templates";
import { newId } from "@/lib/utils";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export type Project = {
  id: string;
  spec: AppSpec;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
};

type StudioState = {
  project: Project | null;
  generating: boolean;
  error: string | null;
  activeScreenId: string;
  activeFile: string | null;
  studioTab: "preview" | "chat" | "code";
  loadTemplate: (id: string) => void;
  loadSpec: (spec: AppSpec, note: string, prompt?: string) => void;
  generateFromPrompt: (prompt: string) => Promise<boolean>;
  refine: (instruction: string) => Promise<boolean>;
  setActiveScreen: (id: string) => void;
  setActiveFile: (path: string | null) => void;
  setStudioTab: (tab: "preview" | "chat" | "code") => void;
  clearError: () => void;
  reset: () => void;
};

function makeProject(spec: AppSpec, messages: ChatMessage[]): Project {
  const now = Date.now();
  return {
    id: newId(),
    spec,
    messages,
    createdAt: now,
    updatedAt: now,
  };
}

export const useStudio = create<StudioState>()(
  persist(
    (set, get) => ({
      project: null,
      generating: false,
      error: null,
      activeScreenId: "home",
      activeFile: null,
      studioTab: "preview",

      loadTemplate: (id) => {
        const tpl = TEMPLATES.find((t) => t.id === id);
        if (!tpl) return;
        set({
          project: makeProject(tpl.spec, [
            {
              id: newId(),
              role: "assistant",
              text: `Loaded ${tpl.spec.name}. ${tpl.spec.tagline} Tap through the phone, then tell me what to change — or download the APK-ready Android project.`,
            },
          ]),
          generating: false,
          error: null,
          activeScreenId: tpl.spec.screens[0]?.id ?? "home",
          activeFile: null,
          studioTab: "preview",
        });
      },

      loadSpec: (spec, note, prompt) => {
        const messages: ChatMessage[] = [];
        if (prompt) messages.push({ id: newId(), role: "user", text: prompt });
        messages.push({ id: newId(), role: "assistant", text: note });
        set({
          project: makeProject(spec, messages),
          generating: false,
          error: null,
          activeScreenId: spec.screens[0]?.id ?? "home",
          activeFile: null,
          studioTab: "preview",
        });
      },

      generateFromPrompt: async (prompt) => {
        const trimmed = prompt.trim();
        if (!trimmed) return false;
        const existing = get().project;
        const now = Date.now();
        set({
          generating: true,
          error: null,
          project: existing
            ? {
                ...existing,
                messages: [...existing.messages, { id: newId(), role: "user", text: trimmed }],
                updatedAt: now,
              }
            : {
                id: newId(),
                spec: SKELETON_SPEC,
                messages: [{ id: newId(), role: "user", text: trimmed }],
                createdAt: now,
                updatedAt: now,
              },
          studioTab: "preview",
        });
        try {
          const res = await generateAndroidApp({ data: { prompt: trimmed } });
          if (!res.ok) {
            set({ generating: false, error: res.error });
            return false;
          }
          const prev = get().project;
          set({
            generating: false,
            error: null,
            project: makeProject(res.app.spec, [
              ...(prev?.messages ?? [{ id: newId(), role: "user", text: trimmed }]),
              { id: newId(), role: "assistant", text: res.app.note },
            ]),
            activeScreenId: res.app.spec.screens[0]?.id ?? "home",
          });
          return true;
        } catch {
          set({
            generating: false,
            error: "Something went wrong talking to the built-in AI. Try again.",
          });
          return false;
        }
      },

      refine: async (instruction) => {
        const trimmed = instruction.trim();
        const project = get().project;
        if (!trimmed || !project) return false;
        set({
          generating: true,
          error: null,
          project: {
            ...project,
            messages: [...project.messages, { id: newId(), role: "user", text: trimmed }],
          },
        });
        try {
          const res = await generateAndroidApp({
            data: { prompt: trimmed, currentSpec: project.spec },
          });
          if (!res.ok) {
            set({ generating: false, error: res.error });
            return false;
          }
          const latest = get().project;
          set({
            generating: false,
            error: null,
            project: {
              id: latest?.id ?? project.id,
              spec: res.app.spec,
              messages: [
                ...(latest?.messages ?? project.messages),
                { id: newId(), role: "assistant", text: res.app.note },
              ],
              createdAt: latest?.createdAt ?? project.createdAt,
              updatedAt: Date.now(),
            },
            activeScreenId: res.app.spec.screens.some((s) => s.id === get().activeScreenId)
              ? get().activeScreenId
              : (res.app.spec.screens[0]?.id ?? "home"),
          });
          return true;
        } catch {
          set({
            generating: false,
            error: "Something went wrong talking to the built-in AI. Try again.",
          });
          return false;
        }
      },

      setActiveScreen: (id) => set({ activeScreenId: id }),
      setActiveFile: (path) => set({ activeFile: path }),
      setStudioTab: (tab) => set({ studioTab: tab }),
      clearError: () => set({ error: null }),
      reset: () =>
        set({
          project: null,
          generating: false,
          error: null,
          activeScreenId: "home",
          activeFile: null,
          studioTab: "preview",
        }),
    }),
    {
      name: "forge-studio",
      partialize: (state) => ({
        project: state.project,
        activeScreenId: state.activeScreenId,
      }),
    },
  ),
);
