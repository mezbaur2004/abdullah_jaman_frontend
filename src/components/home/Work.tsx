import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { initiatives } from "@/content/experience";

export function Work() {
  return (
    <Section aria-labelledby="work-heading">
      <Container>
        <SectionHeading
          id="work-heading"
          eyebrow="Professional work"
          title="Initiatives, and what they were built to fix."
          lede="Each of these started as a problem somebody was living with — an unteachable syllabus, a teacher left to sink, a standard nobody could enforce."
          aside={
            <Button href="/experience" variant="quiet">
              Full experience
            </Button>
          }
        />

        <ol className="mt-16 border-t border-ink-900/10 lg:mt-20">
          {initiatives.map((initiative, index) => (
            <li key={initiative.slug} className="border-b border-ink-900/10">
              <Reveal>
                <article className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
                  <div className="lg:col-span-3">
                    <span
                      aria-hidden="true"
                      className="font-display text-sm text-brass-500"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-eyebrow font-medium uppercase text-ink-500">
                      {initiative.category}
                    </p>
                  </div>

                  <div className="lg:col-span-6">
                    <h3 className="text-display-md text-ink-900">
                      {initiative.title}
                    </h3>
                    <p className="mt-4 max-w-xl leading-relaxed text-ink-600">
                      {initiative.summary}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2.5 lg:col-span-3">
                    {initiative.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex gap-3 text-sm leading-relaxed text-ink-500"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-3 shrink-0 bg-brass-400"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
