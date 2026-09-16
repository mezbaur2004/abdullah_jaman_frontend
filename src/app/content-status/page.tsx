import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contentGaps, openQuestions, verifiedSources } from "@/content/status";
import { pageMetadata } from "@/lib/seo";

/**
 * An internal working page, not part of the site's navigation and excluded
 * from search and the sitemap. It renders the research register in
 * src/content/status.ts so the state of the dataset is something the team can
 * look at rather than something they have to read TypeScript to discover.
 *
 * Delete this route once the content is complete.
 */
export const metadata: Metadata = pageMetadata({
  title: "Content status",
  description: "Internal record of what is verified and what is outstanding.",
  path: "/content-status",
  noIndex: true,
});

export default function ContentStatusPage() {
  return (
    <>
      <PageHeader
        eyebrow="Internal"
        title="Content status"
        lede="What is verified, what is known but unconfirmed, and what is still to be collected. This page is excluded from search engines and is not linked from the site."
        pattern
      />

      <Section divider={false} index="01" indexLabel="Verified" aria-labelledby="verified-heading">
        <Container>
          <SectionHeading
            id="verified-heading"
            title="Confirmed sources."
            lede="Everything published on the site traces back to one of these."
          />

          <ul className="mt-12 border-t border-line">
            {verifiedSources.map((source) => (
              <li key={source.label} className="border-b border-line">
                <div className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-8">
                  <h3 className="font-display text-xl text-content sm:col-span-4">
                    {source.href ? (
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1.5 transition-colors hover:text-accent"
                      >
                        {source.label}
                        <ArrowUpRight
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="mt-1.5 size-4 shrink-0"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      source.label
                    )}
                  </h3>
                  <p className="text-sm leading-relaxed text-content-muted sm:col-span-8">
                    {source.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="soft" index="02" indexLabel="Awaiting confirmation" aria-labelledby="open-heading">
        <Container>
          <SectionHeading
            id="open-heading"
            title="Known, but not yet usable."
            lede="Each of these has a specific blocker. None may be guessed at, and none appear on the public site."
          />

          <ul className="mt-12 border-t border-line">
            {openQuestions.map((question) => (
              <li key={question.subject} className="border-b border-line">
                <article className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-8">
                  <h3 className="font-display text-xl leading-snug text-content lg:col-span-3">
                    {question.subject}
                  </h3>
                  <div className="lg:col-span-4">
                    <p className="text-eyebrow font-semibold uppercase text-accent">
                      Known
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-content-muted">
                      {question.known}
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-eyebrow font-semibold uppercase text-content-subtle">
                      Missing
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-content-muted">
                      {question.missing}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section index="03" indexLabel="To collect" aria-labelledby="gaps-heading">
        <Container>
          <SectionHeading
            id="gaps-heading"
            title="Outstanding material."
          />

          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {contentGaps.map((gap) => (
              <section
                key={gap.area}
                className="border-t border-line py-7 sm:pr-8"
              >
                <h3 className="font-display text-lg text-content">
                  {gap.area}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {gap.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-content-subtle"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3 shrink-0 bg-line-strong"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
