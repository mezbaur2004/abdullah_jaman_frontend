import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { GeometricStar } from "@/components/ui/GeometricStar";
import { Reveal } from "@/components/ui/Reveal";
import { closingStatement } from "@/content/profile";

/**
 * The closing note: large type on the navy band, centred, under the lattice's
 * own eight-point figure.
 *
 * Deliberately NOT typeset as a quotation — no quotation marks, no attribution
 * rule, no name beneath. Nothing he has said is on the record in a verified
 * form, and setting composed words in quote marks under his name would be
 * fabricating a quotation. That is also why the ornament above it is the
 * geometric star rather than the large open-quote the shape of this section
 * invites: a quotation mark is a claim, and it is the one claim this passage
 * must not make. See the note in profile.ts.
 */
export function ClosingStatement({ index }: { index?: string }) {
  return (
    <Section
      tone="inverse"
      index={index}
      indexLabel="Closing"
      accent="gold"
      spacing="loose"
      pattern
      aria-labelledby="closing-heading"
    >
      <Container className="relative">
        <GeometricPattern
          intensity="soft"
          className="-top-16 h-72"
          fade
        />

        <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* The section's own marker already reads "In closing" above this,
              so the heading here is for assistive technology only — a second
              visible eyebrow would just be the same label twice. */}
          <h2 id="closing-heading" className="sr-only">
            {closingStatement.eyebrow}
          </h2>

          <GeometricStar className="size-20 text-accent-on-inverse sm:size-24" />

          <p className="mt-10 font-display text-display-xl leading-[1.14] text-on-inverse">
            {closingStatement.text}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
