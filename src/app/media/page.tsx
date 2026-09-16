import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { MediaEntry } from "@/components/media/MediaEntry";
import { FeatureImage } from "@/components/ui/FeatureImage";
import { PendingNote } from "@/components/ui/PendingNote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaFeature, mediaIntro, mediaItems, publications } from "@/content/media";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Media",
  description:
    "Press coverage and interviews featuring Abdullah Jaman, Founder and Principal of Wheaton International School and Guidance International School.",
  path: "/media",
});

const pending =
  "Further interviews, features, talks and published writing will be listed here as they are confirmed.";

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow={mediaIntro.eyebrow}
        title={mediaIntro.headline}
        lede={mediaIntro.lede}
      />

      <Section divider={false} index="01" indexLabel="Press" aria-labelledby="press-heading">
        <Container>
          <SectionHeading
            id="press-heading"
            title="Interviews and features."
          />

          <FeatureImage
            image={mediaFeature}
            caption="In conversation on an interview set."
            priority
            className="mt-14 lg:mt-16"
          />

          {mediaItems.length > 0 ? (
            <ul className="mt-14 grid gap-5 lg:mt-16">
              {mediaItems.map((item, i) => (
                <li key={item.title}>
                  <Reveal step={i}>
                    <MediaEntry item={item} />
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : null}

          <Reveal step={1}>
            <PendingNote className="mt-12">{pending}</PendingNote>
          </Reveal>
        </Container>
      </Section>

      {publications.length > 0 ? (
        <Section
          tone="soft"
          index="02"
          indexLabel="Publications"
          accent="yellow"
          separator="editorial"
          aria-labelledby="publications-heading"
        >
          <Container>
            <SectionHeading
              id="publications-heading"
              title="Published writing."
              accent="yellow"
            />

            <ul className="mt-14 grid gap-5 lg:mt-16">
              {publications.map((item, i) => (
                <li key={item.title}>
                  <Reveal step={i}>
                    <MediaEntry item={item} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <ContactCta index={publications.length > 0 ? "03" : "02"} />
    </>
  );
}
