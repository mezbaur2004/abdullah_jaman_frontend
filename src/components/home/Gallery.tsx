import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/content/gallery";

/**
 * Optional by design: empty the `gallery` array in the content layer and the
 * section removes itself rather than leaving a hole in the page.
 */
export function Gallery() {
  if (gallery.length === 0) return null;

  return (
    <Section tone="soft" aria-labelledby="gallery-heading">
      <Container>
        <SectionHeading
          id="gallery-heading"
          eyebrow="In practice"
          title="On the ground."
          lede="Faculty sessions, classroom observation and the conversations that decide how a school actually runs."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {gallery.map((entry, index) => {
            // A deliberately uneven rhythm: two wide plates, two tall ones.
            const isWide = entry.image.width >= entry.image.height;

            return (
              <li
                key={entry.image.src}
                className={isWide ? "lg:col-span-7" : "lg:col-span-5"}
              >
                <Reveal delay={index * 0.05}>
                  <Figure
                    image={entry.image}
                    caption={entry.caption}
                    ratio={isWide ? "4 / 3" : "3 / 4"}
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
