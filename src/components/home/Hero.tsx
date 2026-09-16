import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { hero, heroPanel, organizations, portrait } from "@/content/profile";
import { site } from "@/content/site";

export function Hero() {
  // A real portrait when one exists; otherwise the abstract panel, which is
  // decorative and claims nothing about who is pictured.
  const image = portrait ?? heroPanel;

  return (
    <section className="relative isolate overflow-hidden bg-surface pb-20 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      {/* The two ground layers. The wash gives the opening a near and a far
          side so it is not a white rectangle; the khatam tile enters from the
          top right, behind the portrait, at the opacity where it registers as
          texture rather than as pattern. */}
      <span
        aria-hidden="true"
        className="section-veil pointer-events-none absolute inset-0 -z-10"
      />
      <GeometricPattern
        fade="radial"
        className="inset-auto right-0 top-0 -z-10 h-[62%] w-[58%]"
      />

      <Container>
        <div className="grid items-center gap-12 sm:grid-cols-12 sm:gap-10 lg:gap-16">
          <div className="sm:col-span-7 lg:pr-8">
            <div className="animate-rise">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>

            <h1
              className="animate-rise mt-7 text-display-2xl text-content"
              style={{ animationDelay: "80ms" }}
            >
              {site.name}
            </h1>

            <p
              className="animate-rise mt-7 max-w-xl font-display text-display-md text-accent"
              style={{ animationDelay: "160ms" }}
            >
              {hero.headline}
            </p>

            <p
              className="animate-rise mt-7 max-w-xl text-lede text-content-muted"
              style={{ animationDelay: "240ms" }}
            >
              {hero.lede}
            </p>

            <div
              className="animate-rise mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: "320ms" }}
            >
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="sm:col-span-5">
            <OffsetFrame>
              <ImageReveal className="rounded-figure">
                <Figure
                  image={image}
                  ratio="4 / 5"
                  priority
                  rounded
                  elevated
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 36vw, 90vw"
                />
              </ImageReveal>
            </OffsetFrame>

            {/* The institutions as tags. Named, not counted. */}
            <ul className="mt-10 flex flex-wrap items-center gap-2.5 lg:mt-11">
              {organizations.map((organization) => (
                <li key={organization.name}>
                  <span
                    className="inline-flex items-center rounded-chip border border-line bg-surface-raised px-3 py-1.5 text-eyebrow font-semibold uppercase text-content-muted"
                    title={organization.name}
                  >
                    {organization.shortName ?? organization.name}
                  </span>
                </li>
              ))}
              <li>
                <span className="inline-flex items-center rounded-chip border border-line-accent bg-accent-soft px-3 py-1.5 text-eyebrow font-semibold uppercase text-accent">
                  {site.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
