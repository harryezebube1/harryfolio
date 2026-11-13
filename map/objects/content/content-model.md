---
type: object
cluster: content
universe: live
status: verified
entity: src/content/
---

# Content model

Typed content modules that own every portfolio entry, plus the server-rendered section components that lay them out.

## Why this shape

Copy changes should not require hunting through JSX. Each kind of content exports a typed array or object; sections import it and own presentation only. This keeps the path to a CMS or MDX layer open: replace the module, keep the section contract.

## Shape

- `types.ts`: `Project`, `Experience`, `Writing`, `SkillGroup`, `Metric`, `ContentLink`.
- `projects.ts`: real projects only (currently Habit Tracker), each with stack, highlights, metrics, optional link. The card layout spans full width for a single entry.
- `experience.ts`: three roles with period, location, summary, highlights, stack.
- `writing.ts`: three drafts; `href` is optional, absent means "Soon".
- `profile.ts`: intro paragraphs, principles, now strip, three skill groups.
- Sections: `src/components/sections/{about,projects,experience,writing,contact}.tsx`; shared `section.tsx` and `section-heading.tsx`.
- Page composition: `src/app/page.tsx:185` onward.

Citations: `src/content/types.ts:1`, `src/content/profile.ts:4`, `src/content/projects.ts:4`, `src/content/experience.ts:4`, `src/content/writing.ts:4`, `src/app/page.tsx:185`

## Connected to

- **owns:** portfolio copy, entries, metrics, skill claims
- **owned-by:** none (leaf modules)
- **joins:** section components, [site-config](../navigation/site-config.md) for contact/social URLs
- **looks-like-but-is-not:** `siteConfig`; that owns identity/nav, not entries

## If you change this

- **Hits:** the matching section only, plus page length and anchor scroll offsets; nav labels are separate
- **Does not hit:** header/footer chrome, theme tokens, metadata

## Surfaces

| Surface | Role |
|---|---|
| Section components | read typed arrays |
| Visitor | reads rendered content |
| Future CMS/MDX | would replace these modules |

## See

- Source: `src/content/`
- Process: [add-content-section](../../processes/add-content-section.md)
