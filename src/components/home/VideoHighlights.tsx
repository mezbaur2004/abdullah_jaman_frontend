import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { VideoCard } from "@/components/media/VideoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLink } from "@/components/ui/SectionLink";
import { videos } from "@/content/media";

/** The same video cards the media page carries, on the homepage. */
export function VideoHighlights({ index }: { index?: string }) {
  if (videos.length === 0) return null;

  return (
    <Section
      tone="soft"
      index={index}
      indexLabel="Video"
      accent="gold"
      aria-labelledby="video-highlights-heading"
    >
      <Container>
        <SectionHeading
          id="video-highlights-heading"
          title="Video message and *media* appearances."
          accent="gold"
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {videos.map((video, i) => (
            <li key={video.href} className={i === 0 ? "sm:col-span-2 lg:col-span-3" : undefined}>
              <Reveal step={i} className="h-full">
                <VideoCard video={video} lead={i === 0} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14 block lg:mt-16">
          <SectionLink href="/media">All media</SectionLink>
        </Reveal>
      </Container>
    </Section>
  );
}
