import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPage, aboutTeaser } from "@/content/profile";

export function AboutTeaser({ index }: { index?: string }) {
  return (
    <Section
      tone="soft"
      index={index}
      indexLabel="About"
      aria-labelledby="about-teaser-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
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
              <Card padding="lg">
                <dl className="flex flex-col">
                  {aboutPage.facts.map((fact, i) => (
                    <div
                      key={fact.label}
                      className={
                        i === 0
                          ? "pb-5"
                          : "border-t border-line py-5 last:pb-0"
                      }
                    >
                      <dt className="text-eyebrow font-medium uppercase text-content-subtle">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-content">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
