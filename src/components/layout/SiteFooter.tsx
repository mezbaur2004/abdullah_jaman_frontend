import Link from "next/link";

import { Container } from "./Container";
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
    <footer className="border-t border-line-inverse bg-surface-inverse text-on-inverse">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-20">
          <div className="max-w-md">
            <p className="font-display text-display-md">{site.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-on-inverse-muted">
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
              <h2 className="font-sans text-eyebrow font-medium uppercase text-on-inverse-muted">
                Site
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-on-inverse-muted transition-colors hover:text-on-inverse"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {elsewhere.length > 0 ? (
              <div>
                <h2 className="font-sans text-eyebrow font-medium uppercase text-on-inverse-muted">
                  Elsewhere
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {elsewhere.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-on-inverse-muted transition-colors hover:text-on-inverse"
                      >
                        {item.label}
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
