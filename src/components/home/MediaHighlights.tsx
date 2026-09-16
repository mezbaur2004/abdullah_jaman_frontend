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
      accent="red"
      separator="editorial"
      aria-labelledby="media-heading"
    >
      <Container>
        <SectionHeading
          id="media-heading"
          title={mediaIntro.headline}
          lede={mediaIntro.lede}
          accent="red"
          // Always. It used to appear only when the page held more than the
          // homepage showed — which, with one interview on the record, meant
          // the section had no way through to the media page at all except the
          // top nav, and left the right of the header empty into the bargain.
          aside={
            <Button href="/media" variant="quiet">
              {mediaItems.length > highlights.length
                ? "All media"
                : "Media & press"}
            </Button>
          }
        />

        <ul className="mt-14 grid gap-5 lg:mt-16">
          {highlights.map((item, i) => (
            <li key={item.title}>
              <Reveal step={i}>
                <MediaEntry item={item} lead={i === 0} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
