import { BookOpen, GraduationCap, MapPin, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { atAGlance } from "@/content/profile";
import type { GlanceIcon } from "@/content/types";
import { cn } from "@/lib/cn";

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
 *
 * Set as a ruled strip rather than as cards, and the reason is the section
 * above it. Institutions is a grid of cards; four more cards directly beneath
 * made the top of the homepage read as one long tray of boxes with a rule
 * across the middle. The same four facts under four rules read as a
 * specification — which is what they are — and the page changes shape between
 * one section and the next instead of only changing colour.
 *
 * Nothing here answers the cursor. None of it goes anywhere, and the site's
 * standing rule is that only a thing with a destination moves under a pointer.
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

        <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {atAGlance.map((item, i) => {
            const Icon = icons[item.icon];
            // The first column takes the gold rule; the rest take the hairline.
            // One emphasised column is a starting point for the eye, four would
            // be a stripe.
            const lead = i === 0;

            return (
              // The Reveal wrapper *is* the group element. A `dl` admits one
              // level of `div` around a term and its definition and no more;
              // nesting the rule and padding in a second div underneath it put
              // every `dt` and `dd` on the page outside its own list.
              <Reveal
                key={item.label}
                step={i}
                className={cn(
                  "border-t-2 pt-6",
                  lead ? "border-highlight-solid" : "border-line-strong",
                )}
              >
                <dt>
                  <span className="flex items-center justify-between gap-4">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-5 text-accent"
                    />
                    <span
                      aria-hidden="true"
                      className="font-display text-xs text-content-subtle"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="mt-7 block text-eyebrow font-semibold uppercase text-content-subtle">
                    {item.label}
                  </span>
                </dt>
                <dd>
                  <span className="mt-3 block font-display text-display-md text-content">
                    {item.value}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-content-muted">
                    {item.detail}
                  </span>
                </dd>
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </Section>
  );
}
