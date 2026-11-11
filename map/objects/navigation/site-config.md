---
type: object
cluster: navigation
universe: live
status: verified
entity: src/lib/site.ts
---

# Site configuration

Single source for Harry's identity, role, description, external links, resume target, and the nav array consumed by the header.

## Why this shape

Nav labels, social URLs, and metadata all repeat across header, footer, layout, and hero. Keeping them in one `as const` object prevents drift and makes a rename a one-file change. The type export (`SiteConfig`) gives editor autocomplete without a schema library.

## Shape

- `name`, `brand`, `role`, `title`, `description`.
- `links`: `github`, `linkedin`, `email`, `resume`.
- `nav`: five `{ label, href }` pairs, all in-page anchors.
- Social handles and email are real. `resume` still points to `#contact` until a PDF exists.

Citations: `src/lib/site.ts:1`, `src/lib/site.ts:8`, `src/lib/site.ts:15`

## Connected to

- **owns:** identity strings, nav labels/hrefs, social URLs
- **owned-by:** none (leaf module)
- **joins:** [site-header](site-header.md), [site-footer](site-footer.md), [root-layout](../app-shell/root-layout.md), [hero-page](../app-shell/hero-page.md)
- **looks-like-but-is-not:** `next.config.ts`; that is build configuration

## If you change this

- **Hits:** header brand + desktop/mobile nav, footer signature and mailto, layout metadata title/description, hero GitHub button, resume link
- **Does not hit:** theme colors, shadcn component internals, `README.md`/`PLAN.md` prose

## Surfaces

| Surface | Role |
|---|---|
| Header | reads nav, name, role, links |
| Footer | reads name, email, social URLs |
| Layout | reads title, description, name |
| Hero | reads GitHub URL |

## See

- Source: `src/lib/site.ts`
