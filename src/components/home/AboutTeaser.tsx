import { Container } from "@/components/layout/Container";
import { emphasise } from "@/lib/emphasis";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { Section } from "@/components/layout/Section";
import { SectionLink } from "@/components/ui/SectionLink";
import { Reveal } from "@/components/ui/Reveal";
import { aboutTeaser } from "@/content/profile";

/**
 * The philosophy passage — the one section on the homepage that is an argument
 * rather than a summary, so it is the one that gets the larger type.
 */
export function AboutTeaser({ index }: { index?: string }) {
  return (
    <Section
      tone="soft"
      index={index}
      indexLabel="Philosophy"
      accent="gold"
      separator="quiet"
      aria-labelledby="about-teaser-heading"
    >
      <Container className="relative">
        <GeometricPattern className="-top-12 h-64" fade />

        {/* Heading and argument side by side. The "In brief" facts panel that
            used to sit here repeated the hero and the institutions above it,
            so it now lives only on the About page. */}
        <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2
                id="about-teaser-heading"
                className="max-w-2xl text-display-xl text-content"
              >
                {emphasise(aboutTeaser.headline)}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-3">
            <Reveal step={1}>
              <div className="flex max-w-xl flex-col gap-5 text-lede text-content-muted">
                {aboutTeaser.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10 block">
              <SectionLink href={aboutTeaser.cta.href}>
                {aboutTeaser.cta.label}
              </SectionLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
