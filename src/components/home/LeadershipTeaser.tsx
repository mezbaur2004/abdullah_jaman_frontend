import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { OffsetFrame } from "@/components/ui/OffsetFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { leadershipTeaser } from "@/content/leadership";

/**
 * Routes to the leadership page rather than trying to summarise it. The
 * photograph is the teacher-training session, which says more about how he
 * works than a paragraph of the same length would.
 *
 * This is the homepage's first dark band, and it sits between the two ivory
 * passages — philosophy above, books below — so the page reads warm, dark,
 * warm rather than as a run of pale sections with rules between them. Navy is
 * also simply the right ground for the subject: institutional authority is
 * what the section is about.
 */
export function LeadershipTeaser({ index }: { index?: string }) {
  return (
    <Section
      tone="inverse"
      index={index}
      indexLabel="Leadership"
      accent="yellow"
      pattern
      aria-labelledby="leadership-teaser-heading"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="leadership-teaser-heading"
              title={leadershipTeaser.headline}
              lede={leadershipTeaser.body}
              tone="inverse"
              accent="yellow"
            />
            <Reveal step={1}>
              <div className="mt-10">
                <Button href={leadershipTeaser.cta.href} variant="inverse">
                  {leadershipTeaser.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* The photograph runs past the grid's right edge and tucks under the
              text column on the left, so the two halves interlock instead of
              sitting side by side in equal boxes. The overhang is contained by
              the section's own `overflow-hidden`, so nothing widens the page. */}
          <div className="lg:col-span-7 lg:-mr-6 lg:pl-8">
            <OffsetFrame tone="inverse">
              <ImageReveal className="rounded-[0.75rem]">
                <Figure
                  image={leadershipTeaser.image}
                  rounded
                  elevated
                  frame="inverse"
                  sizes="(min-width: 1024px) 58vw, 90vw"
                />
              </ImageReveal>
            </OffsetFrame>
          </div>
        </div>
      </Container>
    </Section>
  );
}
