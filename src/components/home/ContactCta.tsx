import { Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { IconChip } from "@/components/ui/IconChip";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { contactCta } from "@/content/contact";
import { site } from "@/content/site";

/**
 * The invitation that closes every page.
 *
 * It used to be a full navy band, and that was wrong in two places at once: on
 * the homepage it followed the navy closing statement, and on every page
 * without exception it ran straight into the navy footer — so the last thing a
 * reader saw was one undifferentiated dark block, three sections deep, with
 * the boundaries between them invisible.
 *
 * Now it is a light band holding a raised surface. The page steps up into it
 * rather than down, the footer reads as a separate plane again, and the
 * invitation looks like something to act on instead of more page.
 */
export function ContactCta({ index }: { index?: string }) {
  return (
    <Section
      tone="accent"
      index={index}
      indexLabel="Contact"
      accent="yellow"
      separator="editorial"
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <Reveal>
          <Panel pattern>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="max-w-2xl">
                <IconChip icon={Mail} />
                <h2
                  id="contact-cta-heading"
                  className="mt-8 text-display-lg text-content"
                >
                  {contactCta.headline}
                </h2>
                <p className="mt-6 max-w-xl text-lede text-content-muted">
                  {contactCta.lede}
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start">
                <Button href="/contact">Contact Abdullah</Button>
                {site.email ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="border-b border-line-accent pb-1 text-sm text-accent transition-colors hover:border-accent"
                  >
                    {site.email}
                  </a>
                ) : null}
              </div>
            </div>
          </Panel>
        </Reveal>
      </Container>
    </Section>
  );
}
