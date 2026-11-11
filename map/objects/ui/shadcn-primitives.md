---
type: object
cluster: ui
universe: live
status: verified
entity: src/components/ui/
---

# shadcn primitives

Generated component set under `src/components/ui/`, owned by the shadcn CLI and configured by `components.json`.

## Why this shape

The CLI writes accessible Radix wrappers with local source, so the repo owns the markup instead of importing an opaque library. The `radix-nova` preset installed the newer `radix-ui` package (one import surface) and the official `cn` class-merge package, so `src/lib/utils.ts` is a one-line re-export rather than the older `clsx` + `tailwind-merge` pair.

## Shape

- Installed: `button`, `card`, `badge`, `separator`, `input`, `textarea`, `tooltip`, `sheet`, `dialog`, `dropdown-menu`.
- `components.json`: style `radix-nova`, RSC on, CSS variables, Lucide icon library.
- Primitives import `cn` from `"cn"` directly; app code should import `cn` from `@/lib/utils`.
- `TooltipProvider` must wrap tooltip consumers; it is mounted in the root layout.

Citations: `src/lib/utils.ts:1`, `components.json:3`, `src/app/layout.tsx:64`

## Connected to

- **owns:** primitive markup, variants, focus/disabled states
- **owned-by:** shadcn CLI (`npx shadcn add <name>`)
- **joins:** [theme-tokens](../app-shell/theme-tokens.md) for semantic color/radius utilities
- **looks-like-but-is-not:** hand-authored app components; treat `ui/` as generated territory

## If you change this

- **Hits:** every consumer of that primitive; variant API and focus rings
- **Does not hit:** the shadcn registry cache; re-running `add` may overwrite manual edits

## Surfaces

| Surface | Role |
|---|---|
| Header/footer/hero | consume button, badge, sheet, tooltip |
| Future sections | consume card, separator, inputs |
| CLI | writes/rewrites files |

## See

- Source: `src/components/ui/`
- Config: `components.json`
