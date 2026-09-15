import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PendingNote } from "@/components/ui/PendingNote";
import { Reveal } from "@/components/ui/Reveal";
import { contactChannels, contactIntro, contactPending } from "@/content/contact";
import { institutionLinks, site, socialLinks } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Abdullah Jaman about speaking invitations, institutional enquiries and media requests.",
  path: "/contact",
});

export default function ContactPage() {
  const hasDirectDetails = Boolean(site.email || site.phone);

  return (
    <>
      <PageHeader
        eyebrow={contactIntro.eyebrow}
        title={contactIntro.headline}
        lede={contactIntro.lede}
      />

      <Section divider={false} index="01" indexLabel="Enquiries">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>What to write about</Eyebrow>
              </Reveal>

              <ul className="mt-10 grid gap-5">
                {contactChannels.map((channel, i) => (
                  <li key={channel.label}>
                    <Reveal delay={i * 0.05}>
                      <Card padding="lg">
                        <h2 className="font-display text-2xl leading-snug text-content">
                          {channel.label}
                        </h2>
                        <p className="mt-3 max-w-xl leading-relaxed text-content-muted">
                          {channel.description}
                        </p>
                      </Card>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <Card padding="lg">
                  <h2 className="font-display text-display-md text-content">
                    Direct
                  </h2>

                  <dl className="mt-8 flex flex-col gap-7 border-t border-line pt-8">
                    {site.email ? (
                      <div>
                        <dt className="flex items-center gap-2.5 text-eyebrow font-medium uppercase text-content-subtle">
                          <Mail
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="size-4 shrink-0 text-accent"
                          />
                          Email
                        </dt>
                        <dd className="mt-2.5 pl-[1.625rem]">
                          <a
                            href={`mailto:${site.email}`}
                            className="break-all border-b border-line-strong pb-0.5 text-content transition-colors duration-300 ease-editorial hover:border-content"
                          >
                            {site.email}
                          </a>
                        </dd>
                      </div>
                    ) : null}

                    {site.phone ? (
                      <div>
                        <dt className="flex items-center gap-2.5 text-eyebrow font-medium uppercase text-content-subtle">
                          <Phone
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="size-4 shrink-0 text-accent"
                          />
                          Phone
                        </dt>
                        <dd className="mt-2.5 pl-[1.625rem] text-content">
                          {site.phone}
                        </dd>
                      </div>
                    ) : null}

                    <div>
                      <dt className="flex items-center gap-2.5 text-eyebrow font-medium uppercase text-content-subtle">
                        <MapPin
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="size-4 shrink-0 text-accent"
                        />
                        Based in
                      </dt>
                      <dd className="mt-2.5 pl-[1.625rem] text-content">
                        {site.location}
                      </dd>
                    </div>
                  </dl>

                  {/* While no personal address exists, the school's own site is
                      the only honest route — so it is the primary action. */}
                  {hasDirectDetails ? (
                    <div className="mt-9">
                      <Button href={`mailto:${site.email}`}>
                        Write an email
                      </Button>
                    </div>
                  ) : (
                    <>
                      <PendingNote className="mt-9">
                        {contactPending}
                      </PendingNote>
                      {institutionLinks[0] ? (
                        <div className="mt-8">
                          <Button href={institutionLinks[0].href}>
                            Visit {institutionLinks[0].label}
                          </Button>
                        </div>
                      ) : null}
                    </>
                  )}

                  {socialLinks.length > 0 ? (
                    <div className="mt-10 border-t border-line pt-8">
                      <h3 className="text-eyebrow font-medium uppercase text-content-subtle">
                        Elsewhere
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                        {socialLinks.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-content-muted transition-colors duration-300 ease-editorial hover:text-content"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
