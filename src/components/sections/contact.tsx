import { ArrowUpRight, Clock3, Mail, MapPin } from "lucide-react";

import { GitHubIcon } from "@/components/icons";
import { Section } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact" className="border-b-0">
      <div className="relative isolate overflow-hidden rounded-2xl border border-border/80 bg-card/40 p-8 sm:p-12 lg:p-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-dot opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_80%_0%,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-24 -z-10 size-72 rounded-full bg-brand/15 blur-[100px]"
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-brand">05</span>
              <span className="h-px w-8 bg-border" aria-hidden="true" />
              Contact
            </p>

            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s build something that holds up.
            </h2>

            <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">
              I&apos;m open to AI engineering roles and focused collaborations.
              If you&apos;re working on retrieval, agents, or evaluation, I&apos;d
              like to hear about it.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="px-4">
              <a href={`mailto:${siteConfig.links.email}`}>
                <Mail data-icon="inline-start" aria-hidden="true" />
                Email me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-4">
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <GitHubIcon data-icon="inline-start" />
                GitHub
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 pt-6 font-mono text-[11px] text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 text-brand" aria-hidden="true" />
            {profile.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock3 className="size-3.5 text-brand" aria-hidden="true" />
            Replies within 48 hours
          </span>
          <span className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
        </div>
      </div>
    </Section>
  );
}
