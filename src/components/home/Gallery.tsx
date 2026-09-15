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
    <Section index={index} indexLabel="Gallery" aria-labelledby="gallery-heading">
      <Container>
        <SectionHeading
          id="gallery-heading"
          title="Photographs."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {gallery.map((entry, i) => {
            // A deliberately uneven rhythm: wide and tall plates alternating.
            const isWide = entry.image.width >= entry.image.height;

            return (
              <li
                key={entry.image.src}
                className={isWide ? "lg:col-span-7" : "lg:col-span-5"}
              >
                <Reveal step={i}>
                  <Figure
                    image={entry.image}
                    caption={entry.caption}
                    ratio={isWide ? "4 / 3" : "3 / 4"}
                    zoom
                    sizes="(min-width: 1024px) 45vw, (min-width: 640px) 48vw, 90vw"
                  />
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
