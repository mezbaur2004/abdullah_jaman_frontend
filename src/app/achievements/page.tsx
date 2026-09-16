import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ListRow } from "@/components/ui/ListRow";
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
        variant="ornament"
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
            title="Institutions under his *leadership*."
            lede="The institutions he currently leads, in Dhaka, Bangladesh."
          />

          {/* A strip, not a second set of the homepage's cards.
              This page and the homepage were both opening with two large
              bordered cards carrying the same two names, the same role and the
              same city — the second one read as a page that had been copied.
              Here the institutions are a credential rather than the subject,
              so they are a ruled row: monogram, name, role, and the link out.
              Same facts, a quarter of the height, and no reader will think
              they have pressed back. */}
          <ul className="mt-14 border-t border-line lg:mt-16">
            {organizations.map((organization, i) => (
              <li key={organization.name} className="group/row relative border-b border-line">
                <Reveal step={i}>
                  <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8 sm:py-8">
                    <span
                      aria-hidden="true"
                      className="w-16 shrink-0 font-display text-2xl font-semibold text-accent transition-transform duration-500 ease-editorial group-hover/row:translate-x-1"
                    >
                      {organization.shortName}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="font-display text-2xl leading-snug text-content">
                        {organization.href ? (
                          <a
                            href={organization.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline transition-colors after:absolute after:inset-0 after:content-[''] group-hover/row:text-accent"
                          >
                            {organization.name}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ) : (
                          organization.name
                        )}
                      </p>
                    </div>

                    <p className="shrink-0 text-ui font-medium uppercase tracking-[0.12em] text-accent sm:w-56 sm:text-right">
                      {organization.role}
                    </p>

                    {organization.location ? (
                      <p className="shrink-0 text-sm text-content-subtle sm:w-40 sm:text-right">
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
                  step={i}
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
            <Reveal step={organizations.length}>
              <PendingNote className="mt-14">{achievementsPending}</PendingNote>
            </Reveal>
          ) : null}
        </Container>
      </Section>

      {awards.length > 0 ? (
        <Section
          tone="soft"
          index="02"
          indexLabel="Recognition"
          accent="red"
          aria-labelledby="awards-page-heading"
        >
          <Container>
            <SectionHeading
              id="awards-page-heading"
              title="Awards and honours."
              accent="red"
            />

            <ul className="mt-14 border-t border-line lg:mt-16">
              {awards.map((award, i) => (
                <ListRow key={award.title}>
                  <Reveal step={i}>
                    <article className="grid gap-3 py-8 pl-5 transition-[padding] group-hover/row:pl-7 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                      <p className="font-display text-lg text-content-subtle transition-colors group-hover/row:text-accent sm:col-span-2">
                        {award.year}
                      </p>
                      <div className="sm:col-span-6">
                        <h3 className="font-display text-xl leading-snug text-content transition-colors group-hover/row:text-accent">
                          {award.title}
                        </h3>
                        {award.description ? (
                          <p className="mt-2 max-w-md text-sm leading-relaxed text-content-subtle">
                            {award.description}
                          </p>
                        ) : null}
                      </div>
                      <p className="text-sm text-content-subtle transition-colors group-hover/row:text-content-muted sm:col-span-4 sm:text-right">
                        {award.issuer}
                      </p>
                    </article>
                  </Reveal>
                </ListRow>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {milestones.length > 0 ? (
        <Section
          index="03"
          indexLabel="Timeline"
          accent="gold"
          separator="quiet"
          aria-labelledby="milestones-heading"
        >
          <Container>
            <SectionHeading
              id="milestones-heading"
              title="Institutional milestones."
            />

            <ol className="mt-14 lg:mt-16">
              {milestones.map((milestone, i) => (
                <li key={milestone.year} className="group/row">
                  <Reveal step={i}>
                    <div className="grid gap-4 sm:grid-cols-12 sm:gap-8">
                      <p className="font-display text-lg text-content-subtle transition-colors group-hover/row:text-accent sm:col-span-2">
                        {milestone.year}
                      </p>
                      <div className="relative pb-10 sm:col-span-10 sm:border-l sm:border-line sm:pl-10">
                        <span
                          aria-hidden="true"
                          className="absolute -left-[3px] top-2.5 hidden size-1.5 rounded-full bg-accent-solid transition-transform group-hover/row:scale-150 sm:block"
                        />
                        <h3 className="font-display text-xl leading-snug text-content transition-colors group-hover/row:text-accent">
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
