import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "habit-tracker",
    name: "Habit Tracker",
    tagline: "Time management, one habit at a time",
    description:
      "A habit app built around time, not streaks. Add a good or bad habit, choose a daily, weekly, or hourly window, and Habit Tracker keeps the goal in front of you so procrastination gets less room. Positive routines like hydration fit the same model.",
    status: "Personal project",
    year: "2026",
    stack: ["Next.js", "OpenCode"],
    highlights: [
      "Add good or bad habits and set a daily, weekly, or hourly reminder window",
      "Keeps the goal visible to cut down time spent procrastinating",
      "Fits positive routines like hydration into the same daily flow",
    ],
    metrics: [
      { value: "3", label: "reminder windows" },
      { value: "2", label: "habit types" },
    ],
    link: { label: "Ask about it", href: "#contact" },
  },
];
