---
type: object
cluster: app-shell
universe: live
status: verified
entity: src/app/globals.css
---

# Theme tokens

The single source of color, radius, typography, and atmosphere. Tailwind v4 reads it directly; there is no `tailwind.config`.

## Why this shape

shadcn primitives expect named CSS variables (`--background`, `--primary`, `--border`, ...). Declaring them in `:root` and mapping them through `@theme inline` lets components use semantic utilities (`bg-card`, `text-muted-foreground`) while the palette stays in one file. The light palette was intentionally replaced: `:root` and `.dark` share the same dark values, and `layout.tsx` always sets `dark`.

Accent strategy: violet `--brand` for emphasis/CTAs, cyan `--signal` for terminal highlights and secondary glow. Both are exposed as Tailwind colors via `--color-brand` and `--color-signal`.

## Shape

- Palette: `oklch()` values, near-black violet-tinted background (`0.135 0.012 275`).
- `--radius: 0.625rem` drives the `--radius-*` scale.
- Custom utilities: `bg-grid`, `bg-dot`, `text-gradient`.
- Base layer: border/outline defaults, selection color, smooth scroll, reduced-motion overrides.
- Body background: one radial violet glow at the top, no images.

Citations: `src/app/globals.css:58`, `src/app/globals.css:78`, `src/app/globals.css:100`, `src/app/globals.css:137`, `src/app/globals.css:149`

## Connected to

- **owns:** every semantic color/radius token, global background, selection, motion fallback
- **owned-by:** `src/app/layout.tsx` imports it once
- **joins:** all `src/components/ui/*`, header, footer, hero
- **looks-like-but-is-not:** `components.json` (registry config, no colors)

## If you change this

- **Hits:** every screen and primitive; contrast and focus rings must be rechecked; the `dark` class assumption in layout
- **Does not hit:** copy, nav labels, metadata; shadcn registry style (that lives in `components.json`)

## Surfaces

| Surface | Role |
|---|---|
| Tailwind build | resolves utilities from the `@theme` map |
| Every component | reads semantic tokens |
| Browser | paints background, focus rings, selection |

## See

- Source: `src/app/globals.css`
- Registry config: `components.json`
