import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { achievementsIntro, statistics } from "@/content/achievements";

export function KeyStats() {
  return (
    <Section tone="ink" aria-labelledby="key-stats-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="paper">{achievementsIntro.eyebrow}</Eyebrow>
            <h2
              id="key-stats-heading"
              className="mt-7 text-display-lg text-paper"
            >
              {achievementsIntro.headline}
            </h2>
            <p className="mt-6 text-lede text-ink-300">
              {achievementsIntro.lede}
            </p>
          </Reveal>
        </div>

        <dl className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {statistics.map((statistic, index) => (
            <Reveal
              key={statistic.label}
              delay={index * 0.06}
              className="border-t border-paper/15 pt-6"
            >
              <dt className="sr-only">{statistic.label}</dt>
              <dd>
                <span className="block font-display text-display-xl text-paper">
                  {statistic.value}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-3 block text-sm font-medium text-brass-300"
                >
                  {statistic.label}
                </span>
                {statistic.detail ? (
                  <span className="mt-3 block text-sm leading-relaxed text-ink-400">
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
