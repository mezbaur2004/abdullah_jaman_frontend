import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { initiatives, roles } from "@/content/experience";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    "Leadership roles and initiatives across Pedago Academy, Wheaton International School and Guidance International School — curriculum design, teacher development and academic governance.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Roles, and the work inside them."
        lede="Three institutions, one brief: build an academic model that is demanding but humane, and put enough structure around it that it does not depend on any one person."
      />

      <Section aria-labelledby="roles-heading">
        <Container>
          <SectionHeading
            id="roles-heading"
            eyebrow="Leadership"
            title="Current roles."
          />

          <ol className="mt-14 border-t border-ink-900/10 lg:mt-16">
            {roles.map((role) => (
              <li key={role.slug} className="border-b border-ink-900/10">
                <Reveal>
                  <article className="grid gap-8 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
                    <header className="lg:col-span-4">
                      <h3 className="text-display-md text-ink-900">
                        {role.organization}
                      </h3>
                      <p className="mt-3 text-sm font-medium text-brass-600">
                        {role.title}
                      </p>
                      <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-eyebrow font-medium uppercase text-ink-500">
                        <span>{role.period}</span>
                        {role.location ? (
                          <>
                            <span aria-hidden="true" className="text-ink-300">
                              /
                            </span>
                            <span>{role.location}</span>
                          </>
                        ) : null}
                      </p>
                    </header>

                    <div className="lg:col-span-8">
                      <p className="max-w-2xl text-lede text-ink-600">
                        {role.summary}
                      </p>
                      <ul className="mt-8 flex flex-col gap-4">
                        {role.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex max-w-2xl gap-4 text-sm leading-relaxed text-ink-600"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-px w-4 shrink-0 bg-brass-400"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="soft" aria-labelledby="initiatives-heading">
        <Container>
          <SectionHeading
            id="initiatives-heading"
            eyebrow="Initiatives"
            title="Programmes built, and what they changed."
            lede="Each started as a problem somebody was living with — an unteachable syllabus, a teacher left to sink, a standard nobody could enforce."
          />

          <ul className="mt-14 grid gap-px border-t border-ink-900/10 lg:mt-16 lg:grid-cols-2">
            {initiatives.map((initiative, index) => (
              <li
                key={initiative.slug}
                className="border-b border-ink-900/10 lg:odd:pr-12 lg:even:border-l lg:even:pl-12"
              >
                <Reveal delay={(index % 2) * 0.06}>
                  <article className="py-10 lg:py-12">
                    <p className="text-eyebrow font-medium uppercase text-ink-500">
                      {initiative.category}
                    </p>
                    <h3 className="mt-4 text-display-md text-ink-900">
                      {initiative.title}
                    </h3>
                    <p className="mt-5 leading-relaxed text-ink-600">
                      {initiative.summary}
                    </p>
                    <ul className="mt-7 flex flex-col gap-2.5">
                      {initiative.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-3 text-sm leading-relaxed text-ink-500"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-3 shrink-0 bg-brass-400"
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

      <ContactCta />
    </>
  );
}
