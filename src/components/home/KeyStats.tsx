import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievementsIntro, statistics } from "@/content/achievements";

/**
 * Renders nothing until verified figures exist. Measurable results are still
 * being collected, and a statistics band is the last place to approximate.
 */
export function KeyStats({ index }: { index?: string }) {
  if (statistics.length === 0) return null;

  return (
    <Section
      tone="inverse"
      index={index}
      indexLabel="Achievements"
      accent="blue"
      aria-labelledby="key-stats-heading"
    >
      <Container>
        <SectionHeading
          id="key-stats-heading"
          tone="inverse"
          title={achievementsIntro.headline}
          lede={achievementsIntro.lede}
        />

        <dl className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {statistics.map((statistic, i) => (
            <Reveal
              key={statistic.label}
              step={i}
              className="border-t border-line-inverse pt-6"
            >
              <dt className="sr-only">{statistic.label}</dt>
              <dd>
                <span className="block font-display text-display-xl text-on-inverse">
                  {statistic.value}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-3 block text-sm font-medium text-accent-on-inverse"
                >
                  {statistic.label}
                </span>
                {statistic.detail ? (
                  <span className="mt-3 block text-sm leading-relaxed text-on-inverse-muted">
                    {statistic.detail}
                  </span>
                ) : null}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
