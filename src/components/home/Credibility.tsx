import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { organizations } from "@/content/profile";

export function Credibility() {
  return (
    <Section tone="soft" spacing="tight" aria-labelledby="credibility-heading">
      <Container>
        <Eyebrow id="credibility-heading">Currently</Eyebrow>

        <ul className="mt-10 grid gap-px border-t border-ink-900/10 sm:grid-cols-3">
          {organizations.map((organization, index) => (
            <li
              key={organization.name}
              className="border-b border-ink-900/10 py-8 sm:border-b-0 sm:py-0 sm:pr-8 sm:pt-8"
            >
              <Reveal delay={index * 0.07}>
                <p className="font-display text-xl leading-snug text-ink-900">
                  {organization.name}
                </p>
                <p className="mt-2 text-sm font-medium text-brass-600">
                  {organization.role}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
                  {organization.summary}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
