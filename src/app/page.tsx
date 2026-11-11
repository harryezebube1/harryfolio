import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { GitHubIcon } from "@/components/icons";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Writing } from "@/components/sections/writing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const stack = [
  "Python",
  "TypeScript",
  "PyTorch",
  "LangGraph",
  "Next.js",
  "Postgres",
  "AWS",
];

function Prompt() {
  return <span className="select-none text-brand">$</span>;
}

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/70">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/3 -z-10 size-72 rounded-full bg-signal/5 blur-[100px]"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for AI engineering roles
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            I build <span className="text-gradient">LLM systems</span> that
            survive production.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            I&apos;m Harry, an AI engineer focused on retrieval, agents, and
            rigorous evaluation. I care about the unglamorous parts that make
            models reliable: data pipelines, latency budgets, and evals you can
            trust.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="px-4">
              <Link href="#projects">
                View projects
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon data-icon="inline-start" aria-hidden="true" />
                GitHub
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              Core stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Core stack">
              {stack.map((item) => (
                <li key={item}>
                  <Badge
                    variant="outline"
                    className="border-border/80 bg-card/40 font-mono text-[11px] font-normal text-muted-foreground"
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-full">
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-3xl bg-gradient-to-b from-brand/20 via-brand/5 to-transparent blur-2xl"
          />

          <div className="overflow-hidden rounded-xl border border-border/80 bg-card/70 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-border/70 bg-muted/30 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400/70" />
              <span className="size-2.5 rounded-full bg-amber-300/70" />
              <span className="size-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                harry@portfolio — zsh
              </span>
              <span className="ml-auto hidden font-mono text-[10px] text-muted-foreground/50 sm:block">
                80×24
              </span>
            </div>

            <div className="space-y-2.5 p-5 font-mono text-[12.5px] leading-6 sm:p-6 sm:text-[13px]">
              <p>
                <Prompt /> <span className="text-foreground">whoami</span>
              </p>
              <p className="text-muted-foreground">
                harry — <span className="text-signal">ai engineer</span>
              </p>

              <p className="pt-2">
                <Prompt /> <span className="text-foreground">cat focus.txt</span>
              </p>
              <p className="text-muted-foreground">
                agents · retrieval · evals · inference
              </p>

              <p className="pt-2">
                <Prompt /> <span className="text-foreground">ls projects/</span>
              </p>
              <p className="text-muted-foreground">
                <span className="text-brand">rag-pipeline/</span>{" "}
                <span className="text-brand">agent-runtime/</span>{" "}
                <span className="text-brand">eval-harness/</span>
              </p>

              <p className="pt-2">
                <Prompt /> <span className="text-foreground">status --now</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                open to select collaborations
                <span className="inline-block h-3.5 w-1.5 animate-pulse bg-foreground/70" />
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-lg border border-border/80 bg-background/90 px-3 py-2 font-mono text-[10px] text-muted-foreground shadow-xl backdrop-blur sm:flex">
            <Sparkles className="size-3 text-signal" aria-hidden="true" />
            eval suite · 128 passing
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 bg-card/20">
        <div className="mx-auto grid w-full max-w-6xl divide-y divide-border/70 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {[
            ["focus", "agentic retrieval + tool use"],
            ["shipping", "production eval harnesses"],
            ["open to", "AI engineer roles"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-baseline gap-3 py-4 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                {label}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{value}</span>
            </div>
          ))}
        </div>
      </div>
      </section>

      <About />
      <Projects />
      <Experience />
      <Writing />
      <Contact />
    </>
  );
}
