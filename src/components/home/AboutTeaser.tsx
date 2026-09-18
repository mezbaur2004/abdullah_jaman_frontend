import { Container } from "@/components/layout/Container";
import { emphasise } from "@/lib/emphasis";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { Section } from "@/components/layout/Section";
import { SectionLink } from "@/components/ui/SectionLink";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPage, aboutTeaser } from "@/content/profile";

/**
 * The philosophy passage — the one section on the homepage that is an argument
 * rather than a summary, so it is the one that gets the larger type.
 *
 * The two columns are deliberately out of register: the facts sit a long way
 * below the top of the prose rather than level with it. Two columns starting
 * on the same line read as a table of contents; offset, the page reads as
 * something written, with a note set into the margin beside it.
 */
export function AboutTeaser({ index }: { index?: string }) {
  return (
    <Section
      tone="ivory"
      index={index}
      indexLabel="Philosophy"
      accent="gold"
      separator="quiet"
      aria-labelledby="about-teaser-heading"
    >
      <Container className="relative">
        <GeometricPattern className="-top-12 h-64" fade />

        <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h2
                id="about-teaser-heading"
                className="max-w-2xl text-display-xl text-content"
              >
                {emphasise(aboutTeaser.headline)}
              </h2>
            </Reveal>

            <Reveal step={1}>
              <div className="mt-9 flex max-w-xl flex-col gap-5 text-lede text-content-muted">
                {aboutTeaser.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-14">
            <Reveal step={1}>
              <Panel padding="md">
                <p className="text-eyebrow font-semibold uppercase text-content-subtle">
                  In brief
                </p>
                <dl className="mt-7 flex flex-col">
                  {aboutPage.facts.map((fact, i) => (
                    <div
                      key={fact.label}
                      className={
                        i === 0 ? "pb-5" : "border-t border-line py-5 last:pb-0"
                      }
                    >
                      <dt className="text-eyebrow font-semibold uppercase text-content-subtle">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-content">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Panel>
            </Reveal>
          </div>
        </div>

        {/* The doorway. It used to be a small arrow link under the prose,
            identical to the five others on the page; a full-width rule with
            the destination set at heading size is the section actually
            ending in a way out rather than trailing off into a footnote. */}
        <Reveal className="relative mt-16 block lg:mt-20">
          <SectionLink href={aboutTeaser.cta.href}>
            {aboutTeaser.cta.label}
          </SectionLink>
        </Reveal>
      </Container>
    </Section>
  );
}
