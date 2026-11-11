import type { SkillGroup } from "./types";

// TODO: replace placeholder bio, location, and skill claims with real details.
export const profile = {
  location: "Remote",
  availability: "Open to AI engineering roles",
  intro: [
    "I work at the seam between models and products: retrieval that actually grounds answers, agents that fail safely, and evaluations that tell you the truth before users do.",
    "Most of my time goes into the unglamorous parts - data contracts, latency budgets, observability, and failure modes. That is usually where an LLM feature becomes a system you can operate.",
  ],
  principles: [
    {
      title: "Evals before vibes",
      description: "Every model or prompt change runs against a suite that can fail the build.",
    },
    {
      title: "Latency is a feature",
      description: "Budgets are set per surface, then traced end to end instead of guessed.",
    },
    {
      title: "Own the failure modes",
      description: "Retries, fallbacks, and human handoff are designed before launch, not after.",
    },
  ],
  now: [
    { label: "focus", value: "agentic retrieval + tool use" },
    { label: "shipping", value: "production eval harnesses" },
    { label: "reading", value: "inference optimization" },
  ],
  skillGroups: [
    {
      title: "Modeling & retrieval",
      icon: "brain",
      items: [
        "Python",
        "PyTorch",
        "Hugging Face",
        "LangGraph",
        "RAG",
        "Fine-tuning",
        "Evals",
      ],
    },
    {
      title: "Product engineering",
      icon: "code",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "FastAPI",
        "Postgres",
        "pgvector",
        "Streaming UX",
      ],
    },
    {
      title: "Platform",
      icon: "cloud",
      items: [
        "AWS",
        "Docker",
        "Temporal",
        "Redis",
        "OpenTelemetry",
        "GitHub Actions",
        "Terraform",
      ],
    },
  ] satisfies SkillGroup[],
} as const;
