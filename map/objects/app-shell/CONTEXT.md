# app-shell — how the document is assembled and themed

Read this before changing fonts, metadata, page structure, or global colors.

| Card | What it owns |
|---|---|
| [root-layout](root-layout.md) | `<html>`, fonts, metadata, header/footer mounting, body flex shell |
| [hero-page](hero-page.md) | the `/` route hero, stack chips, terminal panel |
| [theme-tokens](theme-tokens.md) | `globals.css` palette, radii, base styles, custom utilities |

Barrel: none. These are routes and global styles, not a component library.

Do **not** load: `objects/navigation/` unless the header/footer markup is in scope.
