import { Container } from "@/components/layout/Container";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { hero, heroPanel, portrait } from "@/content/profile";
import { site } from "@/content/site";

/**
 * The hero opens on navy, which is the single biggest thing the page does.
 *
 * A personal site whose first screen is the brand colour states what it is
 * before a word of it is read; one that opens on paper waits to be read
 * before it says anything. It also gives the lattice somewhere to be plainly
 * visible at the top of the site rather than halfway down it.
 */
export function Hero() {
  // A real portrait when one exists; otherwise the abstract panel, which is
  // decorative and claims nothing about who is pictured.
  const image = portrait ?? heroPanel;

  return (
    <section className="geo-parallax-host relative isolate overflow-hidden bg-surface-inverse pb-20 pt-14 text-on-inverse sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <span
        aria-hidden="true"
        className="section-veil-inverse pointer-events-none absolute inset-0 -z-10"
      />
      {/* Large, and deliberately cut off. The figure runs past the top and the
          right of the band, so what shows is part of something bigger rather
          than a tile repeating politely inside its box — the section's own
          `overflow-hidden` is what does the cropping. */}
      <GeometricPattern
        intensity="soft"
        size="xl"
        fade="radial"
        parallax
        className="inset-auto -right-24 -top-28 -z-10 h-[150%] w-[78%]"
      />

      <Container>
        <div className="grid items-center gap-12 sm:grid-cols-12 sm:gap-10 lg:gap-16">
          <div className="sm:col-span-7 lg:pr-8">
            <div className="animate-rise">
              <Eyebrow tone="inverse">{hero.eyebrow}</Eyebrow>
            </div>

            <h1
              className="animate-rise mt-7 text-display-2xl text-on-inverse"
              style={{ animationDelay: "80ms" }}
            >
              {site.name}
            </h1>

            <p
              className="animate-rise mt-7 max-w-xl font-display text-display-md font-semibold text-accent-on-inverse"
              style={{ animationDelay: "160ms" }}
            >
              {hero.headline}
            </p>

            <p
              className="animate-rise mt-7 max-w-xl text-lede text-on-inverse-muted"
              style={{ animationDelay: "240ms" }}
            >
              {hero.lede}
            </p>

            <div
              className="animate-rise mt-11 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: "320ms" }}
            >
              <Button href={hero.primaryCta.href} variant="primary" size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondaryInverse"
                size="lg"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* One credential line where three tags used to sit under the
                photograph. Tags made the institutions look like categories the
                page had been filed under; set as a rule under the buttons they
                read as what they are — where the work has been done. */}
            <p
              className="animate-rise mt-10 border-t border-line-inverse pt-6 text-sm leading-relaxed text-on-inverse-muted"
              style={{ animationDelay: "400ms" }}
            >
              {hero.credentials.map((entry, i) => (
                <span key={entry}>
                  {i > 0 ? (
                    <span aria-hidden="true" className="px-2.5 text-accent-on-inverse">
                      &middot;
                    </span>
                  ) : null}
                  {entry}
                </span>
              ))}
            </p>
          </div>

          <div className="sm:col-span-5">
              <ImageReveal>
                {/* Square, with the top corners curved and the bottom left
                    square — the simple shape that replaced the mihrab arch
                    here, once the arch itself was removed. */}
                <Figure
                  image={image}
                  ratio="1 / 1"
                  priority
                  frame="none"
                  className="overflow-hidden rounded-t-3xl"
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 36vw, 90vw"
                />
              </ImageReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
