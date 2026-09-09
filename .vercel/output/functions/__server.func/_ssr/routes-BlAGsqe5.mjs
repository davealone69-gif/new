import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { R as ArrowUpRight, d as Smartphone, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as TEMPLATES, i as PhonePreview, l as useStudio, n as Button, o as Textarea, r as EXAMPLE_PROMPTS, t as Badge } from "./studio-store-DNL5Qswi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BlAGsqe5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LandingPage() {
	const navigate = useNavigate();
	const [prompt, setPrompt] = (0, import_react.useState)("");
	const [screenId, setScreenId] = (0, import_react.useState)(TEMPLATES[0].spec.screens[0].id);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const lastProject = useStudio((s) => s.project);
	(0, import_react.useEffect)(() => {
		setHydrated(true);
	}, []);
	function goStudio() {
		navigate({ to: "/studio" });
	}
	function startPrompt(text) {
		const value = text.trim();
		if (!value) return;
		useStudio.getState().reset();
		sessionStorage.setItem("forge:pendingPrompt", value);
		goStudio();
	}
	function startTemplate(id) {
		useStudio.getState().reset();
		sessionStorage.setItem("forge:pendingTemplate", id);
		goStudio();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-8 items-center justify-center rounded-md bg-elevated shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {
							className: "size-4 text-mint",
							strokeWidth: 1.75
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[15px] font-medium tracking-tight",
						children: "Forge"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Free" }), hydrated && lastProject ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: goStudio,
						children: ["Open ", lastProject.spec.name]
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto flex max-w-6xl flex-col items-start gap-12 px-5 pb-20 lg:flex-row lg:pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stagger-item text-[12px] font-medium tracking-[0.16em] text-muted uppercase",
							children: "Built-in AI · Android studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "stagger-item mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl",
							children: [
								"Describe an app.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Leave with an APK."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "stagger-item mt-5 max-w-xl text-base leading-relaxed text-muted",
							children: "Forge designs the screens, writes Jetpack Compose, and hands you an APK-ready Android project with build instructions. No keys. No waitlist. Free."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "stagger-item mt-8 rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]",
							onSubmit: (e) => {
								e.preventDefault();
								startPrompt(prompt);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "prompt",
									className: "sr-only",
									children: "Describe the Android app"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "prompt",
									value: prompt,
									onChange: (e) => setPrompt(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
											e.preventDefault();
											startPrompt(prompt);
										}
									},
									placeholder: "A quiet habit tracker for morning stretching, dark theme, with a weekly streak…",
									className: "min-h-28 resize-none border-0 bg-transparent shadow-none focus-visible:ring-0",
									maxLength: 1500
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3 px-2 pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-subtle",
										children: "Ctrl or ⌘ + Enter"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										disabled: !prompt.trim(),
										children: ["Build app", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "stagger-item mt-4 flex flex-wrap gap-2",
							children: EXAMPLE_PROMPTS.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => startPrompt(example),
								className: "h-9 rounded-full px-3.5 text-left text-[13px] text-muted shadow-[var(--shadow-border)] transition-[background-color,color] duration-150 hover:bg-elevated hover:text-fg",
								children: example
							}, example))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex justify-center lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhonePreview, {
								spec: TEMPLATES[0].spec,
								activeScreenId: screenId,
								onScreenChange: setScreenId
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-center text-xs text-subtle",
								children: "Bloom — a starter. Tap the bar to move around."
							})] })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden w-96 shrink-0 justify-center lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full",
								style: { background: "radial-gradient(circle, color-mix(in oklab, var(--color-mint) 18%, transparent), transparent 70%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhonePreview, {
								spec: TEMPLATES[0].spec,
								activeScreenId: screenId,
								onScreenChange: setScreenId
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-center text-[12px] text-subtle",
								children: "Bloom — a starter. Tap the bar to move around."
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-5 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3",
					children: [
						{
							step: "01",
							title: "Describe",
							body: "A sentence is enough. Forge designs screens, copy, and a Material palette."
						},
						{
							step: "02",
							title: "Preview",
							body: "Tap through a live phone. Ask for changes in plain language."
						},
						{
							step: "03",
							title: "Export",
							body: "Download an APK-ready Kotlin + Compose project and build the debug APK."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-bg px-6 py-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-wider text-subtle",
								children: item.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-lg font-medium",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: item.body
							})
						]
					}, item.step))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-5 flex items-end justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "Start from a finished app"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: TEMPLATES.map((tpl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => startTemplate(tpl.id),
						className: "group rounded-xl bg-surface p-4 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-out hover:shadow-[var(--shadow-border-hover)] active:scale-[0.98]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block h-1.5 w-10 rounded-full",
								style: { background: tpl.spec.theme.seed }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-base font-medium",
									children: tpl.spec.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-subtle transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-[13px] leading-snug text-muted",
								children: tpl.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 block text-[11px] font-medium tracking-wide text-subtle uppercase",
								children: [
									tpl.spec.theme.mode,
									" · ",
									tpl.spec.nav.length,
									" screens"
								]
							})
						]
					}, tpl.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mx-auto max-w-6xl px-5 pb-10 text-[12px] text-subtle",
				children: "Exports an APK-ready Kotlin + Jetpack Compose project with a GitHub Actions APK build file."
			})
		]
	});
}
var SplitComponent = LandingPage;
//#endregion
export { SplitComponent as component };
