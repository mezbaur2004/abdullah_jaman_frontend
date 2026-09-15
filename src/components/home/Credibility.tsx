import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, organizations } from "@/content/profile";

export function Credibility({ index }: { index?: string }) {
  if (organizations.length === 0) return null;

  return (
    <Section
      tone="soft"
      index={index}
      indexLabel="Roles"
      aria-labelledby="credibility-heading"
    >
      <Container>
        <SectionHeading
          id="credibility-heading"
          title="Founder & Principal of two Dhaka schools."
        />

        <ul className="mt-14 grid gap-px lg:mt-16 lg:grid-cols-2">
          {organizations.map((organization, i) => (
            <li
              key={organization.name}
              className="border-t border-line lg:odd:pr-12 lg:even:border-l lg:even:pl-12"
            >
              <Reveal delay={i * 0.06}>
                <div className="py-8">
                  <h3 className="font-display text-2xl leading-snug text-content">
                    {organization.href ? (
                      <a
                        href={organization.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1.5 transition-colors duration-300 ease-editorial hover:text-accent"
                      >
                        {organization.name}
                        <ArrowUpRight
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="mt-1.5 size-4 shrink-0 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      organization.name
                    )}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-accent">
                    {organization.role}
                  </p>
                  {organization.location ? (
                    <p className="mt-2 text-sm text-content-subtle">
                      {organization.location}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {education.length > 0 ? (
          <Reveal delay={0.12}>
            <dl className="mt-12 border-t border-line pt-8">
              <dt className="text-eyebrow font-medium uppercase text-content-subtle">
                Education
              </dt>
              {education.map((entry) => (
                <dd key={entry.institution} className="mt-3">
                  <span className="font-display text-xl text-content">
                    {entry.institution}
                  </span>
                  {entry.qualification ? (
                    <span className="mt-1 block text-sm text-content-muted">
                      {entry.qualification}
                      {entry.field ? `, ${entry.field}` : null}
                    </span>
                  ) : null}
                </dd>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
