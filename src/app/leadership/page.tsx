import type { Metadata } from "next";
import { ArrowUpRight, Building2 } from "lucide-react";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { FeatureImage } from "@/components/ui/FeatureImage";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { IconChip } from "@/components/ui/IconChip";
import { PendingNote } from "@/components/ui/PendingNote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  initiatives,
  leadershipFeature,
  leadershipIntro,
  leadershipPending,
  leadershipPhilosophy,
  leadershipSecondary,
  roles,
} from "@/content/leadership";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leadership",
  description:
    "Abdullah Jaman is the Founder and Principal of Wheaton International School and Guidance International School in Dhaka, Bangladesh.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow={leadershipIntro.eyebrow}
        title={leadershipIntro.headline}
        lede={leadershipIntro.lede}
      />

      <Section divider={false} index="01" indexLabel="Roles" aria-labelledby="roles-heading">
        <Container>
          <SectionHeading
            id="roles-heading"
            title="Current *roles*."
            lede="Positions held now. Earlier roles are not yet part of the record."
          />

          <FeatureImage
            image={leadershipFeature}
            caption="Presenting medals at an annual sports day."
            priority
            className="mt-14 lg:mt-16"
          />

          <ol className="mt-8 grid gap-5 lg:mt-10 lg:gap-6">
            {roles.map((role) => (
              <li key={role.slug}>
                <Reveal>
                  <Card
                    as="article"
                    padding="lg"
                    hover={role.href ? "lift" : "quiet"}
                    accent="gold"
                    accentEdge="left"
                  >
                    {/* One column throughout: the meta row is a footer under a
                        rule rather than a side column, so it cannot drift out
                        of alignment with a heading of unpredictable height. */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                      <IconChip icon={Building2} className="sm:mt-1" />
                      <div className="min-w-0 flex-1">
                        <h3 className="text-display-md text-content">
                          {role.href ? (
                            <a
                              href={role.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-start gap-2 transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent"
                            >
                              {role.organization}
                              {/* The visible cue that the lift is promising a
                                  destination. Without it the card moves and
                                  says nothing about why. */}
                              <ArrowUpRight
                                aria-hidden="true"
                                strokeWidth={1.5}
                                className="mt-2 size-5 shrink-0 transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
                              />
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          ) : (
                            role.organization
                          )}
                        </h3>
                        <p className="mt-3 text-sm font-medium text-accent">
                          {role.title}
                        </p>

                        {role.summary ? (
                          <p className="mt-6 max-w-2xl text-lede text-content-muted">
                            {role.summary}
                          </p>
                        ) : null}

                        {role.highlights && role.highlights.length > 0 ? (
                          <ul className="mt-7 flex flex-col gap-4">
                            {role.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex max-w-2xl gap-4 text-sm leading-relaxed text-content-muted"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2.5 h-px w-4 shrink-0 bg-accent-solid"
                                />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>

                    <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5 border-t border-line pt-7">
                      {role.location ? (
                        <div>
                          <dt className="text-eyebrow font-semibold uppercase text-content-subtle">
                            Location
                          </dt>
                          <dd className="mt-1.5 text-content transition-colors group-hover/card:text-accent">
                            {role.location}
                          </dd>
                        </div>
                      ) : null}
                      {role.period ? (
                        <div>
                          <dt className="text-eyebrow font-semibold uppercase text-content-subtle">
                            Period
                          </dt>
                          {/* The dated line is what a reader scans an
                              experience list for, so it is what takes the
                              accent when the card is under the cursor. */}
                          <dd className="mt-1.5 text-content transition-colors group-hover/card:text-accent">
                            {role.period}
                          </dd>
                        </div>
                      ) : null}
                    </dl>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ol>

          {leadershipPending ? (
            <Reveal step={roles.length}>
              <PendingNote className="mt-12">{leadershipPending}</PendingNote>
            </Reveal>
          ) : null}
        </Container>
      </Section>

      {/* The approach, with the teacher-training frame beside it. Placed after
          the roles because a list of titles says what he holds; this says how
          he works, which is the part worth a page of its own. */}
      <Section
        tone="ivory"
        index="02"
        indexLabel="Approach"
        accent="gold"
        separator="band"
        aria-labelledby="leadership-philosophy-heading"
      >
        <Container className="relative">
          <GeometricPattern className="-top-14 h-64" fade />

          <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <SectionHeading
                id="leadership-philosophy-heading"
                title={leadershipPhilosophy.headline}
                size="feature"
              />
              <div className="mt-10 flex max-w-2xl flex-col gap-6 text-lede text-content-muted">
                {leadershipPhilosophy.body.map((paragraph, i) => (
                  <Reveal key={paragraph.slice(0, 32)} step={i}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* The caption changed with the photograph. A caption left
                  behind after the image under it is swapped is a caption that
                  describes something the reader cannot see. */}
              <FeatureImage
                image={leadershipSecondary}
                caption="Addressing a room."
                ratio="4 / 5"
              />
            </div>
          </div>
        </Container>
      </Section>

      {initiatives.length > 0 ? (
        <Section
          tone="soft"
          index="03"
          indexLabel="Initiatives"
          accent="red"
          separator="band"
          aria-labelledby="initiatives-heading"
        >
          <Container>
            <SectionHeading
              id="initiatives-heading"
              title="Programmes and projects."
              accent="red"
            />

            <ul className="mt-14 grid gap-px border-t border-line lg:mt-16 lg:grid-cols-2">
              {initiatives.map((initiative, i) => (
                <li
                  key={initiative.slug}
                  className="group/row border-b border-line lg:odd:pr-12 lg:even:border-l lg:even:pl-12"
                >
                  <Reveal step={i % 2}>
                    <article className="py-10 lg:py-12">
                      <p className="text-eyebrow font-semibold uppercase text-content-subtle">
                        {initiative.category}
                      </p>
                      <h3 className="mt-4 text-display-md text-content transition-colors group-hover/row:text-accent">
                        {initiative.title}
                      </h3>
                      <p className="mt-5 leading-relaxed text-content-muted">
                        {initiative.summary}
                      </p>
                      <ul className="mt-7 flex flex-col gap-2.5">
                        {initiative.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-3 text-sm leading-relaxed text-content-subtle"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-px w-3 shrink-0 bg-accent-solid"
                            />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <ContactCta index={initiatives.length > 0 ? "04" : "03"} />
    </>
  );
}
