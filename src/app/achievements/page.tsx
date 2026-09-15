import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { KeyStats } from "@/components/home/KeyStats";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards, milestones } from "@/content/achievements";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Achievements",
  description:
    "Awards, recognition and institutional milestones across Abdullah Jaman's work in school leadership, curriculum design and teacher development.",
  path: "/achievements",
});

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Recognition, and the milestones behind it."
        lede="A record built on institutions that still run well, teachers who went further than they expected to, and academic standards that held when they were inconvenient."
      />

      <KeyStats />

      <Section aria-labelledby="awards-page-heading">
        <Container>
          <SectionHeading
            id="awards-page-heading"
            eyebrow="Recognition"
            title="Awards and honours."
          />

          <ul className="mt-14 border-t border-ink-900/10 lg:mt-16">
            {awards.map((award, index) => (
              <li key={award.title} className="border-b border-ink-900/10">
                <Reveal delay={index * 0.04}>
                  <article className="grid gap-3 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                    <p className="font-display text-lg text-brass-600 sm:col-span-2">
                      {award.year}
                    </p>
                    <div className="sm:col-span-6">
                      <h3 className="font-display text-xl leading-snug text-ink-900">
                        {award.title}
                      </h3>
                      {award.description ? (
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                          {award.description}
                        </p>
                      ) : null}
                    </div>
                    <p className="text-sm text-ink-500 sm:col-span-4 sm:text-right">
                      {award.issuer}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="soft" aria-labelledby="milestones-heading">
        <Container>
          <SectionHeading
            id="milestones-heading"
            eyebrow="Timeline"
            title="Institutional milestones."
          />

          <ol className="mt-14 lg:mt-16">
            {milestones.map((milestone, index) => (
              <li key={milestone.year}>
                <Reveal delay={index * 0.04}>
                  {/* The rule runs through the marker, so the column reads as
                      one continuous line rather than a stack of dots. */}
                  <div className="grid gap-4 sm:grid-cols-12 sm:gap-8">
                    <p className="font-display text-lg text-brass-600 sm:col-span-2">
                      {milestone.year}
                    </p>
                    <div className="relative pb-10 sm:col-span-10 sm:border-l sm:border-ink-900/15 sm:pl-10">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[3px] top-2.5 hidden size-1.5 rounded-full bg-brass-500 sm:block"
                      />
                      <h3 className="font-display text-xl leading-snug text-ink-900">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-600">
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

      <ContactCta />
    </>
  );
}
