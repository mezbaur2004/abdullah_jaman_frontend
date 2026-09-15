import Link from "next/link";

import { Container } from "./Container";
import { footerNav, site, socialLinks } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-paper">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-20">
          <div className="max-w-md">
            <p className="font-display text-display-md">{site.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              {site.tagline}
            </p>
            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="mt-7 inline-block border-b border-paper/30 pb-1 text-sm text-paper transition-colors duration-300 ease-editorial hover:border-paper"
              >
                {site.email}
              </a>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="font-sans text-eyebrow font-medium uppercase text-ink-400">
                Site
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-300 transition-colors duration-300 ease-editorial hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-sans text-eyebrow font-medium uppercase text-ink-400">
                Elsewhere
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-300 transition-colors duration-300 ease-editorial hover:text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-8 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
      </Container>
    </footer>
  );
}
