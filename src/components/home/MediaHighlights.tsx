import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MediaEntry } from "@/components/media/MediaEntry";
import { SectionLink } from "@/components/ui/SectionLink";
import { Figure } from "@/components/ui/Figure";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaFeature, mediaIntro, mediaItems } from "@/content/media";

/**
 * The lead item is the photograph, with its headline set into it.
 *
 * A press section whose first item is a bordered card containing a line of
 * text is a list of links; the same item as an image with the outlet in brass
 * and the headline in ivory across the bottom of it is the front page of a
 * section. The picture was already on the site — it opens the media page —
 * and it is the only frame that shows him being interviewed.
 *
 * The scrim is not a decorative gradient. It is what makes the type legible
 * over a photograph whose brightness nobody controls, so it runs to a near
 * solid navy under the text rather than fading out politely.
 */
export function MediaHighlights({ index }: { index?: string }) {
  const highlights = mediaItems.slice(0, 3);

  if (highlights.length === 0) return null;

  const [lead, ...rest] = highlights;

  return (
    <Section
      index={index}
      indexLabel="Media"
      accent="red"
      aria-labelledby="media-heading"
    >
      <Container>
        <SectionHeading
          id="media-heading"
          title={mediaIntro.headline}
          lede={mediaIntro.lede}
          accent="red"
        />

        <Reveal className="mt-14 lg:mt-16">
          <article className="group/card relative isolate overflow-hidden rounded-card bg-scrim">
            <ImageReveal>
              <Figure
                image={mediaFeature}
                ratio="16 / 9"
                frame="none"
                zoom
                sizes="(min-width: 1280px) 1152px, (min-width: 640px) 92vw, 90vw"
              />
            </ImageReveal>

            <span
              aria-hidden="true"
              className="scrim-bottom pointer-events-none absolute inset-0"
            />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-12">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-eyebrow font-semibold uppercase text-accent-on-inverse">
                {lead.outlet}
                <span aria-hidden="true" className="opacity-50">
                  /
                </span>
                {lead.type}
                {lead.date ? (
                  <>
                    <span aria-hidden="true" className="opacity-50">
                      /
                    </span>
                    {lead.date}
                  </>
                ) : null}
              </p>

              <h3 className="mt-4 max-w-3xl font-display text-display-md text-on-inverse sm:mt-5">
                {lead.href ? (
                  <a
                    href={lead.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-3 transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent-on-inverse"
                  >
                    {lead.title}
                    <ArrowUpRight
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="mt-1.5 size-6 shrink-0 text-accent-on-inverse transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 sm:mt-2.5"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  lead.title
                )}
              </h3>
            </div>
          </article>
        </Reveal>

        {rest.length > 0 ? (
          <ul className="mt-5 grid gap-5 lg:mt-6">
            {rest.map((item, i) => (
              <li key={item.title}>
                <Reveal step={i}>
                  <MediaEntry item={item} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : null}

        {/* The lead item above is already one target, photograph and all, and
            it goes to the article itself — which is the more valuable door.
            This is the other one: the section's way through to the rest of
            the press, in the same row style every section on the page ends
            in. */}
        <Reveal className="mt-14 block lg:mt-16">
          <SectionLink href="/media">
            {mediaItems.length > highlights.length ? "All media" : "Media & press"}
          </SectionLink>
        </Reveal>
      </Container>
    </Section>
  );
}
