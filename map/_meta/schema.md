# Map schema

Closed set of node types. Do not add a type without a query that needs it.

## Object card

```yaml
type: object
cluster: app-shell | navigation | ui | content | tooling
universe: live | leftover | ghost
status: verified | stale | stub
entity: path/to/owning/file
```

Required sections: one-sentence identity, **Why this shape**, **Shape** with citations, **Connected to**, **If you change this** (Hits / Does not hit), **Surfaces**, **See**.

## Process card

```yaml
type: process
status: verified | stale | stub
consumes: [relative links to object cards]
produces: [relative links to object cards]
```

Required sections: **Input → Movement → Output**, **Why this shape**, **Steps** with citations, **If you change this**, **Surfaces**, **See**.

## Status rules

| Status | Requires |
|---|---|
| `verified` | a date, the branch (`main`, no commits yet), and `path:line` citations checked against source |
| `stale` | citations that no longer match, or a known Phase 2 dependency |
| `stub` | frontmatter only; do not implement against it |

## Cluster rule

Cluster by how an editor asks, not by folder layout. A cluster is valid only when it has at least two cards and a `CONTEXT.md`.
