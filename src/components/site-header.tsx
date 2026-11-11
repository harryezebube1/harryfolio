"use client";

import Link from "next/link";
import { Menu, TerminalSquare } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";

function Brand() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="relative grid size-9 place-items-center rounded-lg border border-border bg-card font-mono text-brand shadow-[inset_0_1px_0_oklch(1_0_0/6%)] transition-colors group-hover:border-brand/40">
        <TerminalSquare className="size-4" aria-hidden="true" />
        <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-signal ring-2 ring-background" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight">
          {siteConfig.brand}
          <span className="text-brand">.</span>
        </span>
        <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {siteConfig.role}
        </span>
      </span>
    </Link>
  );
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
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
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Brand />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <SocialLinks className="hidden items-center sm:flex" />
          <span className="mx-1 hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <SheetHeader>
                <SheetTitle className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {siteConfig.nav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href={siteConfig.links.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 rounded-md px-3 py-2.5 text-sm text-brand"
                  >
                    Resume
                  </a>
                </SheetClose>
              </nav>
              <div className="mt-auto flex items-center gap-2 border-t border-border/70 p-4">
                <SocialLinks className="flex items-center" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
