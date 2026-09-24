import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/content/site";
import { brand } from "@/lib/brand";

export const alt = `${site.name} — ${site.positioning}, Wheaton International School and Guidance International School`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at module scope: the file never varies by request.
const fraunces = await readFile(
  join(process.cwd(), "assets", "fonts", "Fraunces-SemiBold.ttf"),
);

/**
 * The card people actually see when the site is shared. Set in the brand
 * serif, because a generic sans here would undo the rest of the typography.
 *
 * Satori supports only flexbox and a subset of CSS — no grid, no Tailwind.
 */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: brand.navy,
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "Fraunces",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 2, backgroundColor: "#c9a24a" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c9a24a",
            }}
          >
            Educationist
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            {site.name}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              lineHeight: 1.3,
              color: "#c9bfa6",
              maxWidth: 940,
            }}
          >
            Wheaton International School &amp; Guidance International School
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 22,
            color: "#e4c87e",
            borderTop: "1px solid rgba(244,248,253,0.20)",
            paddingTop: 28,
          }}
        >
          <div>Dhaka, Bangladesh</div>
          <div>University of Cambridge</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
      ],
    },
  );
}
