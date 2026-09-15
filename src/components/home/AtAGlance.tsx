import { Building2, GraduationCap, MapPin, UserRound } from "lucide-react";
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

/** Content stores an icon key, not a component, so it stays serialisable. */
const icons: Record<GlanceIcon, LucideIcon> = {
  campus: Building2,
  role: UserRound,
  location: MapPin,
  education: GraduationCap,
};

/**
 * Every figure here is verified, which is why this band can carry numbers
 * where the statistics section still cannot.
 */
export function AtAGlance({ index }: { index?: string }) {
  if (atAGlance.length === 0) return null;

  return (
    <Section
      tone="soft"
      index={index}
      indexLabel="At a glance"
      aria-labelledby="glance-heading"
    >
      <Container>
        <SectionHeading
          id="glance-heading"
          title="The work, in short."
          lede="Two international schools, six campuses, one academic standard."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {atAGlance.map((item, i) => {
            // The lead figure gets the inverse treatment so the eye lands on it.
            const featured = i === 0;

            return (
              <li key={item.label}>
                <Reveal delay={i * 0.06} className="h-full">
                  <Card
                    as="article"
                    tone={featured ? "feature" : "raised"}
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
                          "font-display text-sm",
                          featured
                            ? "text-accent-on-inverse"
                            : "text-content-subtle",
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
