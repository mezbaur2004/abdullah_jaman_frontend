import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Figure } from "@/components/ui/Figure";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLink } from "@/components/ui/SectionLink";
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
 *
 * The whole block is one target, photograph included. A section whose picture
 * is inert while the small link under it is the only thing that moves is a
 * section teaching the reader to aim carefully.
 */
export function LeadershipTeaser({ index }: { index?: string }) {
  return (
    <Section
      tone="inverse"
      index={index}
      indexLabel="Leadership"
      accent="gold"
      pattern
      aria-labelledby="leadership-teaser-heading"
    >
      <Container>
        {/* `group/block relative` is the contract the stretched row below
            depends on: the anchor resolves its inset against this element, so
            a click anywhere in the block — heading, lede, picture — goes to
            the leadership page, and the hover fires from anywhere in it.
            Nothing else inside this element may be a link, because a stretched
            anchor lies over everything in its positioning ancestor. That is
            why Achievements sits outside it rather than in it. */}
        <div className="group/block relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-5">
              <SectionHeading
                id="leadership-teaser-heading"
                title={leadershipTeaser.headline}
                lede={leadershipTeaser.body}
                tone="inverse"
                accent="gold"
              />
            </div>

            {/* The photograph runs past the grid's right edge and tucks under
                the text column on the left, so the two halves interlock
                instead of sitting side by side in equal boxes. The overhang is
                contained by the section's own `overflow-hidden`, so nothing
                widens the page. */}
            <div className="lg:col-span-7 lg:-mr-6 lg:pl-8">
              <ImageReveal className="rounded-figure">
                {/* 4:3 against a 3:2 source, so roughly an eighth of the
                    width is cropped and the asset's own `position` decides
                    which side loses it. Without a ratio narrower than the
                    source there is no overflow to position, the picture is
                    drawn whole, and the band of red curtain at the left edge
                    stays exactly where it was. */}
                <Figure
                  image={leadershipTeaser.image}
                  ratio="4 / 3"
                  rounded
                  elevated
                  zoom
                  frame="inverse"
                  sizes="(min-width: 1024px) 58vw, 90vw"
                />
              </ImageReveal>
            </div>
          </div>

          <SectionLink
            href={leadershipTeaser.cta.href}
            tone="inverse"
            stretch
            className="mt-14 lg:mt-16"
          >
            {leadershipTeaser.cta.label}
          </SectionLink>
        </div>

        {/* Achievements, which the homepage never linked to at all — it lived
            in the footer and nowhere else. It rides with leadership rather
            than taking a section of its own: it is the same story told twice,
            once as the work and once as what the work was recognised for, and
            a whole band for a page still largely outstanding would be a
            heading with an apology under it. */}
        <SectionLink href="/achievements" tone="inverse" className="mt-4">
          Achievements
        </SectionLink>
      </Container>
    </Section>
  );
}
