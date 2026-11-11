import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="space-y-6">
          <SectionHeading
            index="03"
            eyebrow="Experience"
            title="Shipped, measured, maintained."
            description="Roles where I owned the path from prototype to something a team could operate."
          />
        </div>

        <ol className="relative border-l border-border/70 pl-6 sm:pl-8">
          {experience.map((role) => (
            <li key={`${role.company}-${role.period}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-brand ring-4 ring-background sm:-left-[37px]"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
                <span>{role.period}</span>
                <span className="size-1 rounded-full bg-border" aria-hidden="true" />
                <span>{role.location}</span>
              </div>

              <h3 className="mt-2 text-lg font-medium tracking-tight">
                {role.role}{" "}
                <span className="text-muted-foreground">· {role.company}</span>
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                {role.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-brand/70" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${role.company} stack`}>
                {role.stack.map((item) => (
                  <li key={item}>
                    <Badge
                      variant="outline"
                      className="border-border/70 bg-card/30 font-mono text-[10px] font-normal text-muted-foreground"
                    >
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
