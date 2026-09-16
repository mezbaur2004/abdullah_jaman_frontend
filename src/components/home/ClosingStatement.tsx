import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { Reveal } from "@/components/ui/Reveal";
import { closingStatement } from "@/content/profile";

/**
 * The closing note: large type on the navy band, with the geometric layer
 * behind it.
 *
 * Deliberately NOT typeset as a quotation — no quotation marks, no attribution
 * rule, no name beneath. Nothing he has said is on the record in a verified
 * form, and setting composed words in quote marks under his name would be
 * fabricating a quotation. Rendered this way it reads as the site's statement
 * of his position, which is exactly what it is. See the note in profile.ts.
 */
export function ClosingStatement({ index }: { index?: string }) {
  return (
    <Section
      tone="inverse"
      index={index}
      indexLabel="Closing"
      accent="gold"
      spacing="loose"
      aria-labelledby="closing-heading"
    >
      <Container className="relative">
        <GeometricPattern intensity="soft" className="-top-16 h-72" fade />

        <Reveal className="relative max-w-4xl">
          {/* The section's own marker already reads "In closing" above this,
              so the heading here is for assistive technology only — a second
              visible eyebrow would just be the same label twice. */}
          <h2 id="closing-heading" className="sr-only">
            {closingStatement.eyebrow}
          </h2>
          {/* Two tones under the statement, on the same axis as the section
              marker above it, so the band closes the way every other boundary
              on the site opens. */}
          <span aria-hidden="true" className="mb-10 flex items-center gap-2">
            <span className="block h-0.5 w-12 bg-accent-on-inverse" />
            <span className="block h-0.5 w-4 bg-gold opacity-80" />
          </span>
          <p className="font-display text-display-xl leading-[1.12] text-on-inverse">
            {closingStatement.text}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
