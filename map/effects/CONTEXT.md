# Change-impact index

Read this first when you are about to change something. It names which cards to open. The cards own the waterfalls; this file only routes.

| If you are changing | Open first | Then check |
|---|---|---|
| `src/app/globals.css` tokens, radius, utilities | [theme-tokens](../objects/app-shell/theme-tokens.md) | every primitive and section for contrast/focus |
| `src/lib/site.ts` identity, links, nav | [site-config](../objects/navigation/site-config.md) | header, footer, layout metadata, hero CTA |
| `src/app/layout.tsx` fonts/metadata/chrome | [root-layout](../objects/app-shell/root-layout.md) | header/footer mount, tooltip provider, metadata |
| `src/app/page.tsx` hero or section order | [hero-page](../objects/app-shell/hero-page.md) | nav anchors, footer spacing |
| `src/components/site-header.tsx` | [site-header](../objects/navigation/site-header.md) | mobile sheet, nav labels, z-index |
| `src/components/site-footer.tsx` | [site-footer](../objects/navigation/site-footer.md) | social/contact URLs |
| `src/components/icons.tsx` | [brand-icons](../objects/ui/brand-icons.md) | header + footer icon sizing |
| `src/components/ui/*` or `components.json` | [shadcn-primitives](../objects/ui/shadcn-primitives.md) | all consumers of the primitive; CLI overwrite risk |
| `src/content/*` or a new section | [content-model](../objects/content/content-model.md) | [add-content-section](../processes/add-content-section.md) |
| `AGENTS.md`, RTK, skill files | [agent-toolchain](../objects/tooling/agent-toolchain.md) | future agent sessions only |
| `package.json` scripts or dependencies | [build-verify](../processes/build-verify.md) | lint + production build |

## First-order rules

- Theme tokens hit everything visual; copy changes hit one section.
- Site config hits three surfaces (header, footer, metadata) plus the hero CTA.
- New sections hit nav, page order, and this index.
- Generated `ui/` files are overwritten by the shadcn CLI; app changes belong in wrappers.

## Outside the tree

No external consumers are known: there is no CI, scheduler, or second app reading this repo. Revisit this section after deployment (Vercel project settings, custom domain, analytics).
