import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { aboutTeaser, portraitSecondary } from "@/content/profile";

export function AboutTeaser() {
  return (
    <Section aria-labelledby="about-teaser-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Figure
              image={portraitSecondary}
              ratio="4 / 5"
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 90vw"
            />
          </Reveal>

          <div className="lg:col-span-7 lg:pt-6">
            <Reveal>
              <Eyebrow>{aboutTeaser.eyebrow}</Eyebrow>
              <h2
                id="about-teaser-heading"
                className="mt-7 max-w-xl text-display-lg text-ink-900"
              >
                {aboutTeaser.headline}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 flex max-w-xl flex-col gap-5 text-lede text-ink-600">
                {aboutTeaser.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10">
                <Button href={aboutTeaser.cta.href} variant="quiet">
                  {aboutTeaser.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
