import { BookOpen, GraduationCap, MapPin, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { atAGlance } from "@/content/profile";
import type { GlanceIcon } from "@/content/types";
import { cn } from "@/lib/cn";
import { cardAccent } from "@/lib/accent";

/** Content stores an icon key, not a component, so it stays serialisable. */
const icons: Record<GlanceIcon, LucideIcon> = {
  focus: BookOpen,
  role: UserRound,
  location: MapPin,
  education: GraduationCap,
};

/**
 * Four verified qualities. Deliberately no figures: see the note at the top of
 * src/content/site.ts for why nothing on this site is counted.
 */
export function AtAGlance({ index }: { index?: string }) {
  if (atAGlance.length === 0) return null;

  return (
    <Section
      tone="accent"
      index={index}
      indexLabel="At a glance"
      accent="yellow"
      aria-labelledby="glance-heading"
    >
      <Container>
        <SectionHeading
          id="glance-heading"
          title="The work, in short."
          accent="yellow"
          lede="Where he works, what he leads, and where he studied — nothing beyond what is confirmed."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {atAGlance.map((item, i) => {
            // The lead card gets the inverse treatment so the eye lands on it.
            const featured = i === 0;

            return (
              <li key={item.label}>
                <Reveal step={i} className="h-full">
                  <Card
                    as="article"
                    tone={featured ? "feature" : "raised"}
                    // Quiet, not lift: these cards go nowhere, and a card that
                    // rises under the cursor is making an offer it cannot keep.
                    hover="quiet"
                    accent={featured ? "yellow" : cardAccent("yellow", i)}
                    sweep={featured}
                    className="flex h-full flex-col"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <IconChip
                        icon={icons[item.icon]}
                        tone={featured ? "inverse" : "base"}
                      />
                      <span
                        aria-hidden="true"
                        className={cn(
                          "font-display text-sm transition-colors",
                          featured
                            ? "text-accent-on-inverse"
                            : "text-content-subtle group-hover/card:text-accent",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p
                      className={cn(
                        "mt-7 text-eyebrow font-medium uppercase",
                        featured
                          ? "text-on-inverse-muted"
                          : "text-content-subtle",
                      )}
                    >
                      {item.label}
                    </p>
                    <p
                      className={cn(
                        "mt-3 font-display text-display-md",
                        featured ? "text-on-inverse" : "text-content",
                      )}
                    >
                      {item.value}
                    </p>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        featured
                          ? "text-on-inverse-muted"
                          : "text-content-muted",
                      )}
                    >
                      {item.detail}
                    </p>
                  </Card>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
