import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MediaEntry } from "@/components/media/MediaEntry";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaItems } from "@/content/media";

export function MediaHighlights() {
  const highlights = mediaItems.slice(0, 3);

  if (highlights.length === 0) return null;

  return (
    <Section aria-labelledby="media-heading">
      <Container>
        <SectionHeading
          id="media-heading"
          eyebrow="Media & publications"
          title="Selected writing and interviews."
          aside={
            <Button href="/media" variant="quiet">
              All media
            </Button>
          }
        />

        <div className="mt-14 border-t border-ink-900/10 lg:mt-16">
          {highlights.map((item, index) => (
            <div key={item.title} className="border-b border-ink-900/10">
              <Reveal delay={index * 0.05}>
                <MediaEntry item={item} />
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
