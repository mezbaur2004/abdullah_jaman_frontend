import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
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
    "Abdullah Jaman founded Wheaton International School and Guidance International School in Dhaka and serves as Principal of both.",
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

      {/* Founding both schools is the one achievement the record establishes,
          so it carries the page while awards and figures are outstanding. */}
      <Section
        divider={false}
        index="01"
        indexLabel="Institutions"
        aria-labelledby="institutions-heading"
      >
        <Container>
          <SectionHeading
            id="institutions-heading"
            title="Two schools, founded and led."
          />

          <ul className="mt-14 grid gap-px lg:mt-16 lg:grid-cols-2">
            {organizations.map((organization, i) => (
              <li
                key={organization.name}
                className="border-t border-line lg:odd:pr-12 lg:even:border-l lg:even:pl-12"
              >
                <Reveal delay={i * 0.06}>
                  <div className="py-10">
                    <p className="font-display text-display-md text-content">
                      {organization.name}
                    </p>
                    <p className="mt-4 text-sm font-medium text-accent">
                      {organization.role}
                    </p>
                    {organization.location ? (
                      <p className="mt-2 text-sm text-content-subtle">
                        {organization.location}
                      </p>
                    ) : null}
                  </div>
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
                      <p className="font-display text-lg text-accent sm:col-span-2">
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
                      <p className="font-display text-lg text-accent sm:col-span-2">
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
