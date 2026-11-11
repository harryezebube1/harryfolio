---
type: object
cluster: app-shell
universe: live
status: verified
entity: src/app/page.tsx
---

# Home hero

The `/` route's top section: availability badge, headline, intro, CTAs, stack chips, terminal panel, and a three-cell "focus / shipping / open to" strip.

## Why this shape

Phase 1 proved the theme with one strong screen; Phase 2 mounts five sections below it. The hero is a single server component with no client JS; the terminal panel and grid background are decorative `aria-hidden` elements so they add atmosphere without adding accessibility noise.

## Shape

- `stack` is a local `const` array of seven labels rendered as outline badges.
- Two CTAs: `#projects` (live anchor) and the GitHub URL from `site-config`.
- Terminal panel is static markup styled with mono type and three traffic-light dots.
- Bottom strip is a three-column `dl`-like grid of label/value pairs.

Citations: `src/app/page.tsx:9`, `src/app/page.tsx:23`, `src/app/page.tsx:28`, `src/app/page.tsx:46`

## Connected to

- **owns:** hero copy, stack chip labels, terminal panel content
- **owned-by:** `src/app/layout.tsx` shell
- **joins:** [site-config](../navigation/site-config.md) (GitHub URL), [theme-tokens](theme-tokens.md) (`bg-grid`, `text-gradient`)
- **looks-like-but-is-not:** a reusable `Hero` component; there is no export or prop surface

## If you change this

- **Hits:** the first screen, the `#projects` anchor destination, stack claims, social URL rendering
- **Does not hit:** the five content sections or their data modules; nav labels live in `site-config`

## Surfaces

| Surface | Role |
|---|---|
| Visitor | reads positioning and CTAs |
| `next build` | prerenders the route |

## See

- Source: `src/app/page.tsx`
- Content model (Phase 2): [content-model](../content/content-model.md)
