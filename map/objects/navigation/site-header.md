---
type: object
cluster: navigation
universe: live
status: verified
entity: src/components/site-header.tsx
---

# Site header

Sticky, blurred top bar with a terminal-mark brand, desktop nav, social icon buttons, resume CTA, and a mobile sheet menu.

## Why this shape

The header is a client component only because Radix `Sheet` needs `useState`/portal behavior. Everything else is plain markup. Nav labels come from `site-config`; the header owns only layout and responsive visibility. Social icons are hidden on the smallest breakpoint and repeated inside the sheet so the mobile menu stays self-contained.

## Shape

- `Brand` is a local component (not exported) linking `/`.
- `SocialLinks` is a local component reused in the bar and sheet footer.
- Desktop nav is hidden below `md`; the sheet trigger appears below `md`.
- Resume uses `Button asChild` + `<a>` so it stays a real link.

Citations: `src/components/site-header.tsx:18`, `src/components/site-header.tsx:42`, `src/components/site-header.tsx:59`, `src/components/site-header.tsx:86`

## Connected to

- **owns:** header layout, brand lockup, mobile menu, header CTA placement
- **owned-by:** `src/app/layout.tsx`
- **joins:** [site-config](site-config.md), [brand-icons](../ui/brand-icons.md), shadcn `button` + `sheet`
- **looks-like-but-is-not:** the footer's social row; they share icons but not markup

## If you change this

- **Hits:** every route's sticky chrome, mobile navigation, anchor clicks, z-index/stacking above hero glows
- **Does not hit:** page content, footer layout, metadata; nav labels live in `site-config`

## Surfaces

| Surface | Role |
|---|---|
| Visitor | navigates sections and external profiles |
| Client runtime | mounts the sheet portal on demand |

## See

- Source: `src/components/site-header.tsx`
- Config: [site-config](site-config.md)
