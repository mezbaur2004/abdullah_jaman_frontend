import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { hero, heroPanel, organizations, portrait } from "@/content/profile";
import { site } from "@/content/site";

export function Hero() {
  // A real portrait when one exists; otherwise the abstract panel, which is
  // decorative and claims nothing about who is pictured.
  const image = portrait ?? heroPanel;

  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-10 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:pr-8">
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
              className="animate-rise mt-8 max-w-xl font-display text-display-md text-content-muted"
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

          <div
            className="animate-rise lg:col-span-5"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              {/* An offset rule frames the panel without boxing it in. */}
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 hidden h-2/3 w-2/3 border-b border-r border-line sm:block"
              />
              <Figure
                image={image}
                ratio="4 / 5"
                priority
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 90vw"
                className="relative"
              />
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {organizations.map((organization) => (
                <li
                  key={organization.name}
                  className="text-eyebrow font-medium uppercase text-content-subtle"
                >
                  {organization.shortName ?? organization.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
