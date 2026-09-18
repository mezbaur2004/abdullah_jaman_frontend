import Link from "next/link";

import { Container } from "./Container";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import {
  footerNav,
  institutionLinks,
  site,
  socialLinks,
} from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const elsewhere = [...socialLinks, ...institutionLinks];

  return (
    <footer className="relative isolate overflow-hidden bg-surface-inverse text-on-inverse">
      {/* The lattice closes the page the same way it opens every section. */}
      <SectionSeparator tone="inverse" />
      {/* The geometric layer's last appearance, and the quietest. The footer is
          a wide shallow band, so the tile enters from the top right and is
          gone before it reaches the copyright line. */}
      <span
        aria-hidden="true"
        className="section-veil-inverse pointer-events-none absolute inset-0 -z-10"
      />
      <GeometricPattern intensity="soft" fade="radial" className="-z-10" />

      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-20">
          <div className="max-w-md">
            <p className="font-display text-display-lg">{site.name}</p>
            <span
              aria-hidden="true"
              className="mt-5 flex items-center gap-2"
            >
              <span className="block h-0.5 w-10 bg-accent-on-inverse" />
              <span className="block h-0.5 w-3 bg-gold opacity-80" />
            </span>
            <p className="mt-5 text-sm leading-relaxed text-on-inverse-muted">
              {site.tagline}
            </p>
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="mt-7 inline-block border-b border-line-inverse pb-1 text-sm text-on-inverse transition-colors hover:border-on-inverse"
              >
                {site.email}
              </a>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="font-sans text-eyebrow font-semibold uppercase text-accent-on-inverse">
                Site
              </h2>
              {/* Two columns. Seven links in one made this column twice the
                  height of the brand block beside it, and the difference read
                  as a hole in the bottom left of the footer. */}
              <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 sm:gap-x-14">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-underline text-ui text-on-inverse-muted transition-colors hover:text-on-inverse"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {elsewhere.length > 0 ? (
              <div>
                <h2 className="font-sans text-eyebrow font-semibold uppercase text-accent-on-inverse">
                  Elsewhere
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {elsewhere.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-ui text-on-inverse-muted transition-colors hover:text-on-inverse"
                      >
                        {item.label}
                        {/* The one place on the site an external link opened a
                            new tab without saying so. Every other external
                            link — the institution cards, the achievements
                            strip, the retailer links — carries this note, and
                            a screen reader user meeting a school's name in the
                            footer should be told the same thing they are told
                            about the same school three sections up. */}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line-inverse pt-8 text-xs text-on-inverse-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
      </Container>
    </footer>
  );
}
