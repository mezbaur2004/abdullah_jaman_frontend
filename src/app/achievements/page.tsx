import type { Metadata } from "next";
import { Building2 } from "lucide-react";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconChip } from "@/components/ui/IconChip";
import { PendingNote } from "@/components/ui/PendingNote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  achievementsIntro,
  achievementsPending,
  awards,
  milestones,
  statistics,
} from "@/content/achievements";
import { organizations } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Achievements",
  description:
    "Abdullah Jaman is Principal of Wheaton International School and Guidance International School in Dhaka, Bangladesh.",
  path: "/achievements",
});

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow={achievementsIntro.eyebrow}
        title={achievementsIntro.headline}
        lede={achievementsIntro.lede}
      />

      {/* Leading both institutions is what the record establishes, so it
          carries the page while awards and figures are outstanding. */}
      <Section
        divider={false}
        index="01"
        indexLabel="Institutions"
        aria-labelledby="institutions-heading"
      >
        <Container>
          <SectionHeading
            id="institutions-heading"
            title="Institutions under his leadership."
            lede="The institutions he currently leads, in Dhaka, Bangladesh."
          />

          <ul className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
            {organizations.map((organization, i) => (
              <li key={organization.name}>
                <Reveal delay={i * 0.06} className="h-full">
                  <Card as="article" padding="lg" className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <IconChip icon={Building2} />
                      {organization.shortName ? (
                        <span className="rounded-full border border-line-accent bg-accent-soft px-3 py-1 text-eyebrow font-medium uppercase text-accent">
                          {organization.shortName}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-7 font-display text-display-md text-content">
                      {organization.name}
                    </p>
                    <p className="mt-4 text-sm font-medium text-accent">
                      {organization.role}
                    </p>
                    {organization.location ? (
                      <p className="mt-auto pt-6 text-sm text-content-subtle">
                        {organization.location}
                      </p>
                    ) : null}
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>

          {statistics.length > 0 ? (
            <dl className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {statistics.map((statistic, i) => (
                <Reveal
                  key={statistic.label}
                  delay={i * 0.06}
                  className="border-t border-line pt-6"
                >
                  <dt className="sr-only">{statistic.label}</dt>
                  <dd>
                    <span className="block font-display text-display-xl text-content">
                      {statistic.value}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-3 block text-sm font-medium text-accent"
                    >
                      {statistic.label}
                    </span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          ) : null}

          {achievementsPending ? (
            <Reveal delay={0.12}>
              <PendingNote className="mt-14">{achievementsPending}</PendingNote>
            </Reveal>
          ) : null}
        </Container>
      </Section>

      {awards.length > 0 ? (
        <Section tone="soft" index="02" indexLabel="Recognition" aria-labelledby="awards-page-heading">
          <Container>
            <SectionHeading
              id="awards-page-heading"
              title="Awards and honours."
            />

            <ul className="mt-14 border-t border-line lg:mt-16">
              {awards.map((award, i) => (
                <li key={award.title} className="border-b border-line">
                  <Reveal delay={i * 0.04}>
                    <article className="grid gap-3 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                      <p className="font-display text-lg text-accent-warm sm:col-span-2">
                        {award.year}
                      </p>
                      <div className="sm:col-span-6">
                        <h3 className="font-display text-xl leading-snug text-content">
                          {award.title}
                        </h3>
                        {award.description ? (
                          <p className="mt-2 max-w-md text-sm leading-relaxed text-content-subtle">
                            {award.description}
                          </p>
                        ) : null}
                      </div>
                      <p className="text-sm text-content-subtle sm:col-span-4 sm:text-right">
                        {award.issuer}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {milestones.length > 0 ? (
        <Section index="03" indexLabel="Timeline" aria-labelledby="milestones-heading">
          <Container>
            <SectionHeading
              id="milestones-heading"
              title="Institutional milestones."
            />

            <ol className="mt-14 lg:mt-16">
              {milestones.map((milestone, i) => (
                <li key={milestone.year}>
                  <Reveal delay={i * 0.04}>
                    <div className="grid gap-4 sm:grid-cols-12 sm:gap-8">
                      <p className="font-display text-lg text-accent-warm sm:col-span-2">
                        {milestone.year}
                      </p>
                      <div className="relative pb-10 sm:col-span-10 sm:border-l sm:border-line sm:pl-10">
                        <span
                          aria-hidden="true"
                          className="absolute -left-[3px] top-2.5 hidden size-1.5 rounded-full bg-accent sm:block"
                        />
                        <h3 className="font-display text-xl leading-snug text-content">
                          {milestone.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-content-muted">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      ) : null}

      <ContactCta />
    </>
  );
}
