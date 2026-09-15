/**
 * Generates the neutral, art-directed placeholder plates in public/images so the
 * site renders as a finished piece before real photography exists.
 *
 * Deliberately abstract — no stock imagery and no text baked into the picture.
 * Replace the files with real photographs at the same paths and aspect ratios
 * and nothing in the app needs to change.
 *
 *   node scripts/generate-placeholders.mjs
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const plates = [
  { file: "portrait-hero.jpg",  w: 1200, h: 1500, from: "#23262c", to: "#0c0e11", glow: "#6d7482", gx: "62%", gy: "26%" },
  { file: "portrait-about.jpg", w: 1200, h: 1500, from: "#2a241a", to: "#100d09", glow: "#a98850", gx: "38%", gy: "30%" },
  { file: "gallery-01.jpg",     w: 1400, h: 1050, from: "#1e2228", to: "#0b0d10", glow: "#8b939f", gx: "72%", gy: "34%" },
  { file: "gallery-02.jpg",     w: 1050, h: 1400, from: "#d9d3c7", to: "#a9a192", glow: "#f3f1ec", gx: "40%", gy: "22%" },
  { file: "gallery-03.jpg",     w: 1050, h: 1400, from: "#262a31", to: "#101318", glow: "#c6ab7c", gx: "55%", gy: "70%" },
  { file: "gallery-04.jpg",     w: 1400, h: 1050, from: "#c9c2b4", to: "#8f8778", glow: "#faf9f6", gx: "66%", gy: "30%" },
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
