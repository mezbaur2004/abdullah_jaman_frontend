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
import { IconChip } from "@/components/ui/IconChip";
import { ListRow } from "@/components/ui/ListRow";
import { cardAccent } from "@/lib/accent";
import { emphasise } from "@/lib/emphasis";
import { withHonorifics } from "@/lib/honorific";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aboutFeature,
  aboutPage,
  education,
  expertise,
  founderMessage,
  heroPanel,
  organizations,
  portrait,
  professionalDevelopment,
  roleLine,
  verse,
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
        pattern
      />

      <Section divider={false} index="01" indexLabel="Profile">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              {/* The same shape the hero gives its portrait: square, with the
                  top corners curved and the bottom left square. */}
                <ImageReveal>
                  <Figure
                    image={image}
                    ratio="1 / 1"
                    priority
                    frame="none"
                    className="overflow-hidden rounded-t-3xl"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 24rem, 90vw"
                  />
                </ImageReveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-display text-2xl font-semibold leading-snug text-ink">
                  {roleLine.join(" · ")}
                </p>
                <ul aria-label="Areas of expertise" className="mt-7 flex flex-wrap gap-2.5">
                  {expertise.map((item) => (
                    <li
                      key={item}
                      className="rounded-chip border border-line bg-surface-raised px-3.5 py-2 text-ui font-medium text-content"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
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
        id="message"
        tone="inverse"
        index="02"
        indexLabel={founderMessage.eyebrow}
        accent="gold"
        pattern
        aria-labelledby="about-message-heading"
      >
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal className="text-center">
              <p
                lang="ar"
                dir="rtl"
                className="font-arabic text-4xl leading-relaxed text-accent-on-inverse sm:text-5xl"
              >
                {founderMessage.basmalah}
              </p>
              <p className="mt-3 text-eyebrow font-semibold uppercase text-on-inverse-muted">
                {founderMessage.basmalahTranslation}
              </p>
              <h2
                id="about-message-heading"
                className="mt-12 text-display-lg text-on-inverse"
              >
                {emphasise(founderMessage.heading)}
              </h2>
            </Reveal>

            <Reveal step={1}>
              <blockquote className="mt-12 border-l-2 border-accent-on-inverse pl-6 font-display text-display-md font-semibold italic text-on-inverse sm:pl-8">
                <p>&ldquo;{withHonorifics(founderMessage.lead)}&rdquo;</p>
              </blockquote>
            </Reveal>

            <Reveal step={2}>
              <div className="mt-10 flex flex-col gap-5 text-lede text-on-inverse-muted">
                {founderMessage.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{withHonorifics(paragraph)}</p>
                ))}
              </div>
              <ul className="mt-10 flex flex-col gap-3 border-y border-line-inverse py-8 font-display text-2xl font-semibold text-on-inverse">
                {founderMessage.refrain.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-8 font-display text-2xl font-semibold text-on-inverse">
                {aboutPage.headline}
              </p>
              <p className="mt-1 text-sm italic text-on-inverse-muted">
                {founderMessage.signoff}
              </p>
            </Reveal>

            <Reveal step={3}>
              <figure className="mt-16 text-center">
                <p
                  lang="ar"
                  dir="rtl"
                  className="font-arabic text-3xl leading-relaxed text-accent-on-inverse sm:text-4xl"
                >
                  {verse.arabic}
                </p>
                <blockquote className="mt-4 font-display text-xl italic text-on-inverse">
                  <p>&ldquo;{verse.translation}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-3 text-sm text-on-inverse-muted">
                  — {verse.reference}. {verse.note}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section
        tone="soft"
        index="03"
        indexLabel="Institutions"
        accent="gold"
        aria-labelledby="about-roles-heading"
      >
        <Container>
          <SectionHeading
            id="about-roles-heading"
            title="Institutions."
            lede="The institutions he currently leads, in Dhaka, Bangladesh."
            accent="gold"
          />

          <ul className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
            {organizations.map((organization, i) => (
              <li key={organization.name}>
                <Reveal step={i} className="h-full">
                  <Card
                    as="article"
                    padding="lg"
                    hover={organization.href ? "lift" : "quiet"}
                    accent={cardAccent("gold", i)}
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
          index="04"
          indexLabel="Education"
          accent="gold"
          separator="quiet"
          aria-labelledby="about-education-heading"
        >
          <Container>
            <SectionHeading
              id="about-education-heading"
              title="Study."
              lede="Academic credentials and continuing professional development. Years were not supplied and are not shown."
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

            {professionalDevelopment.length > 0 ? (
              <div className="mt-16">
                <h3 className="text-eyebrow font-semibold uppercase text-accent">
                  Professional development
                </h3>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {professionalDevelopment.map((item, i) => (
                    <li key={item.title}>
                      <Reveal step={i} className="h-full">
                        <Card padding="md" hover="quiet" className="h-full">
                          <p className="font-display text-xl font-semibold text-content">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm text-content-muted">
                            {item.issuer}
                          </p>
                        </Card>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Container>
        </Section>
      ) : null}

      <ContactCta index="05" />
    </>
  );
}
