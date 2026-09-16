import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
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

      <Section tone="soft" divider={false} index="01" indexLabel="Enquiries">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-display-md text-content">
                  What to write about.
                </h2>
              </Reveal>

              {/* A ruled list, not three cards. Each of these is a heading and
                  one line; as cards they were three near-identical boxes with
                  more padding in them than content, and the page's only
                  substance read as a form. Under rules they are what they are
                  — three kinds of enquiry — and the column beside them keeps
                  the one raised surface on the page to itself. */}
              <ol className="mt-10">
                {contactChannels.map((channel, i) => (
                  <li key={channel.label} className="group/row">
                    <Reveal step={i}>
                      <div className="flex gap-6 border-t border-line py-7 sm:gap-10">
                        <span
                          aria-hidden="true"
                          className="mt-1 font-display text-sm text-content-subtle transition-colors group-hover/row:text-accent"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-2xl leading-snug text-content">
                            {channel.label}
                          </h3>
                          <p className="mt-3 max-w-xl leading-relaxed text-content-muted">
                            {channel.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              {/* A panel rather than another card: this column is the page's
                  one action, and it should not read as a fourth item in the
                  list beside it. */}
              <Reveal>
                <Panel padding="md" pattern>
                  <h2 className="font-display text-display-md text-content">
                    Direct
                  </h2>

                  <dl className="mt-8 flex flex-col gap-7 border-t border-line pt-8">
                    {site.email ? (
                      <div>
                        <dt className="flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-content-subtle">
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
                            className="break-all border-b border-line-strong pb-0.5 text-content transition-colors hover:border-content"
                          >
                            {site.email}
                          </a>
                        </dd>
                      </div>
                    ) : null}

                    {site.phone ? (
                      <div>
                        <dt className="flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-content-subtle">
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
                      <dt className="flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-content-subtle">
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
                      <h3 className="text-eyebrow font-semibold uppercase text-content-subtle">
                        Elsewhere
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                        {socialLinks.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-content-muted transition-colors hover:text-content"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </Panel>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
