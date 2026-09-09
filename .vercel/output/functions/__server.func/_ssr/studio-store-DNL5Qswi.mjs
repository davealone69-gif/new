import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as newId, n as cn, t as SKELETON_SPEC } from "./spec-Cq97qa1k.mjs";
import { B as ArrowLeft, C as House, D as Droplets, E as Dumbbell, F as Calendar, I as BookOpen, L as Bell, M as Check, N as ChartColumn, P as Camera, S as Leaf, T as Ellipsis, _ as Music, a as User, b as Map, c as Timer, f as Share2, g as Pencil, h as Plus, i as UtensilsCrossed, j as ChevronRight, l as Sun, m as Search, n as Wifi, p as Settings, r as Wallet, s as Trash2, t as Zap, u as Star, v as Moon, w as Heart } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-store-DNL5Qswi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function hexToRgb(hex) {
	const h = hex.replace("#", "");
	return {
		r: parseInt(h.slice(0, 2), 16),
		g: parseInt(h.slice(2, 4), 16),
		b: parseInt(h.slice(4, 6), 16)
	};
}
function rgbToHex(r, g, b) {
	const to = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
	return `#${to(r)}${to(g)}${to(b)}`.toUpperCase();
}
function rgbToHsl({ r, g, b }) {
	const R = r / 255;
	const G = g / 255;
	const B = b / 255;
	const max = Math.max(R, G, B);
	const min = Math.min(R, G, B);
	const l = (max + min) / 2;
	if (max === min) return {
		h: 0,
		s: 0,
		l
	};
	const d = max - min;
	const s = l > .5 ? d / (2 - max - min) : d / (max + min);
	let h = 0;
	if (max === R) h = (G - B) / d + (G < B ? 6 : 0);
	else if (max === G) h = (B - R) / d + 2;
	else h = (R - G) / d + 4;
	return {
		h: h * 60,
		s,
		l
	};
}
function hueToRgb(p, q, t) {
	let T = t;
	if (T < 0) T += 1;
	if (T > 1) T -= 1;
	if (T < 1 / 6) return p + (q - p) * 6 * T;
	if (T < 1 / 2) return q;
	if (T < 2 / 3) return p + (q - p) * (2 / 3 - T) * 6;
	return p;
}
function hslToRgb({ h, s, l }) {
	if (s === 0) {
		const v = l * 255;
		return {
			r: v,
			g: v,
			b: v
		};
	}
	const q = l < .5 ? l * (1 + s) : l + s - l * s;
	const p = 2 * l - q;
	const hk = h / 360;
	return {
		r: hueToRgb(p, q, hk + 1 / 3) * 255,
		g: hueToRgb(p, q, hk) * 255,
		b: hueToRgb(p, q, hk - 1 / 3) * 255
	};
}
function mixHex(a, b, t) {
	const A = hexToRgb(a);
	const B = hexToRgb(b);
	return rgbToHex(A.r + (B.r - A.r) * t, A.g + (B.g - A.g) * t, A.b + (B.b - A.b) * t);
}
function relLum(hex) {
	const { r, g, b } = hexToRgb(hex);
	const lin = (c) => {
		const s = c / 255;
		return s <= .04045 ? s / 12.92 : ((s + .055) / 1.055) ** 2.4;
	};
	return .2126 * lin(r) + .7152 * lin(g) + .0722 * lin(b);
}
function onColor(bg, light = "#F4F7F4", dark = "#1A1C1B") {
	return relLum(bg) > .42 ? dark : light;
}
function tuneSeed(hex) {
	const hsl = rgbToHsl(hexToRgb(hex));
	hsl.s = Math.min(.42, Math.max(.18, hsl.s));
	hsl.l = Math.min(.48, Math.max(.28, hsl.l));
	const rgb = hslToRgb(hsl);
	return rgbToHex(rgb.r, rgb.g, rgb.b);
}
function schemeFromSeed(seed, mode) {
	const primary = tuneSeed(seed);
	if (mode === "dark") {
		const p = mixHex(primary, "#D7E6DC", .42);
		const surface = mixHex(primary, "#0E100F", .9);
		const container = mixHex(primary, "#171A18", .82);
		return {
			primary: p,
			onPrimary: onColor(p, "#E8F3EC", "#102018"),
			primaryContainer: mixHex(primary, "#1C2A22", .45),
			onPrimaryContainer: mixHex("#E8F3EC", primary, .12),
			secondaryContainer: mixHex(primary, "#222826", .55),
			onSecondaryContainer: mixHex("#E4EDE6", primary, .18),
			surface,
			surfaceDim: mixHex(primary, "#0A0C0B", .88),
			surfaceContainerLowest: mixHex(primary, "#080908", .9),
			surfaceContainer: container,
			surfaceContainerHigh: mixHex(primary, "#1E2420", .75),
			onSurface: "#E6EDE8",
			onSurfaceVariant: "#B0B8B2",
			outline: mixHex(primary, "#8A938C", .35),
			outlineVariant: mixHex(primary, "#3A423C", .4),
			inverse: "#E6EDE8"
		};
	}
	const surface = mixHex(primary, "#F6F4F0", .94);
	const container = mixHex(primary, "#EDEAE4", .88);
	const pContainer = mixHex(primary, "#FFFFFF", .82);
	return {
		primary,
		onPrimary: onColor(primary),
		primaryContainer: pContainer,
		onPrimaryContainer: mixHex("#1A1C1B", primary, .35),
		secondaryContainer: mixHex(primary, "#E7EBE6", .7),
		onSecondaryContainer: mixHex("#1A1C1B", primary, .4),
		surface,
		surfaceDim: mixHex(primary, "#E7E4DE", .86),
		surfaceContainerLowest: "#FFFDF8",
		surfaceContainer: container,
		surfaceContainerHigh: mixHex(primary, "#E3E0DA", .8),
		onSurface: "#1A1C1B",
		onSurfaceVariant: "#545C57",
		outline: mixHex(primary, "#747C76", .35),
		outlineVariant: mixHex(primary, "#D5D8D3", .4),
		inverse: "#1A1C1B"
	};
}
function schemeCssVars(scheme) {
	return {
		"--md-primary": scheme.primary,
		"--md-on-primary": scheme.onPrimary,
		"--md-primary-container": scheme.primaryContainer,
		"--md-on-primary-container": scheme.onPrimaryContainer,
		"--md-secondary-container": scheme.secondaryContainer,
		"--md-on-secondary-container": scheme.onSecondaryContainer,
		"--md-surface": scheme.surface,
		"--md-surface-dim": scheme.surfaceDim,
		"--md-surface-lowest": scheme.surfaceContainerLowest,
		"--md-surface-container": scheme.surfaceContainer,
		"--md-surface-high": scheme.surfaceContainerHigh,
		"--md-on-surface": scheme.onSurface,
		"--md-on-variant": scheme.onSurfaceVariant,
		"--md-outline": scheme.outline,
		"--md-outline-variant": scheme.outlineVariant,
		"--md-inverse": scheme.inverse
	};
}
function hexToArgb(hex) {
	return `0xFF${hex.replace("#", "").toUpperCase()}`;
}
var ICONS = {
	home: House,
	search: Search,
	settings: Settings,
	person: User,
	favorite: Heart,
	add: Plus,
	check: Check,
	star: Star,
	bolt: Zap,
	leaf: Leaf,
	book: BookOpen,
	fitness: Dumbbell,
	restaurant: UtensilsCrossed,
	wallet: Wallet,
	calendar: Calendar,
	notifications: Bell,
	chart: ChartColumn,
	timer: Timer,
	map: Map,
	camera: Camera,
	music: Music,
	water: Droplets,
	moon: Moon,
	sun: Sun,
	edit: Pencil,
	delete: Trash2,
	share: Share2,
	back: ArrowLeft,
	more: Ellipsis
};
function Glyph({ name, className, filled }) {
	const Icon = ICONS[name] ?? Star;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		strokeWidth: 1.75,
		fill: filled ? "currentColor" : "none"
	});
}
function StatusBar() {
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
		return () => window.clearInterval(id);
	}, []);
	const time = now.toLocaleTimeString([], {
		hour: "numeric",
		minute: "2-digit"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-20 flex h-8 shrink-0 items-center justify-between px-6 pt-1 text-[11px] font-medium tabular-nums",
		style: { color: "var(--md-on-surface)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: time }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, {
				className: "size-3",
				strokeWidth: 2.2
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block h-2.5 w-4 rounded-[2px] shadow-[inset_0_0_0_1.2px_currentColor]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-px mt-px block h-1.5 w-2.5 rounded-[1px] bg-current" })
			})]
		})]
	});
}
function Hero({ block }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl px-5 py-5",
		style: {
			background: "var(--md-primary-container)",
			color: "var(--md-on-primary-container)"
		},
		children: [
			block.kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-[0.14em] opacity-80",
				children: block.kicker
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-[26px] leading-tight font-medium tracking-tight",
				children: block.title
			}),
			block.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[13px] leading-snug opacity-85",
				children: block.subtitle
			}) : null
		]
	});
}
function SearchBar({ placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-11 items-center gap-2 rounded-xl px-3.5 text-[14px]",
		style: {
			background: "var(--md-surface-container)",
			color: "var(--md-on-variant)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
			className: "size-4 shrink-0",
			strokeWidth: 1.75
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: placeholder })]
	});
}
function Chips({ items, selected }) {
	const [cur, setCur] = (0, import_react.useState)(selected ?? 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
		children: items.map((item, i) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setCur(i),
				className: "h-8 shrink-0 rounded-full px-3.5 text-[12px] font-medium transition-[background-color,color,transform] duration-150 ease-out active:scale-[0.96]",
				style: i === cur ? {
					background: "var(--md-secondary-container)",
					color: "var(--md-on-secondary-container)"
				} : {
					background: "transparent",
					color: "var(--md-on-variant)",
					boxShadow: "inset 0 0 0 1px var(--md-outline-variant)"
				},
				children: item
			}, item);
		})
	});
}
function StatRow({ stats }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid rounded-xl px-2 py-4",
		style: {
			background: "var(--md-surface-container)",
			gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`
		},
		children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-[22px] leading-none font-medium tabular-nums",
				style: { color: "var(--md-on-surface)" },
				children: s.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 text-[11px] font-medium",
				style: { color: "var(--md-on-variant)" },
				children: s.label
			})]
		}, s.label))
	});
}
function Progress({ label, value, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl px-4 py-4",
		style: { background: "var(--md-surface-container)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[14px] font-medium",
				style: { color: "var(--md-on-surface)" },
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-2 overflow-hidden rounded-full",
				style: { background: "var(--md-outline-variant)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full transition-[width] duration-500",
					style: {
						width: `${Math.round(value * 100)}%`,
						background: "var(--md-primary)"
					}
				})
			}),
			caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-[12px]",
				style: { color: "var(--md-on-variant)" },
				children: caption
			}) : null
		]
	});
}
function Section({ title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between pt-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-[15px] font-medium",
			style: { color: "var(--md-on-surface)" },
			children: title
		}), action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[12px] font-medium",
			style: { color: "var(--md-primary)" },
			children: action
		}) : null]
	});
}
function CardBlock({ block }) {
	const accent = block.tone === "accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl px-4 py-4",
		style: {
			background: accent ? "var(--md-primary-container)" : "var(--md-surface-container)",
			color: accent ? "var(--md-on-primary-container)" : "var(--md-on-surface)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [block.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
					name: block.icon,
					className: "size-4"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[15px] font-medium",
					children: block.title
				})]
			}),
			block.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[13px] leading-snug opacity-90",
				children: block.body
			}) : null,
			block.meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[11px] font-medium opacity-70",
				children: block.meta
			}) : null
		]
	});
}
function Switch({ on, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": on,
		onClick: onChange,
		className: "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150 ease-out",
		style: { background: on ? "var(--md-primary)" : "var(--md-outline-variant)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-0.5 left-0.5 size-5 rounded-full transition-transform duration-150 ease-out",
			style: {
				transform: on ? "translateX(20px)" : "translateX(0)",
				background: on ? "var(--md-on-primary)" : "var(--md-surface)"
			}
		})
	});
}
function ListRow({ item, last }) {
	const [on, setOn] = (0, import_react.useState)(item.on ?? false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-14 items-center gap-3 px-4 py-2.5",
		style: { boxShadow: last ? "none" : "inset 0 -1px 0 var(--md-outline-variant)" },
		children: [
			item.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-9 shrink-0 items-center justify-center rounded-lg",
				style: {
					background: "var(--md-secondary-container)",
					color: "var(--md-on-secondary-container)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
					name: item.icon,
					className: "size-4"
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[14px] font-medium",
					style: { color: "var(--md-on-surface)" },
					children: item.title
				}), item.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[12px]",
					style: { color: "var(--md-on-variant)" },
					children: item.subtitle
				}) : null]
			}),
			item.meta && item.trailing !== "value" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] font-medium",
				style: { color: "var(--md-on-variant)" },
				children: item.meta
			}) : null,
			item.trailing === "value" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[13px] font-medium tabular-nums",
				style: { color: "var(--md-on-surface)" },
				children: item.value
			}) : null,
			item.trailing === "switch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				on,
				onChange: () => setOn((v) => !v)
			}) : null,
			item.trailing === "chevron" || !item.trailing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: "size-4 shrink-0",
				style: { color: "var(--md-outline)" }
			}) : null
		]
	});
}
function Toggle({ label, description, initial }) {
	const [on, setOn] = (0, import_react.useState)(initial);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-xl px-4 py-3.5",
		style: { background: "var(--md-surface-container)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[14px] font-medium",
				style: { color: "var(--md-on-surface)" },
				children: label
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-[12px] leading-snug",
				style: { color: "var(--md-on-variant)" },
				children: description
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			on,
			onChange: () => setOn((v) => !v)
		})]
	});
}
function Field({ label, placeholder, multiline }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-[12px] font-medium",
			style: { color: "var(--md-on-variant)" },
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("block rounded-lg px-3 py-3 text-[14px]", multiline ? "min-h-20" : "h-11"),
			style: {
				background: "var(--md-surface-container)",
				color: "var(--md-on-variant)"
			},
			children: placeholder
		})]
	});
}
function Action({ label, variant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "h-11 w-full rounded-lg text-[14px] font-medium transition-transform duration-150 ease-out active:scale-[0.96]",
		style: variant === "outline" ? {
			background: "transparent",
			color: "var(--md-primary)",
			boxShadow: "inset 0 0 0 1px var(--md-outline)"
		} : variant === "tonal" ? {
			background: "var(--md-secondary-container)",
			color: "var(--md-on-secondary-container)"
		} : {
			background: "var(--md-primary)",
			color: "var(--md-on-primary)"
		},
		children: label
	});
}
function Quote({ text, attribution }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl px-5 py-5",
		style: {
			background: "var(--md-primary-container)",
			color: "var(--md-on-primary-container)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[15px] leading-relaxed",
			children: text
		}), attribution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-[11px] font-medium opacity-70",
			children: attribution
		}) : null]
	});
}
function BlockView({ block }) {
	switch (block.type) {
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { block });
		case "search": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, { placeholder: block.placeholder });
		case "chips": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chips, {
			items: block.items,
			selected: block.selected
		});
		case "statRow": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatRow, { stats: block.stats });
		case "progress": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
			label: block.label,
			value: block.value,
			caption: block.caption
		});
		case "section": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: block.title,
			action: block.action
		});
		case "card": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBlock, { block });
		case "list": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl",
			style: { background: "var(--md-surface-container)" },
			children: block.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
				item,
				last: i === block.items.length - 1
			}, `${item.title}-${i}`))
		});
		case "toggle": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
			label: block.label,
			description: block.description,
			initial: block.on
		});
		case "field": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: block.label,
			placeholder: block.placeholder,
			multiline: block.multiline
		});
		case "button": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
			label: block.label,
			variant: block.variant
		});
		case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
			text: block.text,
			attribution: block.attribution
		});
		default: return null;
	}
}
function ScreenBody({ screen, snack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-0 flex-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-full overflow-y-auto px-4 pb-24",
				style: { color: "var(--md-on-surface)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[22px] leading-tight font-medium tracking-tight",
						children: screen.title
					}), screen.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px]",
						style: { color: "var(--md-on-variant)" },
						children: screen.subtitle
					}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
						className: "size-5",
						style: { color: "var(--md-on-variant)" }
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3 pb-4",
					children: screen.blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, `${block.type}-${i}`))
				})]
			}),
			screen.fab ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": screen.fab.label ?? "Add",
				className: "absolute right-4 bottom-3 flex size-14 items-center justify-center rounded-2xl transition-transform duration-150 ease-out active:scale-[0.96]",
				style: {
					background: "var(--md-primary-container)",
					color: "var(--md-on-primary-container)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
					name: screen.fab.icon,
					className: "size-6"
				})
			}) : null,
			snack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-4 bottom-4 rounded-lg px-3.5 py-2.5 text-[12px] font-medium",
				style: {
					background: "var(--md-inverse)",
					color: "var(--md-surface)"
				},
				children: snack
			}) : null
		]
	});
}
function SkeletonScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-3 px-4 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer h-28 rounded-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer h-20 rounded-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer h-14 rounded-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer h-14 rounded-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shimmer h-24 rounded-xl" })
		]
	});
}
function PhonePreview({ spec, activeScreenId, onScreenChange, generating = false }) {
	const vars = schemeCssVars((0, import_react.useMemo)(() => schemeFromSeed(spec.theme.seed, spec.theme.mode), [spec.theme.seed, spec.theme.mode]));
	const screen = spec.screens.find((s) => s.id === activeScreenId) ?? spec.screens[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "device mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "device-camera",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "device-screen",
			style: {
				...vars,
				background: "var(--md-surface)",
				color: "var(--md-on-surface)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {}),
				generating || !screen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonScreen, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenBody, {
					screen,
					snack: null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "relative z-10 flex h-16 shrink-0 items-stretch justify-around px-2 pb-2",
					style: {
						background: "var(--md-surface-container)",
						boxShadow: "inset 0 1px 0 var(--md-outline-variant)"
					},
					children: spec.nav.map((item) => {
						const selected = item.id === (screen?.id ?? activeScreenId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onScreenChange?.(item.id),
							className: "flex min-w-14 flex-1 flex-col items-center justify-center gap-1 pt-1 transition-transform duration-150 ease-out active:scale-[0.96]",
							style: { color: selected ? "var(--md-on-surface)" : "var(--md-on-variant)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-8 w-14 items-center justify-center rounded-full transition-colors duration-150",
								style: { background: selected ? "var(--md-secondary-container)" : "transparent" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
									name: item.icon,
									className: "size-5",
									filled: selected
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium",
								children: item.label
							})]
						}, item.id);
					})
				})
			]
		})]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", {
	variants: { variant: {
		default: "bg-elevated text-muted shadow-[var(--shadow-border)]",
		solid: "bg-accent text-accent-fg"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[transform,opacity,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "text-fg hover:bg-elevated",
			outline: "text-fg shadow-[var(--shadow-border)] hover:bg-elevated"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		ref,
		className: cn("flex min-h-24 w-full rounded-lg bg-elevated px-4 py-3 text-base text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40", className),
		...props
	});
});
Textarea.displayName = "Textarea";
var TEMPLATES = [
	{
		id: "bloom",
		blurb: "Houseplant care without the guilt",
		spec: {
			name: "Bloom",
			packageName: "com.forge.bloom",
			tagline: "Water the right plant, at the right time.",
			theme: {
				seed: "#3F6B54",
				mode: "light"
			},
			nav: [
				{
					id: "home",
					label: "Today",
					icon: "leaf"
				},
				{
					id: "garden",
					label: "Garden",
					icon: "search"
				},
				{
					id: "care",
					label: "Care",
					icon: "settings"
				}
			],
			screens: [
				{
					id: "home",
					title: "Bloom",
					subtitle: "Saturday",
					fab: {
						icon: "add",
						label: "Add plant"
					},
					blocks: [
						{
							type: "hero",
							kicker: "Good morning",
							title: "Two plants need a drink",
							subtitle: "Fiddle-leaf and pothos are thirsty. The rest can wait."
						},
						{
							type: "statRow",
							stats: [
								{
									label: "Plants",
									value: "8"
								},
								{
									label: "Due today",
									value: "2"
								},
								{
									label: "Streak",
									value: "12d"
								}
							]
						},
						{
							type: "section",
							title: "Today",
							action: "See all"
						},
						{
							type: "list",
							items: [
								{
									title: "Fiddle-leaf fig",
									subtitle: "Last watered 9 days ago",
									icon: "water",
									trailing: "chevron",
									meta: "250 ml"
								},
								{
									title: "Golden pothos",
									subtitle: "Leaves are starting to droop",
									icon: "water",
									trailing: "chevron",
									meta: "180 ml"
								},
								{
									title: "Boston fern",
									subtitle: "Mist only — soil is still damp",
									icon: "leaf",
									trailing: "chevron",
									meta: "Mist"
								}
							]
						},
						{
							type: "section",
							title: "Looking happy"
						},
						{
							type: "card",
							title: "Snake plant",
							body: "Last watered 18 days ago and still fine. This one likes to be ignored.",
							meta: "Low light · Monthly",
							icon: "leaf",
							tone: "accent"
						}
					]
				},
				{
					id: "garden",
					title: "Garden",
					subtitle: "8 plants",
					blocks: [
						{
							type: "search",
							placeholder: "Search plants"
						},
						{
							type: "chips",
							items: [
								"All",
								"Low light",
								"Pet safe",
								"Thirsty"
							],
							selected: 0
						},
						{
							type: "list",
							items: [
								{
									title: "Fiddle-leaf fig",
									subtitle: "Living room · Bright",
									icon: "leaf",
									trailing: "chevron"
								},
								{
									title: "Golden pothos",
									subtitle: "Kitchen · Medium",
									icon: "leaf",
									trailing: "chevron"
								},
								{
									title: "Snake plant",
									subtitle: "Hallway · Low",
									icon: "leaf",
									trailing: "chevron"
								},
								{
									title: "Monstera",
									subtitle: "Studio · Bright",
									icon: "leaf",
									trailing: "chevron"
								},
								{
									title: "Boston fern",
									subtitle: "Bathroom · Humidity",
									icon: "leaf",
									trailing: "chevron"
								},
								{
									title: "Olive tree",
									subtitle: "Balcony · Direct",
									icon: "leaf",
									trailing: "chevron"
								}
							]
						}
					]
				},
				{
					id: "care",
					title: "Care",
					blocks: [
						{
							type: "progress",
							label: "Weekly watering",
							value: .72,
							caption: "5 of 7 care tasks done"
						},
						{
							type: "section",
							title: "Reminders"
						},
						{
							type: "toggle",
							label: "Morning check-in",
							description: "A quiet nudge at 8:00 if something is due",
							on: true
						},
						{
							type: "toggle",
							label: "Skip when raining",
							description: "Outdoor plants pause after wet weather",
							on: false
						},
						{
							type: "list",
							items: [
								{
									title: "Notification time",
									trailing: "value",
									value: "08:00"
								},
								{
									title: "Units",
									trailing: "value",
									value: "ml"
								},
								{
									title: "Default light",
									trailing: "value",
									value: "Medium"
								}
							]
						}
					]
				}
			]
		}
	},
	{
		id: "ledger",
		blurb: "A calm ledger for everyday spend",
		spec: {
			name: "Ledger",
			packageName: "com.forge.ledger",
			tagline: "See where the month actually went.",
			theme: {
				seed: "#3E534C",
				mode: "light"
			},
			nav: [
				{
					id: "home",
					label: "Month",
					icon: "wallet"
				},
				{
					id: "activity",
					label: "Activity",
					icon: "chart"
				},
				{
					id: "budget",
					label: "Budget",
					icon: "settings"
				}
			],
			screens: [
				{
					id: "home",
					title: "September",
					subtitle: "Checking · 4482",
					fab: {
						icon: "add",
						label: "Add"
					},
					blocks: [
						{
							type: "hero",
							kicker: "Left to spend",
							title: "$1,240",
							subtitle: "of a $2,800 monthly envelope. 21 days remain."
						},
						{
							type: "statRow",
							stats: [
								{
									label: "Spent",
									value: "$1,560"
								},
								{
									label: "Income",
									value: "$4,200"
								},
								{
									label: "Saved",
									value: "18%"
								}
							]
						},
						{
							type: "section",
							title: "Recent",
							action: "All"
						},
						{
							type: "list",
							items: [
								{
									title: "Market on Pine",
									subtitle: "Groceries",
									meta: "Yesterday",
									trailing: "value",
									value: "−$64.20",
									icon: "restaurant"
								},
								{
									title: "Metro pass",
									subtitle: "Transit",
									meta: "Mon",
									trailing: "value",
									value: "−$28.00",
									icon: "map"
								},
								{
									title: "Northwell payroll",
									subtitle: "Income",
									meta: "Fri",
									trailing: "value",
									value: "+$2,100",
									icon: "wallet"
								},
								{
									title: "Atelier coffee",
									subtitle: "Cafés",
									meta: "Fri",
									trailing: "value",
									value: "−$6.50",
									icon: "restaurant"
								}
							]
						}
					]
				},
				{
					id: "activity",
					title: "Activity",
					blocks: [
						{
							type: "search",
							placeholder: "Search merchants"
						},
						{
							type: "chips",
							items: [
								"All",
								"Food",
								"Home",
								"Transit",
								"Income"
							],
							selected: 0
						},
						{
							type: "list",
							items: [
								{
									title: "Week of Sep 1",
									subtitle: "18 charges",
									trailing: "value",
									value: "−$412"
								},
								{
									title: "Week of Aug 25",
									subtitle: "21 charges",
									trailing: "value",
									value: "−$388"
								},
								{
									title: "Week of Aug 18",
									subtitle: "16 charges",
									trailing: "value",
									value: "−$291"
								}
							]
						},
						{
							type: "card",
							title: "Cafés are up 22%",
							body: "Eight visits this month versus five last month. Still under the $80 envelope.",
							icon: "chart",
							tone: "accent"
						}
					]
				},
				{
					id: "budget",
					title: "Budget",
					blocks: [
						{
							type: "progress",
							label: "Groceries",
							value: .64,
							caption: "$320 of $500"
						},
						{
							type: "progress",
							label: "Transit",
							value: .4,
							caption: "$80 of $200"
						},
						{
							type: "progress",
							label: "Cafés",
							value: .71,
							caption: "$57 of $80"
						},
						{
							type: "section",
							title: "Rules"
						},
						{
							type: "toggle",
							label: "Round up to savings",
							description: "Spare change from each charge",
							on: true
						},
						{
							type: "toggle",
							label: "Warn at 80%",
							description: "A single note, never a nag",
							on: true
						}
					]
				}
			]
		}
	},
	{
		id: "pulse",
		blurb: "Strength log for a small garage gym",
		spec: {
			name: "Pulse",
			packageName: "com.forge.pulse",
			tagline: "Log the work. Watch the slow climb.",
			theme: {
				seed: "#4A7C6F",
				mode: "dark"
			},
			nav: [
				{
					id: "home",
					label: "Train",
					icon: "fitness"
				},
				{
					id: "log",
					label: "Log",
					icon: "calendar"
				},
				{
					id: "body",
					label: "Body",
					icon: "person"
				}
			],
			screens: [
				{
					id: "home",
					title: "Pulse",
					subtitle: "Week 14",
					fab: {
						icon: "add",
						label: "Start"
					},
					blocks: [
						{
							type: "hero",
							kicker: "Today · Lower",
							title: "Squat, RDL, lunges",
							subtitle: "Last session: squat 225 × 5. Aim for 230 if the bar is fast."
						},
						{
							type: "statRow",
							stats: [
								{
									label: "Streak",
									value: "9"
								},
								{
									label: "PRs",
									value: "3"
								},
								{
									label: "Minutes",
									value: "48"
								}
							]
						},
						{
							type: "section",
							title: "Session"
						},
						{
							type: "list",
							items: [
								{
									title: "Back squat",
									subtitle: "5 × 5",
									trailing: "value",
									value: "225 lb",
									icon: "fitness"
								},
								{
									title: "Romanian deadlift",
									subtitle: "3 × 8",
									trailing: "value",
									value: "185 lb",
									icon: "fitness"
								},
								{
									title: "Walking lunge",
									subtitle: "3 × 12",
									trailing: "value",
									value: "40 lb",
									icon: "fitness"
								},
								{
									title: "Hanging knee raise",
									subtitle: "3 × 12",
									trailing: "value",
									value: "BW",
									icon: "timer"
								}
							]
						}
					]
				},
				{
					id: "log",
					title: "Log",
					blocks: [{
						type: "chips",
						items: [
							"All",
							"Lower",
							"Upper",
							"Conditioning"
						],
						selected: 0
					}, {
						type: "list",
						items: [
							{
								title: "Thu · Lower A",
								subtitle: "Squat 225 × 5",
								trailing: "chevron",
								meta: "51 min"
							},
							{
								title: "Tue · Upper A",
								subtitle: "Bench 185 × 5",
								trailing: "chevron",
								meta: "47 min"
							},
							{
								title: "Sun · Conditioning",
								subtitle: "Row 5k",
								trailing: "chevron",
								meta: "22 min"
							},
							{
								title: "Fri · Lower B",
								subtitle: "Deadlift 315 × 3",
								trailing: "chevron",
								meta: "44 min"
							}
						]
					}]
				},
				{
					id: "body",
					title: "Body",
					blocks: [
						{
							type: "card",
							title: "Bodyweight",
							body: "178.4 lb this morning. Down 2.1 from four weeks ago — slow, which is the point.",
							meta: "Updated today",
							icon: "person",
							tone: "accent"
						},
						{
							type: "section",
							title: "Preferences"
						},
						{
							type: "toggle",
							label: "Rest timer",
							description: "Three minutes between main sets",
							on: true
						},
						{
							type: "list",
							items: [{
								title: "Units",
								trailing: "value",
								value: "lb"
							}, {
								title: "Bar weight",
								trailing: "value",
								value: "45 lb"
							}]
						}
					]
				}
			]
		}
	},
	{
		id: "lumen",
		blurb: "A reading list that stays out of the way",
		spec: {
			name: "Lumen",
			packageName: "com.forge.lumen",
			tagline: "What you’re reading, and what comes next.",
			theme: {
				seed: "#5C5346",
				mode: "light"
			},
			nav: [
				{
					id: "home",
					label: "Now",
					icon: "book"
				},
				{
					id: "shelf",
					label: "Shelf",
					icon: "search"
				},
				{
					id: "notes",
					label: "Notes",
					icon: "edit"
				}
			],
			screens: [
				{
					id: "home",
					title: "Lumen",
					subtitle: "Evening",
					fab: {
						icon: "add",
						label: "Add book"
					},
					blocks: [
						{
							type: "hero",
							kicker: "Currently reading",
							title: "A Pattern Language",
							subtitle: "Alexander, Ishikawa, Silverstein · page 214 of 1171"
						},
						{
							type: "progress",
							label: "Tonight’s goal",
							value: .35,
							caption: "12 pages · 20 minute sitting"
						},
						{
							type: "statRow",
							stats: [
								{
									label: "This year",
									value: "11"
								},
								{
									label: "Queue",
									value: "7"
								},
								{
									label: "Abandoned",
									value: "2"
								}
							]
						},
						{
							type: "section",
							title: "Up next"
						},
						{
							type: "list",
							items: [
								{
									title: "The Living Mountain",
									subtitle: "Nan Shepherd",
									trailing: "chevron",
									icon: "book"
								},
								{
									title: "How Buildings Learn",
									subtitle: "Stewart Brand",
									trailing: "chevron",
									icon: "book"
								},
								{
									title: "In Praise of Shadows",
									subtitle: "Jun’ichirō Tanizaki",
									trailing: "chevron",
									icon: "book"
								}
							]
						}
					]
				},
				{
					id: "shelf",
					title: "Shelf",
					blocks: [
						{
							type: "search",
							placeholder: "Title or author"
						},
						{
							type: "chips",
							items: [
								"All",
								"Reading",
								"Queue",
								"Finished"
							],
							selected: 1
						},
						{
							type: "list",
							items: [
								{
									title: "A Pattern Language",
									subtitle: "Architecture",
									trailing: "value",
									value: "18%"
								},
								{
									title: "The Living Mountain",
									subtitle: "Landscape",
									trailing: "value",
									value: "Queue"
								},
								{
									title: "Four Thousand Weeks",
									subtitle: "Time",
									trailing: "value",
									value: "Done"
								},
								{
									title: "The Overstory",
									subtitle: "Fiction",
									trailing: "value",
									value: "Done"
								}
							]
						}
					]
				},
				{
					id: "notes",
					title: "Notes",
					blocks: [
						{
							type: "quote",
							text: "A building or a town will only be alive to the extent that it is made by the people in it.",
							attribution: "A Pattern Language · 14"
						},
						{
							type: "section",
							title: "Captures"
						},
						{
							type: "card",
							title: "Alcoves",
							body: "Every public room needs a pocket of smaller scale — a window seat, a nook — or people won’t linger.",
							meta: "Pattern 179",
							icon: "edit"
						},
						{
							type: "button",
							label: "New note",
							variant: "tonal"
						}
					]
				}
			]
		}
	}
];
var EXAMPLE_PROMPTS = [
	"A quiet habit tracker for morning stretching",
	"Neighborhood tool library with borrow and return",
	"Home wine tastings with a cellar notebook",
	"A kid chore board with weekly stars"
];
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var generateAndroidApp = createServerFn({ method: "POST" }).validator((input) => {
	return {
		prompt: (typeof input?.prompt === "string" ? input.prompt.trim() : "").slice(0, 1500),
		currentSpec: input?.currentSpec
	};
}).handler(createSsrRpc("1be802d4e45142c356482c8ddb01d97320743710ccd34590d1c4d66749cf35cc"));
function makeProject(spec, messages) {
	const now = Date.now();
	return {
		id: newId(),
		spec,
		messages,
		createdAt: now,
		updatedAt: now
	};
}
var useStudio = create()(persist((set, get) => ({
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
			project: makeProject(tpl.spec, [{
				id: newId(),
				role: "assistant",
				text: `Loaded ${tpl.spec.name}. ${tpl.spec.tagline} Tap through the phone, then tell me what to change — or download the APK-ready Android project.`
			}]),
			generating: false,
			error: null,
			activeScreenId: tpl.spec.screens[0]?.id ?? "home",
			activeFile: null,
			studioTab: "preview"
		});
	},
	loadSpec: (spec, note, prompt) => {
		const messages = [];
		if (prompt) messages.push({
			id: newId(),
			role: "user",
			text: prompt
		});
		messages.push({
			id: newId(),
			role: "assistant",
			text: note
		});
		set({
			project: makeProject(spec, messages),
			generating: false,
			error: null,
			activeScreenId: spec.screens[0]?.id ?? "home",
			activeFile: null,
			studioTab: "preview"
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
			project: existing ? {
				...existing,
				messages: [...existing.messages, {
					id: newId(),
					role: "user",
					text: trimmed
				}],
				updatedAt: now
			} : {
				id: newId(),
				spec: SKELETON_SPEC,
				messages: [{
					id: newId(),
					role: "user",
					text: trimmed
				}],
				createdAt: now,
				updatedAt: now
			},
			studioTab: "preview"
		});
		try {
			const res = await generateAndroidApp({ data: { prompt: trimmed } });
			if (!res.ok) {
				set({
					generating: false,
					error: res.error
				});
				return false;
			}
			const prev = get().project;
			set({
				generating: false,
				error: null,
				project: makeProject(res.app.spec, [...prev?.messages ?? [{
					id: newId(),
					role: "user",
					text: trimmed
				}], {
					id: newId(),
					role: "assistant",
					text: res.app.note
				}]),
				activeScreenId: res.app.spec.screens[0]?.id ?? "home"
			});
			return true;
		} catch {
			set({
				generating: false,
				error: "Something went wrong talking to the built-in AI. Try again."
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
				messages: [...project.messages, {
					id: newId(),
					role: "user",
					text: trimmed
				}]
			}
		});
		try {
			const res = await generateAndroidApp({ data: {
				prompt: trimmed,
				currentSpec: project.spec
			} });
			if (!res.ok) {
				set({
					generating: false,
					error: res.error
				});
				return false;
			}
			const latest = get().project;
			set({
				generating: false,
				error: null,
				project: {
					id: latest?.id ?? project.id,
					spec: res.app.spec,
					messages: [...latest?.messages ?? project.messages, {
						id: newId(),
						role: "assistant",
						text: res.app.note
					}],
					createdAt: latest?.createdAt ?? project.createdAt,
					updatedAt: Date.now()
				},
				activeScreenId: res.app.spec.screens.some((s) => s.id === get().activeScreenId) ? get().activeScreenId : res.app.spec.screens[0]?.id ?? "home"
			});
			return true;
		} catch {
			set({
				generating: false,
				error: "Something went wrong talking to the built-in AI. Try again."
			});
			return false;
		}
	},
	setActiveScreen: (id) => set({ activeScreenId: id }),
	setActiveFile: (path) => set({ activeFile: path }),
	setStudioTab: (tab) => set({ studioTab: tab }),
	clearError: () => set({ error: null }),
	reset: () => set({
		project: null,
		generating: false,
		error: null,
		activeScreenId: "home",
		activeFile: null,
		studioTab: "preview"
	})
}), {
	name: "forge-studio",
	partialize: (state) => ({
		project: state.project,
		activeScreenId: state.activeScreenId
	})
}));
//#endregion
export { TEMPLATES as a, schemeFromSeed as c, PhonePreview as i, useStudio as l, Button as n, Textarea as o, EXAMPLE_PROMPTS as r, hexToArgb as s, Badge as t };
