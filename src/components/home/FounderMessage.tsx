import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLink } from "@/components/ui/SectionLink";
import { founderMessage } from "@/content/profile";
import { site } from "@/content/site";
import { withHonorifics } from "@/lib/honorific";

/**
 * The message, opened as his founder page opens it: the basmalah, then the
 * passage he leads with, set as a quotation because it is one — his own words,
 * supplied by the owner. The rest of the message lives on the About page.
 */
export function FounderMessage({ index }: { index?: string }) {
  return (
    <Section
      tone="inverse"
      index={index}
      indexLabel={founderMessage.eyebrow}
      accent="gold"
      pattern
      aria-labelledby="founder-message-heading"
    >
      <Container className="relative">
        <GeometricPattern intensity="soft" className="-top-16 h-72" fade />

        <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 id="founder-message-heading" className="sr-only">
            Message from {site.name}
          </h2>

          <p
            lang="ar"
            dir="rtl"
            className="font-arabic text-4xl leading-relaxed text-accent-on-inverse sm:text-5xl"
          >
            {founderMessage.basmalah}
          </p>
          <p className="mt-3 text-eyebrow font-semibold uppercase text-on-inverse-muted">
            {founderMessage.basmalahTranslation}
          </p>

          <figure className="mt-12">
            <blockquote className="font-display text-display-md font-semibold italic text-on-inverse">
              <p>&ldquo;{withHonorifics(founderMessage.lead)}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-accent-on-inverse">
              {site.name}
            </figcaption>
          </figure>

          <div className="mt-12 w-full sm:w-auto">
            <SectionLink href={founderMessage.cta.href} tone="inverse">
              {founderMessage.cta.label}
            </SectionLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
