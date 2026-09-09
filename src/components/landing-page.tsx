import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Smartphone } from "lucide-react";
import { PhonePreview } from "@/components/phone-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { EXAMPLE_PROMPTS, TEMPLATES } from "@/lib/templates";
import { useStudio } from "@/lib/studio-store";

export function LandingPage() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [screenId, setScreenId] = useState(TEMPLATES[0].spec.screens[0].id);
  const [hydrated, setHydrated] = useState(false);
  const lastProject = useStudio((s) => s.project);

  useEffect(() => {
    setHydrated(true);
  }, []);

  function goStudio() {
    void navigate({ to: "/studio" });
  }

  function startPrompt(text: string) {
    const value = text.trim();
    if (!value) return;
    useStudio.getState().reset();
    sessionStorage.setItem("forge:pendingPrompt", value);
    goStudio();
  }

  function startTemplate(id: string) {
    useStudio.getState().reset();
    sessionStorage.setItem("forge:pendingTemplate", id);
    goStudio();
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-md bg-elevated shadow-[var(--shadow-border)]">
            <Smartphone className="size-4 text-mint" strokeWidth={1.75} />
          </span>
          <span className="font-display text-[15px] font-medium tracking-tight">Forge</span>
        </Link>
        <div className="flex items-center gap-2">
          <Badge>Free</Badge>
          {hydrated && lastProject ? (
            <Button variant="ghost" size="sm" onClick={goStudio}>
              Open {lastProject.spec.name}
            </Button>
          ) : null}
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-5 pb-20 lg:flex-row lg:pt-6">
        <section className="min-w-0 flex-1">
          <p className="stagger-item text-[12px] font-medium tracking-[0.16em] text-muted uppercase">
            Built-in AI · Android studio
          </p>
          <h1 className="stagger-item mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Describe an app.
            <br />
            Leave with an APK.
          </h1>
          <p className="stagger-item mt-5 max-w-xl text-base leading-relaxed text-muted">
            Forge designs the screens, writes Jetpack Compose, and hands you an APK-ready Android
            project with build instructions. No keys. No waitlist. Free.
          </p>

          <form
            className="stagger-item mt-8 rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]"
            onSubmit={(e) => {
              e.preventDefault();
              startPrompt(prompt);
            }}
          >
            <label htmlFor="prompt" className="sr-only">
              Describe the Android app
            </label>
            <Textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                  e.preventDefault();
                  startPrompt(prompt);
                }
              }}
              placeholder="A quiet habit tracker for morning stretching, dark theme, with a weekly streak…"
              className="min-h-28 resize-none border-0 bg-transparent shadow-none focus-visible:ring-0"
              maxLength={1500}
            />
            <div className="flex items-center justify-between gap-3 px-2 pb-1">
              <p className="text-[12px] text-subtle">Ctrl or ⌘ + Enter</p>
              <Button type="submit" disabled={!prompt.trim()}>
                Build app
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>

          <div className="stagger-item mt-4 flex flex-wrap gap-2">
            {EXAMPLE_PROMPTS.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => startPrompt(example)}
                className="h-9 rounded-full px-3.5 text-left text-[13px] text-muted shadow-[var(--shadow-border)] transition-[background-color,color] duration-150 hover:bg-elevated hover:text-fg"
              >
                {example}
              </button>
            ))}
          </div>

          <div className="mt-12 flex justify-center lg:hidden">
            <div>
              <PhonePreview
                spec={TEMPLATES[0].spec}
                activeScreenId={screenId}
                onScreenChange={setScreenId}
              />
              <p className="mt-4 text-center text-xs text-subtle">
                Bloom — a starter. Tap the bar to move around.
              </p>
            </div>
          </div>
        </section>

        <aside className="hidden w-96 shrink-0 justify-center lg:flex">
          <div className="relative">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--color-mint) 18%, transparent), transparent 70%)" }}
            />
            <PhonePreview
              spec={TEMPLATES[0].spec}
              activeScreenId={screenId}
              onScreenChange={setScreenId}
            />
            <p className="mt-4 text-center text-[12px] text-subtle">
              Bloom — a starter. Tap the bar to move around.
            </p>
          </div>
        </aside>
      </main>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3">
          {[
            { step: "01", title: "Describe", body: "A sentence is enough. Forge designs screens, copy, and a Material palette." },
            { step: "02", title: "Preview", body: "Tap through a live phone. Ask for changes in plain language." },
            { step: "03", title: "Export", body: "Download an APK-ready Kotlin + Compose project and build the debug APK." },
          ].map((item) => (
            <div key={item.step} className="bg-bg px-6 py-8">
              <p className="font-mono text-[11px] tracking-wider text-subtle">{item.step}</p>
              <h2 className="mt-3 font-display text-lg font-medium">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="font-display text-xl font-medium">Start from a finished app</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TEMPLATES.map((tpl) => (
            <button
              key={tpl.id}
              type="button"
              onClick={() => startTemplate(tpl.id)}
              className="group rounded-xl bg-surface p-4 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.98]"
            >
              <span
                className="block h-1.5 w-10 rounded-full"
                style={{ background: tpl.spec.theme.seed }}
              />
              <span className="mt-4 flex items-start justify-between gap-2">
                <span className="font-display text-base font-medium">{tpl.spec.name}</span>
                <ArrowUpRight className="size-4 text-subtle transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="mt-1 block text-[13px] leading-snug text-muted">{tpl.blurb}</span>
              <span className="mt-3 block text-[11px] font-medium tracking-wide text-subtle uppercase">
                {tpl.spec.theme.mode} · {tpl.spec.nav.length} screens
              </span>
            </button>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 pb-10 text-[12px] text-subtle">
        Exports an APK-ready Kotlin + Jetpack Compose project with a GitHub Actions APK build file.
      </footer>
    </div>
  );
}
