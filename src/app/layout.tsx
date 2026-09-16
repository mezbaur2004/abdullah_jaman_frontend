import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/content/site";
import { personJsonLd } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Abdullah Jaman",
    "Wheaton International School",
    "Guidance International School",
    "WIS Dhaka",
    "GIS Dhaka",
    "school principal Dhaka",
    "education leader Bangladesh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7ef" },
    { media: "(prefers-color-scheme: dark)", color: "#030c17" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The init script writes data-theme onto this element before React
    // hydrates, so the server markup and the live DOM legitimately differ.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        {/* Blocking and first, so a saved theme is applied before first paint
            and the page never flashes the wrong one. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          // Serialised from a local object — no user input reaches this string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <noscript>
          {/* Scroll-reveals start at opacity 0; without JS they must not stay
              there. `clip-path` is in the list for the Framer image reveals,
              whose initial state Framer renders server-side and would never
              clear if its own script never arrived. */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important;scale:1!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-surface">
        <a
          href="#main"
          className="sr-only rounded-control focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:bg-action focus:px-5 focus:py-3 focus:text-sm focus:text-on-action"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
