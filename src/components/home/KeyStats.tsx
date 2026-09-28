import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievementsIntro, statistics } from "@/content/achievements";

/**
 * Renders nothing until verified figures exist. Measurable results are still
 * being collected, and a statistics band is the last place to approximate.
 */
/** Column counts for the strip, as literal classes so Tailwind can see them. */
const stripColumns: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-3 lg:grid-cols-6",
};

export function KeyStats({ index, strip = false }: { index?: string; strip?: boolean }) {
  if (statistics.length === 0) return null;

  // The homepage opens with the figures as a compact band straight under the
  // hero: no heading, no index, just the numbers — the quickest proof the page
  // has, so it goes first rather than seventh.
  if (strip) {
    return (
      <section aria-label="At a glance" className="relative border-b border-line bg-surface-raised">
        <Container>
          <dl className={`grid grid-cols-2 gap-y-6 py-8 sm:divide-x sm:divide-line sm:py-10 ${stripColumns[Math.min(statistics.length, 6)]}`}>
            {statistics.map((statistic) => (
              <div key={statistic.label} className="flex flex-col px-3 text-center sm:px-6">
                <dt className="order-2 mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-content-subtle sm:text-eyebrow">
                  {statistic.label}
                </dt>
                <dd className="font-display text-display-lg leading-none text-ink">
                  <CountUp value={statistic.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    );
  }

  return (
    <Section
      tone="inverse"
      index={index}
      indexLabel="Achievements"
      accent="gold"
      aria-labelledby="key-stats-heading"
    >
      <Container>
        <SectionHeading
          id="key-stats-heading"
          tone="inverse"
          size="feature"
          title={achievementsIntro.headline}
          lede={achievementsIntro.lede}
        />

        <dl
          className={`mt-10 grid gap-x-10 gap-y-10 lg:mt-12 ${statistics.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}
        >
          {statistics.map((statistic, i) => (
            <Reveal
              key={statistic.label}
              step={i}
              className="border-t border-line-inverse pt-6"
            >
              <dt className="sr-only">{statistic.label}</dt>
              <dd>
                <span className="block font-display text-display-xl text-on-inverse">
                  <CountUp value={statistic.value} />
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
