import { ArrowUpRight, Check } from "lucide-react";

import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

function statusColor(status: string) {
  if (status.toLowerCase().includes("production")) return "bg-emerald-400";
  if (status.toLowerCase().includes("open")) return "bg-signal";
  if (status.toLowerCase().includes("personal")) return "bg-brand";
  return "bg-muted-foreground";
}

export function Projects() {
  return (
    <Section id="projects" className="bg-card/10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Built end to end."
          description="A time-management app designed and shipped with Next.js and OpenCode. More work on the way."
        />
        <p className="max-w-xs font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-muted-foreground/70">
          Ask me about the build
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={project.slug}
            className={cn(
              "group relative gap-0 overflow-hidden border border-border/70 bg-card/50 py-0 ring-0",
              "transition-colors hover:border-brand/30",
              index === 0 && "lg:col-span-2"
            )}
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            />

            <CardHeader className="gap-3 p-6 pb-0">
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="text-brand">0{index + 1}</span>
                <span className="flex items-center gap-2">
                  <span
                    className={cn("size-1.5 rounded-full", statusColor(project.status))}
                    aria-hidden="true"
                  />
                  {project.status} · {project.year}
                </span>
              </div>

              <div className="space-y-1">
                <CardTitle className="text-2xl tracking-tight">{project.name}</CardTitle>
                <p className="font-mono text-xs text-brand/90">{project.tagline}</p>
              </div>

              <CardDescription className="max-w-2xl text-pretty leading-6">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="mt-5 grid gap-6 p-6 pt-0 sm:grid-cols-[1fr_auto] sm:items-start">
              <ul className="space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden="true" />
                    <span className="leading-6">{highlight}</span>
                  </li>
                ))}
              </ul>

              <dl className="flex gap-4 sm:flex-col sm:border-l sm:border-border/70 sm:pl-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/60">
                      {metric.label}
                    </dt>
                    <dd className="mt-1 font-mono text-lg text-signal">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>

            <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border/70 bg-transparent p-6">
              <ul className="flex flex-wrap gap-1.5" aria-label={`${project.name} stack`}>
                {project.stack.map((item) => (
                  <li key={item}>
                    <Badge
                      variant="outline"
                      className="border-border/70 bg-background/40 font-mono text-[10px] font-normal text-muted-foreground"
                    >
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>

              {project.link ? (
                <Button asChild variant="ghost" size="sm" className="text-foreground">
                  <a
                    href={project.link.href}
                    target={project.link.external ? "_blank" : undefined}
                    rel={project.link.external ? "noreferrer" : undefined}
                  >
                    {project.link.label}
                    <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
