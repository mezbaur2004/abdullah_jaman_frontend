import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { contactCta } from "@/content/contact";
import { site } from "@/content/site";

export function ContactCta() {
  return (
    <Section tone="ink" spacing="loose" aria-labelledby="contact-cta-heading">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow tone="paper">{contactCta.eyebrow}</Eyebrow>
          <h2
            id="contact-cta-heading"
            className="mt-8 text-display-xl text-paper"
          >
            {contactCta.headline}
          </h2>
          <p className="mt-7 max-w-xl text-lede text-ink-300">
            {contactCta.lede}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Button href="/contact" variant="inverse">
              Contact Abdullah
            </Button>
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="border-b border-paper/30 pb-1 text-sm text-paper transition-colors duration-300 ease-editorial hover:border-paper"
              >
                {site.email}
              </a>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
