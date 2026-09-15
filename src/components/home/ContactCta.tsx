import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contactCta } from "@/content/contact";
import { site } from "@/content/site";

export function ContactCta({ index }: { index?: string }) {
  return (
    <Section
      tone="inverse"
      index={index}
      indexLabel="Contact"
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <Reveal className="max-w-3xl">
          <h2
            id="contact-cta-heading"
            className="text-display-xl text-on-inverse"
          >
            {contactCta.headline}
          </h2>
          <p className="mt-7 max-w-xl text-lede text-on-inverse-muted">
            {contactCta.lede}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Button href="/contact" variant="inverse">
              Contact Abdullah
            </Button>
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="border-b border-line-inverse pb-1 text-sm text-on-inverse transition-colors hover:border-on-inverse"
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
