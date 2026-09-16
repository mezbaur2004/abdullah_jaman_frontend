import type { Metadata } from "next";
import { ArrowUpRight, Building2 } from "lucide-react";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { FeatureImage } from "@/components/ui/FeatureImage";
import { Figure } from "@/components/ui/Figure";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { IconChip } from "@/components/ui/IconChip";
import { ListRow } from "@/components/ui/ListRow";
import { cardAccent } from "@/lib/accent";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aboutFeature,
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
              {/* The same frame the hero gives it: a picture on this site is
                  framed one way, and this one was the exception — a bare
                  hairline crop beside a page of framed photographs. */}
              <OffsetFrame className="mx-auto w-full max-w-sm lg:max-w-none">
                <ImageReveal className="rounded-figure">
                  <Figure
                    image={image}
                    ratio="4 / 5"
                    priority
                    rounded
                    elevated
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 24rem, 90vw"
                  />
                </ImageReveal>
              </OffsetFrame>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                {/* Two columns from `sm` up. Each value is a phrase, not a
                    paragraph, so one per full-width row left most of every
                    line empty and made five short facts look like a form. */}
                <dl className="grid gap-x-12 sm:grid-cols-2">
                  {aboutPage.facts.map((fact) => (
                    <div key={fact.label} className="border-t border-line py-5">
                      <dt className="text-eyebrow font-semibold uppercase text-content-subtle">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 leading-relaxed text-content">
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

              {/* Set here rather than as a band across the foot of the
                  section: the facts are short, the portrait beside them is
                  tall, and this is what brings the two columns level. */}
              <FeatureImage
                image={aboutFeature}
                caption="With guests at a reception."
                ratio="16 / 8"
                className="mt-12"
              />
            </div>
          </div>

        </Container>
      </Section>

      <Section
        tone="soft"
        index="02"
        indexLabel="Institutions"
        accent="yellow"
        aria-labelledby="about-roles-heading"
      >
        <Container>
          <SectionHeading
            id="about-roles-heading"
            title="Institutions."
            lede="The institutions he currently leads, in Dhaka, Bangladesh."
            accent="yellow"
          />

          <ul className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
            {organizations.map((organization, i) => (
              <li key={organization.name}>
                <Reveal step={i} className="h-full">
                  <Card
                    as="article"
                    padding="lg"
                    hover={organization.href ? "lift" : "quiet"}
                    accent={cardAccent("yellow", i)}
                    className="flex h-full flex-col"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <IconChip icon={Building2} />
                      {organization.shortName ? (
                        <span className="rounded-chip border border-line px-3 py-1 text-eyebrow font-semibold uppercase text-content-subtle transition-colors group-hover/card:border-line-accent group-hover/card:text-accent">
                          {organization.shortName}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-7 font-display text-2xl leading-snug text-content">
                      {organization.href ? (
                        <a
                          href={organization.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-2 transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent"
                        >
                          {organization.name}
                          <ArrowUpRight
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="mt-1 size-4 shrink-0 transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
                          />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        organization.name
                      )}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-accent">
                      {organization.role}
                    </p>

                    <dl className="mt-auto flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7">
                      {organization.location ? (
                        <div>
                          <dt className="text-eyebrow font-semibold uppercase text-content-subtle">
                            Location
                          </dt>
                          <dd className="mt-1.5 text-content">
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
        </Container>
      </Section>

      {education.length > 0 ? (
        <Section
          tone="ivory"
          index="03"
          indexLabel="Education"
          accent="blue"
          separator="minimal"
          aria-labelledby="about-education-heading"
        >
          <Container>
            <SectionHeading
              id="about-education-heading"
              title="Study."
              lede="Qualifications as recorded on his current school profile. Years were not supplied and are not shown."
            />

            <ul className="mt-14 border-t border-line lg:mt-16">
              {education.map((entry) => (
                <ListRow key={entry.institution}>
                  <Reveal>
                    <div className="grid gap-3 py-8 pl-5 transition-[padding] group-hover/row:pl-7 sm:grid-cols-12 sm:gap-8">
                      <h3 className="font-display text-xl text-content transition-colors group-hover/row:text-accent sm:col-span-6">
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
                </ListRow>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <ContactCta index="04" />
    </>
  );
}
