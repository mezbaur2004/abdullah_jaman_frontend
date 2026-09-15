/**
 * Generates the decorative plate in public/images.
 *
 * No photograph of Abdullah Jaman has been supplied, so the hero uses an
 * abstract panel instead of a stand-in portrait: it is not a likeness and
 * makes no claim about anyone, and it carries an empty `alt` so assistive
 * technology skips it. Once a real portrait exists, set `portrait` in
 * src/content/profile.ts and the panel is replaced automatically.
 *
 *   npm run placeholders
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const plates = [
  {
    file: "panel-hero.jpg",
    w: 1200,
    h: 1500,
    // Forest, matching the brand palette in src/app/globals.css. A neutral
    // grey plate beside a forest page reads as a missing asset.
    from: "#12403a",
    to: "#061d1a",
    glow: "#4bb9ab",
    gx: "62%",
    gy: "26%",
  },
];

const plate = ({ w, h, from, to, glow, gx, gy }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="ground" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="glow" cx="${gx}" cy="${gy}" r="72%">
      <stop offset="0" stop-color="${glow}" stop-opacity="0.42"/>
      <stop offset="0.55" stop-color="${glow}" stop-opacity="0.10"/>
      <stop offset="1" stop-color="${glow}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette" cx="50%" cy="46%" r="76%">
      <stop offset="0.6" stop-color="#000000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.34"/>
    </radialGradient>
    <pattern id="rule" width="1" height="7" patternUnits="userSpaceOnUse">
      <rect width="${w}" height="1" fill="#ffffff" opacity="0.028"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#ground)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <rect width="${w}" height="${h}" fill="url(#rule)"/>
  <rect width="${w}" height="${h}" fill="url(#vignette)"/>
</svg>`;

/** Film grain keeps the flat gradients from banding on large displays. */
function grain(w, h) {
  const px = Buffer.alloc(w * h);
  for (let i = 0; i < px.length; i += 1) {
    px[i] = 108 + Math.floor(Math.random() * 40);
  }
  return sharp(px, { raw: { width: w, height: h, channels: 1 } }).png().toBuffer();
}

await mkdir(outDir, { recursive: true });

for (const spec of plates) {
  const base = await sharp(Buffer.from(plate(spec))).png().toBuffer();
  const noise = await grain(spec.w, spec.h);

  await sharp(base)
    .composite([{ input: noise, blend: "soft-light" }])
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(join(outDir, spec.file));

  console.log(`wrote ${spec.file} (${spec.w}x${spec.h})`);
}
