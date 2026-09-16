import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contactCta } from "@/content/contact";
import { emphasise } from "@/lib/emphasis";
import { site } from "@/content/site";

/**
 * The invitation that closes every page, and the one band on the site that is
 * the accent at full strength.
 *
 * It was a raised white card on a pale ground — a correct enough object, and
 * one that read as a widget the page had placed rather than as the page
 * speaking. Full width in brass with navy type it is unmissable, it is the
 * only place the accent ever fills anything, and it puts a warm band between
 * the navy above it and the navy footer below.
 *
 * The envelope icon is gone. An icon that restates the heading beside it is an
 * icon doing nothing.
 */
export function ContactCta({ index }: { index?: string }) {
  return (
    <Section
      tone="gold"
      index={index}
      indexLabel="Contact"
      accent="gold"
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            {/* The emphasised word stays full navy here and leans on the
                italic alone. Brass is the accent everywhere else on the site;
                on a brass ground there is nothing to change to, and dropping
                its opacity instead just made one word look faded. */}
            <h2
              id="contact-cta-heading"
              className="text-display-xl text-on-gold [&_em]:text-on-gold lg:col-span-7"
            >
              {emphasise(contactCta.headline)}
            </h2>

            <div className="flex flex-col items-start gap-8 lg:col-span-5 lg:pb-3">
              <p className="max-w-md text-lede text-on-gold-muted">
                {contactCta.lede}
              </p>

              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Button href="/contact" variant="onGold" size="lg">
                  Contact Abdullah
                </Button>
                {site.email ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="border-b-2 border-on-gold/40 pb-1 text-ui text-on-gold transition-colors hover:border-on-gold"
                  >
                    {site.email}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
