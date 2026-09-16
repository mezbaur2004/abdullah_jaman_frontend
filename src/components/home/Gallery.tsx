import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/content/gallery";

/**
 * Optional by design: while `gallery` is empty the section removes itself
 * rather than leaving a hole in the page.
 */
export function Gallery({ index }: { index?: string }) {
  if (gallery.length === 0) return null;

  return (
    <Section
      index={index}
      indexLabel="Gallery"
      accent="blue"
      separator="minimal"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <SectionHeading
          id="gallery-heading"
          title="Photographs."
        />

        {/* CSS columns rather than a grid of fixed ratio boxes. The forced
            ratios were cropping heads off portraits that did not happen to
            match them, and no aspect ratio suits a set that runs from 3:2 to
            2:3. Each photograph keeps its own shape here, and the columns pack
            the varying heights without leaving holes. DOM order is preserved,
            so the reading order stays correct even though the visual order
            flows down each column. */}
        <ul className="mt-14 columns-1 gap-5 sm:columns-2 lg:mt-16 lg:gap-6">
          {gallery.map((entry, i) => (
            <li
              key={entry.image.src}
              className="mb-5 break-inside-avoid lg:mb-6"
            >
              <Reveal step={i}>
                <Figure
                  image={entry.image}
                  caption={entry.caption}
                  zoom
                  sizes="(min-width: 1024px) 46vw, (min-width: 640px) 48vw, 90vw"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
