import { Award, BookOpen, Star } from "lucide-react";
import type { ReactNode } from "react";

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
            {/* The photograph as a card: all four corners rounded, red corner
                brackets at two corners, his name set into the navy foot, and
                three floating badges with verified facts from his founder
                page. On phones the middle badge is dropped and "20+" moves to
                the top right, as in the mobile reference. All motion is
                `motion-safe:`, so reduced motion gets it still. */}
            <div className="relative mx-auto max-w-md px-3 sm:max-w-none sm:px-0">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--gold)_55%,transparent),transparent)] blur-2xl motion-safe:animate-glow"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-8 -z-10 size-36 rounded-full border-2 border-dashed border-accent-on-inverse/30 motion-safe:animate-spin-slow sm:-right-10 sm:-top-10 sm:size-44"
              />

              <div className="relative">
                {/* Corner brackets, behind the card's top-left and bottom-right. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2 -top-2 -z-10 size-10 rounded-tl-lg border-l-[3px] border-t-[3px] border-emphasis-solid sm:-left-3 sm:-top-3 sm:size-12"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-2 -right-2 -z-10 size-10 rounded-br-lg border-b-[3px] border-r-[3px] border-emphasis-solid sm:-bottom-3 sm:-right-3 sm:size-12"
                />

                <ImageReveal className="rounded-3xl">
                  <Figure
                    image={image}
                    ratio={`${image.width} / ${image.height}`}
                    priority
                    frame="none"
                    className="overflow-hidden rounded-3xl shadow-panel"
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 36vw, 90vw"
                  />
                </ImageReveal>

                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-14 sm:px-5 sm:pb-14 lg:px-8 lg:pb-16">
                  <p className="font-display text-2xl font-bold leading-tight text-white lg:text-3xl">
                    {site.name}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                    {hero.headline}
                  </p>
                </div>
              </div>

              {experience ? (
                <div
                  className="animate-rise absolute -top-3 right-0 sm:-left-4 sm:right-auto sm:top-[6%] lg:-left-8 xl:-left-10"
                  style={{ animationDelay: "520ms" }}
                >
                  <Badge
                    icon={<Star aria-hidden="true" className="size-4" strokeWidth={2} />}
                    tint="bg-[#fde7e3] text-[#ef3e26]"
                    title={`${experience.value} Years`}
                    subtitle="in Education"
                    float="motion-safe:animate-float"
                  />
                </div>
              ) : null}

              <div
                className="animate-rise absolute top-[50%] hidden sm:-right-4 sm:block lg:-right-8 xl:-right-10"
                style={{ animationDelay: "600ms" }}
              >
                <Badge
                  icon={<Award aria-hidden="true" className="size-4" strokeWidth={2} />}
                  tint="bg-[#f6ecd6] text-[#a07a2c]"
                  title="Madinah • Dhaka"
                  subtitle="Int’l Scholar"
                  float="motion-safe:animate-float-mid"
                />
              </div>

              <div
                className="animate-rise absolute -bottom-4 left-0 sm:-left-4 lg:-left-8 xl:-left-10"
                style={{ animationDelay: "680ms" }}
              >
                <Badge
                  icon={<BookOpen aria-hidden="true" className="size-4" strokeWidth={2} />}
                  tint="bg-[#e4eaf6] text-[#244092]"
                  title="Cambridge Scholar"
                  subtitle="Cambridge, UK"
                  float="motion-safe:animate-float-late"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** A floating fact card on the hero photograph. */
function Badge({
  icon,
  tint,
  title,
  subtitle,
  float,
}: {
  icon: ReactNode;
  tint: string;
  title: string;
  subtitle: string;
  float: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 whitespace-nowrap rounded-2xl bg-white px-3 py-2 shadow-panel lg:gap-3 lg:px-4 lg:py-3 ${float}`}
    >
      <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg lg:size-9 ${tint}`}>
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold text-[#1e2a42] lg:text-[0.95rem]">{title}</span>
        <span className="block text-xs text-[#5a6682]">{subtitle}</span>
      </span>
    </div>
  );
}
