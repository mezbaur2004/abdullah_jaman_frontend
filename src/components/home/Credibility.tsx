import { ArrowUpRight, Building2, GraduationCap, MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, organizations } from "@/content/profile";

export function Credibility({ index }: { index?: string }) {
  if (organizations.length === 0) return null;

  return (
    <Section
      index={index}
      indexLabel="Institutions"
      aria-labelledby="credibility-heading"
    >
      <Container>
        <SectionHeading
          id="credibility-heading"
          title="Where he leads."
          lede="The institutions he leads, in Dhaka, Bangladesh."
        />

        <ul className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {organizations.map((organization, i) => (
            <li key={organization.name}>
              <Reveal delay={i * 0.06} className="h-full">
                <Card
                  as="article"
                  padding="lg"
                  interactive={Boolean(organization.href)}
                  className="flex h-full flex-col"
                >
                  <div className="flex items-start justify-between gap-5">
                    <IconChip icon={Building2} />
                    {organization.shortName ? (
                      <span className="rounded-full border border-line px-3 py-1 text-eyebrow font-medium uppercase text-content-subtle">
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
                        className="group inline-flex items-start gap-2 transition-colors duration-300 ease-editorial hover:text-accent"
                      >
                        {organization.name}
                        <ArrowUpRight
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="mt-2 size-5 shrink-0 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
          <Reveal delay={0.14}>
            <Card tone="soft" padding="lg" className="mt-5 lg:mt-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                <IconChip icon={GraduationCap} />
                <div>
                  <p className="text-eyebrow font-medium uppercase text-content-subtle">
                    Education
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    {education.map((entry) => (
                      <p
                        key={entry.institution}
                        className="font-display text-2xl text-content"
                      >
                        {entry.institution}
                        {entry.qualification ? (
                          <span className="ml-3 font-sans text-sm text-content-muted">
                            {entry.qualification}
                          </span>
                        ) : null}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
