"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Container } from "./Container";
import { ThemeSelector } from "@/components/ui/ThemeSelector";
import { primaryNav, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  // The overlay is stored with the route it was opened on, so navigating
  // simply derives it shut. Closing it from an effect on `pathname` would mean
  // a second render pass — and a frame of the old menu over the new page.
  const [menu, setMenu] = useState({ open: false, route: pathname });
  const menuOpen = menu.open && menu.route === pathname;

  const closeMenu = useCallback(
    () => setMenu({ open: false, route: pathname }),
    [pathname],
  );

  // A rule and solid ground appear only once the page has moved, so the header
  // sits invisibly on the hero at rest.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    /*
     * Always a solid ground, and that is a change forced by the hero.
     *
     * The header used to sit transparent on the page until it was scrolled,
     * which was a nice touch over a parchment hero and a bug over a navy one:
     * the logo and the nav are set in the page's dark ink, and on navy they
     * would simply not be there. A header whose legibility depends on what is
     * underneath it is a header that will eventually be invisible.
     *
     * The rule below it still arrives on scroll, so the lift is not lost.
     */
    <header
      className={cn(
        "sticky top-0 z-50 bg-surface transition-[border-color,box-shadow] duration-500 ease-editorial",
        scrolled || menuOpen
          ? "border-b border-line shadow-panel"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4 sm:gap-8 lg:h-24">
        <Link
          href="/"
          className="whitespace-nowrap font-display text-lg font-semibold tracking-[-0.015em] text-content sm:text-xl xl:text-2xl"
        >
          {site.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-10">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  // The rule under the current page is brass and two pixels:
                  // one of the four jobs the accent has, and at a hairline in
                  // the old blue it was not reading as a state at all.
                  className={cn(
                    "relative text-base transition-colors",
                    "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-accent-solid after:transition-all after:content-['']",
                    isCurrent(item.href)
                      ? "text-content after:w-full"
                      : "text-content-muted after:w-0 hover:text-content hover:after:w-full",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSelector />
          <Link
            href="/contact"
            className="hidden rounded-control bg-action px-5 py-3.5 text-ui font-medium text-on-action transition-colors hover:bg-action-hover hover:text-on-action-hover lg:inline-flex xl:px-7"
          >
            Get in touch
          </Link>

          <button
            type="button"
            onClick={() => setMenu({ open: !menuOpen, route: pathname })}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="-mr-2 inline-flex size-10 items-center justify-center text-content sm:size-11 lg:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            {menuOpen ? (
              <X aria-hidden="true" strokeWidth={1.5} className="size-6" />
            ) : (
              <Menu aria-hidden="true" strokeWidth={1.5} className="size-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Framer Motion is loaded here and nowhere else: the overlay is the one
          place an exit animation is worth shipping JavaScript for.
          `domAnimation` plus `strict` keeps it to the DOM feature set. */}
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence>
          {menuOpen ? (
            <m.div
              id="mobile-navigation"
              key="mobile-navigation"
              initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
              }
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-surface lg:hidden"
            >
              <Container as="nav" aria-label="Primary" className="py-10">
                {/* Numbered, in brass, in the display face — the same marker
                    every section on every page opens with. The menu is the
                    site's table of contents and should look like one rather
                    than like a list of six words. */}
                <ol className="flex flex-col">
                  {primaryNav.map((item, i) => (
                    <li key={item.href} className="border-b border-line">
                      <Link
                        href={item.href}
                        aria-current={isCurrent(item.href) ? "page" : undefined}
                        className="group/row flex items-baseline gap-5 py-5"
                      >
                        <span
                          aria-hidden="true"
                          className="w-7 shrink-0 font-display text-sm font-semibold text-accent"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-display-md transition-colors",
                            isCurrent(item.href)
                              ? "text-accent"
                              : "text-content group-hover/row:text-accent",
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>

                {/* Brass here and navy in the bar above, and the pair is not
                    an inconsistency. The overlay is the whole screen when it
                    is open, so this is the one control on it and takes the
                    primary style; the bar's button shares its screen with
                    whatever page is under it, where a second brass block
                    would compete with the page's own one action. */}
                <Link
                  href="/contact"
                  className="mt-10 inline-flex w-full items-center justify-center rounded-control bg-action-inverse px-7 py-4 text-ui font-medium text-on-action-inverse transition-colors hover:bg-action-inverse-hover"
                >
                  Get in touch
                </Link>
              </Container>
            </m.div>
          ) : null}
        </AnimatePresence>
      </LazyMotion>
    </header>
  );
}
