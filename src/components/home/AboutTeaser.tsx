import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPage, aboutTeaser } from "@/content/profile";

export function AboutTeaser({ index }: { index?: string }) {
  return (
    <Section index={index} indexLabel="About" aria-labelledby="about-teaser-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <h2
                id="about-teaser-heading"
                className="max-w-xl text-display-lg text-content"
              >
                {aboutTeaser.headline}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 flex max-w-xl flex-col gap-5 text-lede text-content-muted">
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

          <div className="lg:col-span-5">
            <Reveal delay={0.06}>
              <dl className="border-t border-line">
                {aboutPage.facts.map((fact) => (
                  <div key={fact.label} className="border-b border-line py-5">
                    <dt className="text-eyebrow font-medium uppercase text-content-subtle">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-content">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
