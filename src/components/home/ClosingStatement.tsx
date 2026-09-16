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
      accent="yellow"
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
          <p className="font-display text-display-lg leading-tight text-on-inverse">
            {closingStatement.text}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
