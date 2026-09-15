import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const fraunces = await readFile(
  join(process.cwd(), "assets", "fonts", "Fraunces-SemiBold.ttf"),
);

/** A serif monogram, so the tab matches the masthead. */
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#082b59",
          color: "#f4f8fd",
          fontSize: 38,
          fontFamily: "Fraunces",
          letterSpacing: "-0.02em",
        }}
      >
        AJ
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
