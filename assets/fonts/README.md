# Vendored fonts

These files exist only for build-time Open Graph image generation
(`src/app/opengraph-image.tsx` and `src/app/icon.tsx`). Satori, which renders
those images, needs real font data on disk and cannot use `next/font`.

The site itself does **not** load these files — page typography comes from
`next/font/google` in `src/app/layout.tsx`, which self-hosts its own copies.

| File                   | Family              | Licence     |
| ---------------------- | ------------------- | ----------- |
| `Fraunces-SemiBold.ttf`| Fraunces, weight 600| SIL OFL 1.1 |

Fraunces is published by Undercase Type under the SIL Open Font License 1.1,
which permits bundling and redistribution with this kind of attribution. The
file is the Latin subset Google Fonts serves, not the full variable font.

Source: https://fonts.google.com/specimen/Fraunces
Licence text: https://openfontlicense.org
