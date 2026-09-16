import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { leadershipTeaser } from "@/content/leadership";

/**
 * Routes to the leadership page rather than trying to summarise it. The
 * photograph is the teacher-training session, which says more about how he
 * works than a paragraph of the same length would.
 */
export function LeadershipTeaser({ index }: { index?: string }) {
  return (
    <Section
      index={index}
      indexLabel="Leadership"
      accent="blue"
      aria-labelledby="leadership-teaser-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="leadership-teaser-heading"
              title={leadershipTeaser.headline}
              lede={leadershipTeaser.body}
              accent="blue"
            />
            <Reveal step={1}>
              <div className="mt-10">
                <Button href={leadershipTeaser.cta.href} variant="secondary">
                  {leadershipTeaser.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal step={1}>
              <Figure
                image={leadershipTeaser.image}
                sizes="(min-width: 1024px) 55vw, 90vw"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
