---
type: object
cluster: ui
universe: live
status: verified
entity: src/components/icons.tsx
---

# Brand icons

Hand-written GitHub and LinkedIn SVGs because current Lucide no longer exports brand icons.

## Why this shape

The build failed on `import { Github, Linkedin } from "lucide-react"`; Lucide removed brand marks. Rather than add an icon dependency for two glyphs, the icons are inline `currentColor` SVGs that accept `className` and standard SVG props. `cn` supplies the default `size-4`, and `aria-hidden` is hard-coded since every use is paired with an `aria-label` on the parent link.

## Shape

- `GitHubIcon`, `LinkedInIcon`: `viewBox="0 0 24 24"`, `fill="currentColor"`.
- Props: `ComponentProps<"svg">`; default class `size-4`.
- Paths sourced from the Simple Icons brand marks.

Citations: `src/components/icons.tsx:7`, `src/components/icons.tsx:21`

## Connected to

- **owns:** the two brand glyphs
- **owned-by:** none
- **joins:** [site-header](../navigation/site-header.md), [site-footer](../navigation/site-footer.md)
- **looks-like-but-is-not:** Lucide icons; do not re-export these from a Lucide namespace

## If you change this

- **Hits:** header social buttons, footer social buttons, icon sizing/alignment
- **Does not hit:** nav text, external URLs (those live in `site-config`)

## Surfaces

| Surface | Role |
|---|---|
| Header/footer | render inside ghost icon buttons |

## See

- Source: `src/components/icons.tsx`
