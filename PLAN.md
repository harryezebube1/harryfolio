# Harryfolio — Plan

AI Engineer portfolio for Harry. Dark-mode-first developer aesthetic.

## Phase 1 — Scaffold ✅

- [x] Next.js 16 App Router + TypeScript + Tailwind CSS v4
- [x] Lucide React icons
- [x] shadcn/ui (radix-nova preset, CSS variables, Lucide)
- [x] Core primitives: button, card, badge, separator, input, textarea, tooltip, sheet, dialog, dropdown-menu
- [x] Dark-first theme tokens, grid/glow background, mono accents
- [x] Sticky header with responsive sheet navigation
- [x] Footer + social links
- [x] Hero shell with terminal-style panel
- [x] Metadata, viewport theme color, favicon
- [x] ESLint + production build passing

### Mandatory tooling

- [x] RTK installed (`rtk 1.2.0`) and OpenCode plugin registered (`~/.config/opencode/plugins/rtk.ts`)
- [x] `icm-architect` skill installed at `.opencode/skills/icm-architect`
- [x] `AGENTS.md` initialized with project rules

## Phase 1.5 — Repository system map ✅

- [x] ICM system map at `map/` (catalog, object cards, process cards, change-impact index)
- [x] Root `AGENTS.md` routes to `map/AGENTS.md`
- [x] Relative link check passes

## Phase 2 — Content ✅

- [x] About section with bio, principles, and skill matrix
- [x] Featured AI projects with metrics and stack
- [x] Experience timeline
- [x] Writing / blog placeholders
- [x] Contact section using `mailto:` (no backend)
- [ ] Real social links, email, and resume PDF
- [ ] Replace placeholder project/role details with real history

## Phase 3 — Content system

- [ ] Typed content files in `src/content/`
- [ ] Project detail routes (`/projects/[slug]`)
- [ ] MDX for writing, or a CMS

## Phase 4 — Interaction & polish

- [ ] Scroll-triggered reveal animations
- [ ] Project filtering
- [ ] Command palette (`⌘K`)
- [ ] Scroll progress and active-section nav state

## Phase 5 — Quality & launch

- [ ] Accessibility audit
- [ ] Lighthouse and bundle review
- [ ] Open Graph image
- [ ] `sitemap.ts` / `robots.ts`
- [ ] Deploy to Vercel + custom domain

## Known placeholders

- Project, experience, and writing copy in `src/content/` is placeholder material; replace it with real history.
- Resume links point to `#contact` until a PDF is added to `public/`.
