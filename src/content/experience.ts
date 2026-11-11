import type { Experience } from "./types";

// TODO: replace with real roles, dates, and outcomes.
export const experience: Experience[] = [
  {
    company: "Northwind AI",
    role: "Senior AI Engineer",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Owns the retrieval and evaluation stack for a customer-facing assistant used by support and sales teams.",
    highlights: [
      "Cut unsupported claims by 38% by adding reranking, citation checks, and a calibrated abstention path.",
      "Built the eval harness now required on every prompt and model change; caught two regressions before rollout.",
      "Reduced p95 answer latency from 4.2s to 1.9s through streaming, caching, and retrieval fan-out limits.",
    ],
    stack: ["Python", "LangGraph", "pgvector", "FastAPI", "AWS"],
  },
  {
    company: "Vector Labs",
    role: "Machine Learning Engineer",
    period: "2022 — 2024",
    location: "Hybrid",
    summary:
      "Shipped the first production ML features on a document-heavy workflow product, from data contracts to rollout.",
    highlights: [
      "Built a document classification pipeline over 40+ layouts with active learning for low-confidence cases.",
      "Introduced model monitoring and drift alerts, cutting silent failures from weekly to near zero.",
      "Partnered with product to define success metrics before training, not after.",
    ],
    stack: ["PyTorch", "Hugging Face", "Postgres", "Docker", "GCP"],
  },
  {
    company: "Acme Cloud",
    role: "Software Engineer",
    period: "2020 — 2022",
    location: "On-site",
    summary:
      "Built backend services and internal tooling for a multi-tenant platform, with an emphasis on observability.",
    highlights: [
      "Migrated a monolith workflow to event-driven services without customer-visible downtime.",
      "Added structured tracing and SLO dashboards adopted by three adjacent teams.",
    ],
    stack: ["TypeScript", "Node.js", "Postgres", "Redis", "Kubernetes"],
  },
];
