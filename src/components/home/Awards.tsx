import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards } from "@/content/achievements";

export function Awards() {
  return (
    <Section tone="soft" aria-labelledby="awards-heading">
      <Container>
        <SectionHeading
          id="awards-heading"
          eyebrow="Recognition"
          title="Awards and honours."
          aside={
            <Button href="/achievements" variant="quiet">
              All achievements
            </Button>
          }
        />

        <ul className="mt-14 border-t border-ink-900/10 lg:mt-16">
          {awards.map((award, index) => (
            <li key={award.title} className="border-b border-ink-900/10">
              <Reveal delay={index * 0.04}>
                <div className="grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                  <span className="font-display text-lg text-brass-600 sm:col-span-2">
                    {award.year}
                  </span>
                  <div className="sm:col-span-6">
                    <h3 className="font-display text-xl leading-snug text-ink-900">
                      {award.title}
                    </h3>
                    {award.description ? (
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500">
                        {award.description}
                      </p>
                    ) : null}
                  </div>
                  <p className="text-sm text-ink-500 sm:col-span-4 sm:text-right">
                    {award.issuer}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
