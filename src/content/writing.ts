import type { Writing } from "./types";

// TODO: add real posts and links when the writing section launches.
export const writing: Writing[] = [
  {
    title: "Evaluating RAG without a labeled dataset",
    description:
      "A practical loop for bootstrapping graded examples from production traffic, weak labels, and human review.",
    date: "Oct 2026",
    tag: "Evals",
  },
  {
    title: "What actually breaks in production agents",
    description:
      "The failure modes that show up after the demo: stale tools, ambiguous state, and retries that duplicate side effects.",
    date: "Aug 2026",
    tag: "Agents",
  },
  {
    title: "Latency budgets for LLM features",
    description:
      "How to set a budget per surface, trace it end to end, and decide what to cut before users notice.",
    date: "May 2026",
    tag: "Inference",
  },
];
