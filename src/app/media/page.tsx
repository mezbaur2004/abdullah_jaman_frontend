import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { MediaEntry } from "@/components/media/MediaEntry";
import { PendingNote } from "@/components/ui/PendingNote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaIntro, mediaItems, publications } from "@/content/media";
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

          {mediaItems.length > 0 ? (
            <ul className="mt-14 grid gap-5 lg:mt-16">
              {mediaItems.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={Math.min(i, 3) * 0.04}>
                    <MediaEntry item={item} />
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : null}

          <Reveal delay={0.06}>
            <PendingNote className="mt-12">{pending}</PendingNote>
          </Reveal>
        </Container>
      </Section>

      {publications.length > 0 ? (
        <Section tone="soft" index="02" indexLabel="Publications" aria-labelledby="publications-heading">
          <Container>
            <SectionHeading
              id="publications-heading"
              title="Published writing."
            />

            <ul className="mt-14 grid gap-5 lg:mt-16">
              {publications.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={Math.min(i, 3) * 0.04}>
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
