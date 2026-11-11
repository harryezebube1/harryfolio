---
type: object
cluster: app-shell
universe: live
status: verified
entity: src/app/layout.tsx
---

# Root layout

The App Router root document: fonts, metadata, viewport, header/footer mounting, and the flex shell every route inherits.

## Why this shape

Global chrome lives in one place so pages only own their content. The header and footer read the same site config, and the body is a `min-h-dvh` flex column so short pages still pin the footer to the viewport bottom. The `<html>` element carries `dark` unconditionally: there is no theme toggle in Phase 1.

## Shape

- Loads Geist Sans and Geist Mono as CSS variables `--font-geist-sans` / `--font-geist-mono`.
- Exports `metadata` (title template, description, keywords, Open Graph, Twitter) and `viewport` (`themeColor`, `colorScheme: dark`).
- Renders `TooltipProvider > SiteHeader > main > SiteFooter`.
- `main` is `flex-1`; pages provide their own sections.

Citations: `src/app/layout.tsx:20`, `src/app/layout.tsx:50`, `src/app/layout.tsx:55`, `src/app/layout.tsx:58`

## Connected to

- **owns:** document `<html>`/`<body>`, font variables, global metadata
- **owned-by:** Next.js App Router (`src/app/`)
- **joins:** [theme-tokens](theme-tokens.md), [site-header](../navigation/site-header.md), [site-footer](../navigation/site-footer.md)
- **looks-like-but-is-not:** `next.config.ts` (build config, not document markup)

## If you change this

- **Hits:** every route's chrome, font rendering, page metadata, footer height behavior
- **Does not hit:** section copy inside `src/app/page.tsx`; header nav labels (those live in [site-config](../navigation/site-config.md))

## Surfaces

| Surface | Role |
|---|---|
| Next.js server | renders the document on every request/build |
| `next build` | statically prerenders `/` |
| Browser | reads fonts, theme color, metadata |

## See

- Source: `src/app/layout.tsx`
- Theme: [theme-tokens](theme-tokens.md)
