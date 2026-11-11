import { BrainCircuit, Check, Cloud, Code2 } from "lucide-react";

import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const skillIcons = {
  brain: BrainCircuit,
  code: Code2,
  cloud: Cloud,
} as const;

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Engineer first, model second."
          description="I build the system around the model: retrieval, evaluation, observability, and the failure paths users actually hit."
        />

        <div className="space-y-8">
          <div className="space-y-4 text-pretty leading-7 text-muted-foreground">
            {profile.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <ul className="grid gap-3 sm:grid-cols-3" aria-label="Working principles">
            {profile.principles.map((principle) => (
              <li
                key={principle.title}
                className="rounded-lg border border-border/70 bg-card/30 p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-brand/15 text-brand">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium">{principle.title}</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {principle.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {profile.skillGroups.map((group) => {
          const Icon = skillIcons[group.icon];

          return (
            <Card
              key={group.title}
              className={cn(
                "gap-0 border border-border/70 bg-card/40 py-0 ring-0",
                "transition-colors hover:border-border"
              )}
            >
              <CardHeader className="flex flex-row items-center gap-3 p-5 pb-3">
                <span className="grid size-8 place-items-center rounded-md border border-border/70 bg-background/60 text-brand">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <CardTitle className="text-sm font-medium">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
