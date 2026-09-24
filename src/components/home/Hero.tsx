import { Award, GraduationCap } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { statistics } from "@/content/achievements";
import { hero, heroPhoto } from "@/content/profile";
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
  const image = heroPhoto;
  const experience = statistics.find((s) => s.label.startsWith("Years"));

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
            {/* The photograph with its ambient layer: a breathing glow behind
                it, a slow dashed ring and a dot field at two corners, and two
                floating badges that carry real figures from the content layer.
                All motion is `motion-safe:`, so reduced motion gets it still. */}
            <div className="relative mx-auto max-w-md px-4 sm:max-w-none sm:px-0">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--gold)_55%,transparent),transparent)] blur-2xl motion-safe:animate-glow"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-8 -z-10 size-36 rounded-full border-2 border-dashed border-accent-on-inverse/35 motion-safe:animate-spin-slow sm:-right-10 sm:-top-10 sm:size-44"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -left-2 -z-10 size-28 bg-[radial-gradient(currentColor_1.5px,transparent_1.6px)] [background-size:14px_14px] text-accent-on-inverse/45 sm:-bottom-8 sm:-left-8"
              />

              <ImageReveal>
                <Figure
                  image={image}
                  ratio={`${image.width} / ${image.height}`}
                  priority
                  frame="none"
                  className="overflow-hidden rounded-t-3xl shadow-panel"
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 36vw, 90vw"
                />
              </ImageReveal>

              {experience ? (
                <div
                  className="animate-rise absolute -left-1 top-[5%] sm:top-[16%] sm:-left-8 lg:-left-12"
                  style={{ animationDelay: "520ms" }}
                >
                  <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface-raised/95 px-4 py-3 text-content shadow-panel backdrop-blur motion-safe:animate-float">
                    <span className="flex size-10 items-center justify-center rounded-full bg-emphasis-solid text-white">
                      <GraduationCap aria-hidden="true" className="size-5" strokeWidth={1.75} />
                    </span>
                    <span className="leading-tight">
                      <span className="block font-display text-2xl font-bold text-ink">
                        {experience.value}
                      </span>
                      <span className="block text-xs font-medium text-content-muted">
                        Years in education
                      </span>
                    </span>
                  </div>
                </div>
              ) : null}

              <div
                className="animate-rise absolute -right-1 bottom-[12%] sm:-right-6 lg:-right-10"
                style={{ animationDelay: "680ms" }}
              >
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface-raised/95 px-4 py-3 text-content shadow-panel backdrop-blur motion-safe:animate-float-late">
                  <span className="flex size-10 items-center justify-center rounded-full bg-ink text-white">
                    <Award aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-display text-lg font-bold text-content">
                      Cambridge Scholar
                    </span>
                    <span className="block text-xs font-medium text-content-muted">
                      University of Cambridge, UK
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
