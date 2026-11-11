import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-brand">$</span> designed &amp; built by{" "}
            <span className="text-foreground">{siteConfig.brand}</span>
          </p>
          <p className="text-xs text-muted-foreground/70">
            Next.js · TypeScript · Tailwind CSS · shadcn/ui
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon-sm" aria-label="GitHub">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <GitHubIcon aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon-sm" aria-label="LinkedIn">
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon-sm" aria-label="Email">
            <a href={`mailto:${siteConfig.links.email}`}>
              <Mail aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
