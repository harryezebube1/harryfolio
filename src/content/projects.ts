import type { Project } from "./types";

// TODO: replace with real projects, metrics, and links.
export const projects: Project[] = [
  {
    slug: "atlas",
    name: "Atlas",
    tagline: "Grounded answers over 2M internal documents",
    description:
      "A retrieval platform that replaced keyword search for support and sales. Hybrid search, reranking, and citation-first answers, with a fallback path when confidence is low.",
    status: "Production",
    year: "2026",
    stack: ["Python", "LangGraph", "pgvector", "FastAPI", "OpenTelemetry"],
    highlights: [
      "Hybrid BM25 + dense retrieval with a cross-encoder reranker",
      "Citation enforcement and abstention when grounding is weak",
      "Trace-level evals wired into CI for every prompt change",
    ],
    metrics: [
      { value: "38%", label: "fewer unsupported claims" },
      { value: "1.9s", label: "p95 answer latency" },
    ],
    link: { label: "Talk through it", href: "#contact" },
  },
  {
    slug: "probe",
    name: "Probe",
    tagline: "An eval harness that gates every model change",
    description:
      "A small framework for versioned datasets, deterministic graders, and model comparison. Runs as a required check so regressions never reach users.",
    status: "Open source",
    year: "2025",
    stack: ["TypeScript", "Next.js", "Postgres", "GitHub Actions"],
    highlights: [
      "Dataset versioning with per-case pass/fail history",
      "Side-by-side model and prompt comparison",
      "CI gate with cost and latency budgets, not just accuracy",
    ],
    metrics: [
      { value: "128", label: "eval suites" },
      { value: "6m", label: "CI feedback" },
    ],
    link: { label: "Talk through it", href: "#contact" },
  },
  {
    slug: "looms",
    name: "Looms",
    tagline: "Sandboxed tool runtime for production agents",
    description:
      "The execution layer behind tool-calling agents: scoped credentials, per-run sandboxes, structured retries, and an audit trail a human can actually read.",
    status: "Production",
    year: "2025",
    stack: ["Python", "Temporal", "Docker", "Redis"],
    highlights: [
      "Least-privilege credentials per tool and per run",
      "Deterministic retries with idempotency keys",
      "Human-readable audit log for every side effect",
    ],
    metrics: [
      { value: "12", label: "tools in rotation" },
      { value: "99.9%", label: "runtime uptime" },
    ],
    link: { label: "Talk through it", href: "#contact" },
  },
];
