import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ListRow } from "@/components/ui/ListRow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards } from "@/content/achievements";

/** Hidden until awards are verified. */
export function Awards({ index }: { index?: string }) {
  if (awards.length === 0) return null;

  return (
    <Section
      tone="soft"
      index={index}
      indexLabel="Recognition"
      aria-labelledby="awards-heading"
    >
      <Container>
        <SectionHeading
          id="awards-heading"
          title="Awards and honours."
          aside={
            <Button href="/achievements" variant="quiet">
              All achievements
            </Button>
          }
        />

        <ul className="mt-14 border-t border-line lg:mt-16">
          {awards.map((award, i) => (
            <ListRow key={award.title}>
              <Reveal step={i}>
                <div className="grid gap-3 py-7 pl-5 transition-[padding] group-hover/row:pl-7 sm:grid-cols-12 sm:items-baseline sm:gap-8">
                  <span className="font-display text-lg text-accent-warm sm:col-span-2">
                    {award.year}
                  </span>
                  <div className="sm:col-span-6">
                    <h3 className="font-display text-xl leading-snug text-content">
                      {award.title}
                    </h3>
                    {award.description ? (
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-content-subtle">
                        {award.description}
                      </p>
                    ) : null}
                  </div>
                  <p className="text-sm text-content-subtle transition-colors group-hover/row:text-content-muted sm:col-span-4 sm:text-right">
                    {award.issuer}
                  </p>
                </div>
              </Reveal>
            </ListRow>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
