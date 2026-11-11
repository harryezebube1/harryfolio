import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { writing } from "@/content/writing";

export function Writing() {
  return (
    <Section id="writing" className="bg-card/10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          index="04"
          eyebrow="Writing"
          title="Notes from production."
          description="Short essays on evals, agents, and the operational side of LLM features."
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60">
          Drafts in progress
        </span>
      </div>

      <div className="mt-10 border-y border-border/70">
        {writing.map((post) => (
          <article
            key={post.title}
            className="group grid gap-3 border-b border-border/70 py-6 last:border-b-0 sm:grid-cols-[110px_1fr_auto] sm:items-start sm:gap-6"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60 sm:pt-1">
              {post.date}
            </div>

            <div>
              <h3 className="text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-brand">
                {post.href ? (
                  <a href={post.href} className="focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                    {post.title}
                  </a>
                ) : (
                  post.title
                )}
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted-foreground">
                {post.description}
              </p>
            </div>

            <div className="flex items-center gap-2 sm:justify-end">
              <Badge
                variant="outline"
                className="border-border/70 bg-card/30 font-mono text-[10px] font-normal text-muted-foreground"
              >
                {post.tag}
              </Badge>
              {post.href ? (
                <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50">
                  Soon
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
