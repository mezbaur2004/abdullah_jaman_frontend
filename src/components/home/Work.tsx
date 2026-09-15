import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ListRow } from "@/components/ui/ListRow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { initiatives } from "@/content/experience";

/** Hidden until initiatives are confirmed. */
export function Work({ index }: { index?: string }) {
  if (initiatives.length === 0) return null;

  return (
    <Section index={index} indexLabel="Work" aria-labelledby="work-heading">
      <Container>
        <SectionHeading
          id="work-heading"
          title="Initiatives and programmes."
          aside={
            <Button href="/experience" variant="quiet">
              Full experience
            </Button>
          }
        />

        <ol className="mt-16 border-t border-line lg:mt-20">
          {initiatives.map((initiative, i) => (
            <ListRow key={initiative.slug}>
              <Reveal>
                <article className="grid gap-6 py-10 pl-5 transition-[padding] group-hover/row:pl-7 lg:grid-cols-12 lg:gap-12 lg:py-14">
                  <div className="lg:col-span-3">
                    <span
                      aria-hidden="true"
                      className="font-display text-sm text-accent-warm"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-eyebrow font-medium uppercase text-content-subtle">
                      {initiative.category}
                    </p>
                  </div>

                  <div className="lg:col-span-6">
                    <h3 className="text-display-md text-content transition-colors group-hover/row:text-accent">
                      {initiative.title}
                    </h3>
                    <p className="mt-4 max-w-xl leading-relaxed text-content-muted">
                      {initiative.summary}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2.5 lg:col-span-3">
                    {initiative.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex gap-3 text-sm leading-relaxed text-content-subtle"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-3 shrink-0 bg-accent"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </ListRow>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
