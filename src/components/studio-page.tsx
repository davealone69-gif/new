import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  Copy,
  Download,
  LoaderCircle,
  MessageSquare,
  Smartphone,
  Code2,
} from "lucide-react";
import { toast } from "sonner";
import { PhonePreview } from "@/components/phone-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { buildAndroidProject } from "@/lib/android-project";
import { useStudio } from "@/lib/studio-store";
import { cn } from "@/lib/utils";
import { downloadBlob, zipFiles } from "@/lib/zip";

type StudioTab = "preview" | "chat" | "code";

function usePendingHandoff() {
  const generateFromPrompt = useStudio((s) => s.generateFromPrompt);
  const loadTemplate = useStudio((s) => s.loadTemplate);

  useEffect(() => {
    const tpl = sessionStorage.getItem("forge:pendingTemplate");
    const prompt = sessionStorage.getItem("forge:pendingPrompt");
    if (tpl) {
      sessionStorage.removeItem("forge:pendingTemplate");
      sessionStorage.removeItem("forge:pendingPrompt");
      loadTemplate(tpl);
      return;
    }
    if (prompt) {
      sessionStorage.removeItem("forge:pendingPrompt");
      void generateFromPrompt(prompt);
    }
  }, [generateFromPrompt, loadTemplate]);
}

function ChatPanel() {
  const project = useStudio((s) => s.project);
  const generating = useStudio((s) => s.generating);
  const error = useStudio((s) => s.error);
  const refine = useStudio((s) => s.refine);
  const generateFromPrompt = useStudio((s) => s.generateFromPrompt);
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [project?.messages.length, generating, error]);

  async function send() {
    const text = draft.trim();
    if (!text || generating) return;
    setDraft("");
    if (project && project.spec.packageName !== "com.forge.draft") {
      await refine(text);
    } else {
      await generateFromPrompt(text);
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 p-4">
          {(project?.messages ?? []).map((msg) => (
            <div
              key={msg.id}
              className={cn("max-w-[92%] text-sm leading-relaxed", msg.role === "user" ? "self-end" : "self-start")}
            >
              <p className="mb-1 text-[10px] font-medium tracking-wider text-subtle uppercase">
                {msg.role === "user" ? "You" : "Forge"}
              </p>
              <div
                className={cn(
                  "rounded-lg px-3.5 py-2.5",
                  msg.role === "user"
                    ? "bg-accent text-accent-fg"
                    : "bg-elevated text-fg shadow-[var(--shadow-border)]",
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {generating ? (
            <div className="flex items-center gap-2 text-sm text-muted">
              <LoaderCircle className="size-3.5 animate-spin" />
              Designing screens…
            </div>
          ) : null}
          {error ? <p className="text-sm text-danger">{error}</p> : null}
          <div ref={endRef} />
        </div>
      </div>
      <form
        className="border-t border-border p-3"
        onSubmit={(e) => {
          e.preventDefault();
          void send();
        }}
      >
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              void send();
            }
          }}
          placeholder={project ? "Add a calendar tab, make it darker…" : "Describe the Android app you want…"}
          className="min-h-20 resize-none text-sm"
          maxLength={1500}
          disabled={generating}
        />
        <div className="mt-2 flex justify-end">
          <Button type="submit" size="sm" disabled={!draft.trim() || generating}>
            {project ? "Update" : "Build"}
          </Button>
        </div>
      </form>
    </div>
  );
}

function CodePanel() {
  const spec = useStudio((s) => s.project?.spec);
  const activeFile = useStudio((s) => s.activeFile);
  const setActiveFile = useStudio((s) => s.setActiveFile);
  const [copied, setCopied] = useState(false);

  const files = useMemo(() => (spec ? buildAndroidProject(spec) : []), [spec]);
  const current = files.find((f) => f.path === activeFile) ?? files[0];

  useEffect(() => {
    if (!activeFile && files[0]) setActiveFile(files[0].path);
  }, [activeFile, files, setActiveFile]);

  if (!spec || files.length === 0) {
    return <p className="p-4 text-sm text-muted">Build an app to see the Android project.</p>;
  }

  return (
    <div className="flex h-full min-h-0">
      <div className="w-44 shrink-0 overflow-y-auto border-r border-border">
        <ul className="p-2">
          {files.map((file) => {
            const short = file.path.split("/").slice(1).join("/") || file.path;
            const on = current?.path === file.path;
            return (
              <li key={file.path}>
                <button
                  type="button"
                  onClick={() => setActiveFile(file.path)}
                  className={cn(
                    "mb-0.5 w-full truncate rounded-md px-2 py-1.5 text-left font-mono text-[11px]",
                    on ? "bg-elevated text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {short}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-10 shrink-0 items-center justify-between border-b border-border px-3">
          <span className="truncate font-mono text-[11px] text-muted">{current?.path}</span>
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md text-muted hover:bg-elevated hover:text-fg"
            onClick={async () => {
              if (!current) return;
              await navigator.clipboard.writeText(current.contents);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1200);
            }}
            aria-label="Copy file"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto">
          <pre className="p-4 font-mono text-[11px] leading-relaxed text-muted whitespace-pre-wrap">
            {current?.contents}
          </pre>
        </div>
      </div>
    </div>
  );
}

export function StudioPage() {
  usePendingHandoff();
  const project = useStudio((s) => s.project);
  const generating = useStudio((s) => s.generating);
  const activeScreenId = useStudio((s) => s.activeScreenId);
  const setActiveScreen = useStudio((s) => s.setActiveScreen);
  const tab = useStudio((s) => s.studioTab);
  const setStudioTab = useStudio((s) => s.setStudioTab);

  function download() {
    if (!project) return;
    const files = buildAndroidProject(project.spec);
    downloadBlob(zipFiles(files), `${project.spec.name.replace(/\s+/g, "")}.zip`);
    toast.success("APK-ready Android project downloaded");
  }

  const spec = project?.spec;

  return (
    <div className="flex h-dvh flex-col bg-bg text-fg">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border px-3 sm:px-4">
        <Link
          to="/"
          className="flex size-10 items-center justify-center rounded-md text-muted hover:bg-elevated hover:text-fg"
          aria-label="Back"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h1 className="truncate font-display text-[15px] font-medium">
              {spec && spec.packageName !== "com.forge.draft" ? spec.name : "New app"}
            </h1>
            {spec && spec.packageName !== "com.forge.draft" ? (
              <Badge>{spec.theme.mode}</Badge>
            ) : (
              <Badge>Draft</Badge>
            )}
          </div>
          <p className="truncate text-[12px] text-subtle">
            {spec?.tagline ?? "Describe an Android app to begin"}
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={download}
          disabled={!spec || spec.packageName === "com.forge.draft" || generating}
          className="hidden sm:inline-flex"
        >
          <Download className="size-3.5" />
          Download APK kit
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={download}
          disabled={!spec || spec.packageName === "com.forge.draft" || generating}
          className="sm:hidden"
          aria-label="Download APK kit"
        >
          <Download className="size-4" />
        </Button>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-80 shrink-0 border-r border-border lg:flex lg:flex-col">
          <div className="flex h-10 items-center px-4 text-[11px] font-medium tracking-wider text-subtle uppercase">
            Chat
          </div>
          <div className="min-h-0 flex-1">
            <ChatPanel />
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <div className={cn("min-h-0 flex-1", tab === "preview" || tab === undefined ? "flex" : "hidden lg:flex")}>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-4">
              {spec ? (
                <PhonePreview
                  spec={spec}
                  activeScreenId={activeScreenId}
                  onScreenChange={setActiveScreen}
                  generating={generating && spec.packageName === "com.forge.draft"}
                />
              ) : (
                <p className="max-w-xs text-center text-sm text-muted">
                  Describe an app in chat, or go back and pick a starter.
                </p>
              )}
            </div>
          </div>
          <div className={cn("min-h-0 flex-1 lg:hidden", tab === "chat" ? "flex flex-col" : "hidden")}>
            <ChatPanel />
          </div>
          <div className={cn("min-h-0 flex-1", tab === "code" ? "flex lg:hidden" : "hidden")}>
            <CodePanel />
          </div>
        </section>

        <aside className="hidden min-w-0 flex-1 border-l border-border xl:flex xl:max-w-md xl:flex-col 2xl:max-w-lg">
          <div className="flex h-10 items-center px-4 text-[11px] font-medium tracking-wider text-subtle uppercase">
            APK-ready project
          </div>
          <div className="min-h-0 flex-1">
            <CodePanel />
          </div>
        </aside>
      </div>

      <nav className="flex h-14 shrink-0 border-t border-border lg:hidden">
        {(
          [
            ["preview", "Preview", Smartphone],
            ["chat", "Chat", MessageSquare],
            ["code", "Code", Code2],
          ] as const
        ).map(([id, label, Icon]) => (
          <button
            key={id}
            type="button"
            onClick={() => setStudioTab(id as StudioTab)}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium",
              tab === id ? "text-fg" : "text-muted",
            )}
          >
            <Icon className="size-4" strokeWidth={1.75} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
