import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, organizations } from "@/content/profile";

/**
 * The institutions, and the qualifications underneath them.
 *
 * Both cards are identical in structure and both link out, which they could
 * not do until the Guidance address was supplied — one card lifting with an
 * arrow beside one that did neither made a pair of equals look like a
 * principal and an also-ran.
 *
 * The monogram replaces a building icon. A generic glyph from an icon set says
 * "this is an organisation", which the reader already knows from the name
 * underneath it; the institution's own initials in the display face say which
 * organisation, and at that size they are a graphic rather than a label.
 */
export function Credibility({ index }: { index?: string }) {
  if (organizations.length === 0) return null;

  return (
    <Section
      tone="ivory"
      index={index}
      indexLabel="Institutions"
      accent="gold"
      aria-labelledby="credibility-heading"
    >
      <Container>
        <SectionHeading
          id="credibility-heading"
          title="Where he *leads*."
          lede="The institutions he leads, in Dhaka, Bangladesh."
          accent="gold"
        />

        <ul className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {organizations.map((organization, i) => (
            <li key={organization.name}>
              <Reveal step={i} className="h-full">
                <Card
                  as="article"
                  padding="lg"
                  hover={organization.href ? "lift" : "quiet"}
                  accent="gold"
                  accentEdge="bottom"
                  className="flex h-full flex-col"
                  backdrop={
                    organization.shortName ? (
                      <span
                        aria-hidden="true"
                        // Bottom right, where the card is empty. Behind the
                        // heading it was a watermark competing with the one
                        // thing the card exists to say.
                        style={
                          {
                            "--monogram": `"${organization.shortName}"`,
                          } as CSSProperties
                        }
                        className="card-monogram absolute -bottom-7 -right-4 select-none font-display text-[9rem] font-semibold leading-none tracking-tight text-accent-solid/[0.10] transition-[color,transform] duration-500 ease-editorial group-hover/card:-translate-y-1 group-hover/card:text-accent-solid/[0.16]"
                      />
                    ) : null
                  }
                >
                  <h3 className="max-w-[16ch] font-display text-display-md text-content">
                    {organization.href ? (
                      <a
                        href={organization.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Stretched over the card, so the whole surface is the
                        // click target the hover has been promising.
                        className="inline-flex items-start gap-2.5 transition-colors after:absolute after:inset-0 after:content-[''] group-hover/card:text-accent"
                      >
                        {organization.name}
                        <ArrowUpRight
                          aria-hidden="true"
                          strokeWidth={1.75}
                          className="mt-2 size-6 shrink-0 text-accent transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      organization.name
                    )}
                  </h3>

                  <p className="mt-5 text-ui font-medium uppercase tracking-[0.12em] text-accent">
                    {organization.role}
                  </p>

                  {organization.location ? (
                    <p className="mt-auto pt-10 text-sm text-content-subtle">
                      {organization.location}
                    </p>
                  ) : null}
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>

        {education.length > 0 ? (
          <div className="mt-16 lg:mt-20">
            <Reveal>
              <h3 className="text-eyebrow font-semibold uppercase text-accent">
                <span
                  aria-hidden="true"
                  className="mr-3 inline-block h-0.5 w-10 align-middle bg-accent-solid"
                />
                Education
              </h3>
            </Reveal>

            {/* A ledger, not a boxed list. The qualifications are the spine of
                the page's claim to authority, and a card with an icon in the
                corner filed them as one more item; ruled and marked they read
                as a record. */}
            <ol className="mt-10 border-l border-line pl-8 sm:pl-10">
              {education.map((entry, i) => {
                // Cambridge is the entry a reader scans this list for, so it
                // is the one the list marks. Nothing else about it changes.
                const marked = entry.institution.includes("Cambridge");

                return (
                  <li
                    key={`${entry.institution}-${entry.qualification ?? ""}`}
                    className="group/row relative pb-9 last:pb-0"
                  >
                    <Reveal step={i}>
                      <span
                        aria-hidden="true"
                        className={
                          marked
                            ? "absolute -left-[2.3rem] top-2 size-[11px] rotate-45 bg-accent-solid sm:-left-[2.8rem]"
                            : "absolute -left-[2.15rem] top-[0.6rem] size-[7px] rotate-45 border border-accent-solid bg-surface-ivory sm:-left-[2.65rem]"
                        }
                      />
                      <p
                        className={
                          marked
                            ? "font-display text-2xl leading-snug text-content"
                            : "font-display text-xl leading-snug text-content"
                        }
                      >
                        {entry.qualification ?? entry.institution}
                        {entry.field ? (
                          <span className="text-content-muted">
                            {" "}
                            — {entry.field}
                          </span>
                        ) : null}
                      </p>
                      {entry.qualification ? (
                        <p
                          className={
                            marked
                              ? "mt-2 text-ui text-accent"
                              : "mt-2 text-sm leading-relaxed text-content-subtle"
                          }
                        >
                          {entry.institution}
                        </p>
                      ) : null}
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
