import type { Metadata } from "next";

import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { MediaEntry } from "@/components/media/MediaEntry";
import { Reveal } from "@/components/ui/Reveal";
import { mediaIntro, mediaItems } from "@/content/media";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Media & Publications",
  description:
    "Writing, interviews and talks by Abdullah Jaman on school leadership, curriculum design and running an academic institution.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow={mediaIntro.eyebrow}
        title={mediaIntro.headline}
        lede={mediaIntro.lede}
      />

      <Section>
        <Container>
          {mediaItems.length === 0 ? (
            <p className="text-lede text-ink-600">
              Published pieces and recorded talks will be listed here.
            </p>
          ) : (
            <>
              {/* The entries are h3s; without an h2 the page jumps h1 -> h3. */}
              <h2 className="mb-10 text-display-md text-ink-900">
                Everything, most recent first.
              </h2>
              <div className="border-t border-ink-900/10">
                {mediaItems.map((item, index) => (
                  <div key={item.title} className="border-b border-ink-900/10">
                    <Reveal delay={Math.min(index, 3) * 0.04}>
                      <MediaEntry item={item} />
                    </Reveal>
                  </div>
                ))}
              </div>
            </>
          )}
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
