---
type: process
status: verified
consumes: ["../objects/app-shell/root-layout.md", "../objects/app-shell/hero-page.md"]
produces: ["../objects/app-shell/hero-page.md"]
---

# render-page

Next.js turns a request for `/` into one prerendered HTML document with no client data fetching.

## Input → Movement → Output

The App Router receives `GET /`, renders the root layout and the home page on the server, and streams HTML. The layout mounts header and footer around the page. At build time the route is static; at dev time the same path hot-reloads.

## Why this shape

There is no API, database, or auth, so the page can be a server component with zero client JavaScript except the header's sheet. Keeping the hero static makes the first paint cheap and the build deterministic.

## Steps

1. `src/app/layout.tsx:55` renders `<html class="dark">` with font variables and metadata.
2. `src/app/layout.tsx:65` mounts `SiteHeader`; `src/app/layout.tsx:67` mounts `SiteFooter`.
3. `src/app/page.tsx:23` renders the hero section and its static arrays.
4. `next build` prerenders `/` and `/_not-found` as static routes.
5. The browser hydrates only the client components (header sheet); the rest stays server HTML.

## If you change this

- **Hits:** first paint, static rendering, metadata, header interactivity
- **Does not hit:** nav labels or copy; those are data in `site-config` and the page

## Surfaces

| Surface | Role |
|---|---|
| Browser | receives prerendered HTML |
| `next build` | emits static routes |
| Dev server | recompiles on change |

## See

- Objects: [root-layout](../objects/app-shell/root-layout.md), [hero-page](../objects/app-shell/hero-page.md)
- Source: `src/app/layout.tsx`, `src/app/page.tsx`
