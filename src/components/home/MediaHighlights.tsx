import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MediaSlider } from "@/components/home/MediaSlider";
import { PressCard } from "@/components/media/PressCard";
import { VideoCard } from "@/components/media/VideoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLink } from "@/components/ui/SectionLink";
import { mediaIntro, mediaItems, videos } from "@/content/media";

/**
 * Videos and press in one row, as a slider. Videos lead, alternating with the
 * press so neither kind reads as an appendix to the other.
 */
export function MediaHighlights({ index }: { index?: string }) {
  const count = Math.max(videos.length, mediaItems.length);
  const slides = Array.from({ length: count }).flatMap((_, i) => [
    ...(videos[i] ? [<VideoCard key={`v${i}`} video={videos[i]} />] : []),
    ...(mediaItems[i] ? [<PressCard key={`p${i}`} item={mediaItems[i]} />] : []),
  ]);

  if (slides.length === 0) return null;

  return (
    <Section
      index={index}
      indexLabel="Media"
      accent="red"
      spacing="tight"
      aria-labelledby="media-heading"
    >
      <Container>
        <SectionHeading
          id="media-heading"
          title={mediaIntro.headline}
        />

        <Reveal className="mt-12 block lg:mt-14">
          <MediaSlider label="Videos and press features">{slides}</MediaSlider>
        </Reveal>

        <Reveal className="mt-10 block">
          <SectionLink href="/media">All media</SectionLink>
        </Reveal>
      </Container>
    </Section>
  );
}
