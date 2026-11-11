export const siteConfig = {
  name: "Harry Ezebube",
  brand: "harry",
  role: "AI Engineer",
  title: "Harry Ezebube — AI Engineer",
  description:
    "AI engineer building reliable LLM systems: retrieval, agents, evaluation, and inference at production scale.",
  links: {
    github: "https://github.com/harryezebube1",
    linkedin: "https://www.linkedin.com/in/harry-ezebube",
    email: "harryvrrl@gmail.com",
    resume: "#contact", // TODO: add public/harry-resume.pdf and point this at it.
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
