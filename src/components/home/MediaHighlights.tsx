import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MediaEntry } from "@/components/media/MediaEntry";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaIntro, mediaItems } from "@/content/media";

export function MediaHighlights({ index }: { index?: string }) {
  const highlights = mediaItems.slice(0, 3);

  if (highlights.length === 0) return null;

  return (
    <Section
      tone="soft"
      index={index}
      indexLabel="Media"
      aria-labelledby="media-heading"
    >
      <Container>
        <SectionHeading
          id="media-heading"
          title={mediaIntro.headline}
          lede={mediaIntro.lede}
          aside={
            // Only worth a link out when the page holds more than is shown here.
            mediaItems.length > highlights.length ? (
              <Button href="/media" variant="quiet">
                All media
              </Button>
            ) : undefined
          }
        />

        <div className="mt-14 border-t border-line lg:mt-16">
          {highlights.map((item, i) => (
            <div key={item.title} className="border-b border-line">
              <Reveal delay={i * 0.05}>
                <MediaEntry item={item} />
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
