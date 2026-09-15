import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aboutPage,
  education,
  heroPanel,
  organizations,
  portrait,
} from "@/content/profile";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: site.description,
  path: "/about",
});

export default function AboutPage() {
  const image = portrait ?? heroPanel;

  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.headline}
        lede={aboutPage.lede}
      />

      <Section divider={false} index="01" indexLabel="Profile">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <Figure
                  image={image}
                  ratio="4 / 5"
                  priority
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 90vw"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <dl className="border-t border-line">
                  {aboutPage.facts.map((fact) => (
                    <div key={fact.label} className="border-b border-line py-5">
                      <dt className="text-eyebrow font-medium uppercase text-content-subtle">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-lede text-content">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              {/* Populated from the content layer once a biography exists. */}
              {aboutPage.sections.length > 0 ? (
                <div className="mt-14 flex flex-col gap-14">
                  {aboutPage.sections.map((section) => (
                    <Reveal key={section.heading}>
                      <article>
                        <h2 className="text-display-md text-content">
                          {section.heading}
                        </h2>
                        <div className="mt-6 flex max-w-2xl flex-col gap-5 text-lede text-content-muted">
                          {section.body.map((paragraph) => (
                            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                          ))}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="soft" index="02" indexLabel="Roles" aria-labelledby="about-roles-heading">
        <Container>
          <SectionHeading
            id="about-roles-heading"
            title="Institutions founded and led."
          />

          <ul className="mt-14 border-t border-line lg:mt-16">
            {organizations.map((organization, i) => (
              <li key={organization.name} className="border-b border-line">
                <Reveal delay={i * 0.05}>
                  <div className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-8">
                    <h3 className="font-display text-xl text-content sm:col-span-6">
                      {organization.href ? (
                        <a
                          href={organization.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-300 ease-editorial hover:text-accent"
                        >
                          {organization.name}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        organization.name
                      )}
                    </h3>
                    <p className="text-sm font-medium text-accent sm:col-span-3">
                      {organization.role}
                    </p>
                    <p className="text-sm text-content-subtle sm:col-span-3 sm:text-right">
                      {organization.location}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {education.length > 0 ? (
        <Section index="03" indexLabel="Education" aria-labelledby="about-education-heading">
          <Container>
            <SectionHeading
              id="about-education-heading"
              title="Study."
            />

            <ul className="mt-14 border-t border-line lg:mt-16">
              {education.map((entry) => (
                <li key={entry.institution} className="border-b border-line">
                  <Reveal>
                    <div className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-8">
                      <h3 className="font-display text-xl text-content sm:col-span-6">
                        {entry.institution}
                      </h3>
                      <div className="sm:col-span-6">
                        {entry.qualification ? (
                          <p className="text-sm text-content-muted">
                            {entry.qualification}
                            {entry.field ? `, ${entry.field}` : null}
                          </p>
                        ) : null}
                        {entry.period ? (
                          <p className="mt-1 text-sm text-content-subtle">
                            {entry.period}
                          </p>
                        ) : null}
                        {entry.note ? (
                          <p className="mt-1 text-sm text-content-subtle">
                            {entry.note}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <ContactCta index="04" />
    </>
  );
}
