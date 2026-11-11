export type ContentLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  year: string;
  stack: string[];
  highlights: string[];
  metrics: Metric[];
  link?: ContentLink;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Writing = {
  title: string;
  description: string;
  date: string;
  tag: string;
  href?: string;
};

export type SkillGroup = {
  title: string;
  icon: "brain" | "code" | "cloud";
  items: string[];
};
