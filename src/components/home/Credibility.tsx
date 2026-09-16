import { ArrowUpRight, Building2, GraduationCap, MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, organizations } from "@/content/profile";
import { cardAccent } from "@/lib/accent";

export function Credibility({ index }: { index?: string }) {
  if (organizations.length === 0) return null;

  return (
    <Section
      index={index}
      indexLabel="Institutions"
      accent="blue"
      aria-labelledby="credibility-heading"
    >
      <Container>
        <SectionHeading
          id="credibility-heading"
          title="Where he leads."
          lede="The institutions he leads, in Dhaka, Bangladesh."
          accent="blue"
        />

        <ul className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {organizations.map((organization, i) => (
            <li key={organization.name}>
              <Reveal step={i} className="h-full">
                <Card
                  as="article"
                  padding="lg"
                  // A card that links somewhere lifts; one that does not
                  // acknowledges the cursor without promising a destination.
                  hover={organization.href ? "lift" : "quiet"}
                  accent={cardAccent("blue", i)}
                  className="flex h-full flex-col"
                >
                  <div className="flex items-start justify-between gap-5">
                    <IconChip icon={Building2} />
                    {organization.shortName ? (
                      <span className="rounded-full border border-line px-3 py-1 text-eyebrow font-medium uppercase text-content-subtle transition-colors group-hover/card:border-line-accent group-hover/card:text-accent">
                        {organization.shortName}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-7 font-display text-display-md text-content">
                    {organization.href ? (
                      <a
                        href={organization.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Stretched over the card, so the whole surface is the
                        // click target the hover has been promising.
                        className="inline-flex items-start gap-2 transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent"
                      >
                        {organization.name}
                        <ArrowUpRight
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="mt-2 size-5 shrink-0 transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      organization.name
                    )}
                  </h3>

                  <p className="mt-4 text-sm font-medium text-accent">
                    {organization.role}
                  </p>

                  <dl className="mt-auto flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7">
                    {organization.location ? (
                      <div>
                        <dt className="text-eyebrow font-medium uppercase text-content-subtle">
                          Location
                        </dt>
                        <dd className="mt-1.5 flex items-center gap-2 text-content">
                          <MapPin
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="size-4 text-accent"
                          />
                          {organization.location}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>

        {education.length > 0 ? (
          <Reveal step={organizations.length}>
            <Card tone="soft" hover="quiet" padding="lg" className="mt-5 lg:mt-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <IconChip icon={GraduationCap} className="sm:mt-1" />
                <div className="min-w-0 flex-1">
                  <p className="text-eyebrow font-medium uppercase text-content-subtle">
                    Education
                  </p>
                  {/* One row per qualification. The previous single-line
                      treatment held one entry; five ran together into a
                      sentence that read as neither a list nor a paragraph. */}
                  <ul className="mt-5 flex flex-col divide-y divide-line">
                    {education.map((entry) => (
                      <li
                        key={`${entry.institution}-${entry.qualification ?? ""}`}
                        className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                      >
                        <span className="font-display text-lg leading-snug text-content">
                          {entry.qualification ?? entry.institution}
                          {entry.field ? (
                            <span className="text-content-muted">
                              {" "}
                              — {entry.field}
                            </span>
                          ) : null}
                        </span>
                        {entry.qualification ? (
                          <span className="text-sm text-content-subtle sm:text-right">
                            {entry.institution}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
