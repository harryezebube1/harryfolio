# navigation — identity, links, header, footer

Read this before changing nav labels, social links, the brand lockup, or the mobile menu.

| Card | What it owns |
|---|---|
| [site-config](site-config.md) | single source for name, role, description, URLs, nav array |
| [site-header](site-header.md) | sticky header, brand, desktop nav, socials, sheet menu |
| [site-footer](site-footer.md) | footer signature, stack line, contact/social icons |

The header and footer both read `site-config`; edit the config before editing markup.

Do **not** load: `objects/app-shell/theme-tokens.md` unless colors are in scope.
