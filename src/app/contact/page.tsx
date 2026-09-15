import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { contactChannels, contactIntro } from "@/content/contact";
import { site, socialLinks } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Abdullah Jaman about speaking invitations, academic partnerships, media requests and institutional advisory work.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contactIntro.eyebrow}
        title={contactIntro.headline}
        lede={contactIntro.lede}
      />

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>What to write about</Eyebrow>
              </Reveal>

              <ul className="mt-10 border-t border-ink-900/10">
                {contactChannels.map((channel, index) => (
                  <li
                    key={channel.label}
                    className="border-b border-ink-900/10"
                  >
                    <Reveal delay={index * 0.05}>
                      <div className="py-8">
                        <h2 className="font-display text-2xl leading-snug text-ink-900">
                          {channel.label}
                        </h2>
                        <p className="mt-3 max-w-xl leading-relaxed text-ink-600">
                          {channel.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <div className="bg-paper-soft p-8 sm:p-10">
                  <h2 className="font-display text-display-md text-ink-900">
                    Direct
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-600">
                    Every enquiry is read. Please include the institution, the
                    dates you are working to, and what you would like Abdullah
                    to do.
                  </p>

                  <dl className="mt-9 flex flex-col gap-7 border-t border-ink-900/10 pt-9">
                    {site.email ? (
                      <div>
                        <dt className="flex items-center gap-2.5 text-eyebrow font-medium uppercase text-ink-500">
                          <Mail
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="size-4 shrink-0 text-brass-600"
                          />
                          Email
                        </dt>
                        <dd className="mt-2.5 pl-[1.625rem]">
                          <a
                            href={`mailto:${site.email}`}
                            className="break-all border-b border-ink-900/25 pb-0.5 text-ink-900 transition-colors duration-300 ease-editorial hover:border-ink-900"
                          >
                            {site.email}
                          </a>
                        </dd>
                      </div>
                    ) : null}

                    {site.location ? (
                      <div>
                        <dt className="flex items-center gap-2.5 text-eyebrow font-medium uppercase text-ink-500">
                          <MapPin
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="size-4 shrink-0 text-brass-600"
                          />
                          Based in
                        </dt>
                        <dd className="mt-2.5 pl-[1.625rem] text-ink-900">
                          {site.location}
                        </dd>
                      </div>
                    ) : null}
                  </dl>

                  {site.email ? (
                    <div className="mt-10">
                      <Button href={`mailto:${site.email}`}>
                        Write an email
                      </Button>
                    </div>
                  ) : null}

                  {socialLinks.length > 0 ? (
                    <div className="mt-10 border-t border-ink-900/10 pt-8">
                      <h3 className="text-eyebrow font-medium uppercase text-ink-500">
                        Elsewhere
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                        {socialLinks.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-ink-600 transition-colors duration-300 ease-editorial hover:text-ink-900"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
