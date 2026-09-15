import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPage, organizations, portraitSecondary } from "@/content/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Abdullah Jaman is an educationist and institution builder working at the point where academic ambition meets the systems that have to deliver it.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.headline}
        lede={aboutPage.lede}
      />

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <Figure
                  image={portraitSecondary}
                  ratio="4 / 5"
                  priority
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 90vw"
                />
              </Reveal>

              <Reveal delay={0.06}>
                <dl className="mt-10 border-t border-ink-900/10">
                  {aboutPage.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-ink-900/10 py-4"
                    >
                      <dt className="text-eyebrow font-medium uppercase text-ink-500">
                        {fact.label}
                      </dt>
                      <dd className="text-sm text-ink-800">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <div className="flex flex-col gap-14 lg:col-span-7 lg:gap-20">
              {aboutPage.sections.map((section) => (
                <Reveal key={section.heading}>
                  <article>
                    <h2 className="text-display-md text-ink-900">
                      {section.heading}
                    </h2>
                    <div className="mt-6 flex max-w-2xl flex-col gap-5 text-lede text-ink-600">
                      {section.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="soft" aria-labelledby="about-roles-heading">
        <Container>
          <Reveal>
            <Eyebrow id="about-roles-heading">Roles</Eyebrow>
          </Reveal>
          <ul className="mt-10 border-t border-ink-900/10">
            {organizations.map((organization, index) => (
              <li key={organization.name} className="border-b border-ink-900/10">
                <Reveal delay={index * 0.05}>
                  <div className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-8">
                    <h3 className="font-display text-xl text-ink-900 sm:col-span-5">
                      {organization.name}
                    </h3>
                    <p className="text-sm font-medium text-brass-600 sm:col-span-3">
                      {organization.role}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-500 sm:col-span-4">
                      {organization.summary}
                    </p>
                  </div>
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
