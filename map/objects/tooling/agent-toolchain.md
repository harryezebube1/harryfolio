---
type: object
cluster: tooling
universe: live
status: verified
entity: AGENTS.md
---

# Agent toolchain

The rules and tools that shape how an agent edits this repo: `AGENTS.md`, the RTK OpenCode plugin, the `icm-architect` skill, and the Next.js auto-generated agent block.

## Why this shape

`AGENTS.md` is the project contract (stack, commands, conventions, verification). Next.js 16 appends its own rules block on `next dev`, so the file is generated in two parts and should not be manually deduped. RTK compresses shell output globally; the plugin lives outside the repo and is machine-level, not project-level. `icm-architect` is vendored under `.opencode/skills/` so the map method travels with the repo.

## Shape

- Project rules: `AGENTS.md` (RTK, ICM, dark-mode, secrets, stack, commands, verification).
- RTK plugin: `~/.config/opencode/plugins/rtk.ts`, installed with `rtk init -g --opencode`.
- Skill: `.opencode/skills/icm-architect/SKILL.md` (OpenCode discovers it automatically).
- Next block: appended between `BEGIN/END:nextjs-agent-rules` markers; re-created if removed.

Citations: `AGENTS.md:1`, `package.json:6`, `next.config.ts:1`

## Connected to

- **owns:** agent behavior, command interpretation, verification checklist
- **owned-by:** the developer's machine (RTK, OpenCode), repo (AGENTS, skill)
- **joins:** [build-verify](../../processes/build-verify.md), [CONTEXT.md](../../CONTEXT.md)
- **looks-like-but-is-not:** runtime app config; none of this ships to the browser

## If you change this

- **Hits:** every future agent session, command rewriting, skill discovery, build-agent rules
- **Does not hit:** deployed bundle, page rendering, package runtime behavior

## Surfaces

| Surface | Role |
|---|---|
| OpenCode | loads `AGENTS.md` + skill list |
| RTK plugin | rewrites shell commands |
| Next dev | regenerates its rules block |

## See

- Source: `AGENTS.md`
- Skill: `.opencode/skills/icm-architect/SKILL.md`
