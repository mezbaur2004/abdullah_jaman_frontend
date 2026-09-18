/**
 * The two brand colours that have to exist as literals.
 *
 * Everything else on the site reads a CSS custom property, but three things
 * cannot: the `theme-color` meta tag, the generated favicon and the Open Graph
 * card. They are all resolved outside the document — by the browser chrome, by
 * the icon renderer, by a social crawler — where no stylesheet has run.
 *
 * They were previously written out by hand in three files, which is how the
 * site ended up telling one route the chrome was `#051529` and another
 * `#030c17`: two neighbouring navies, indistinguishable in a screenshot and
 * plainly wrong as a flicker on a phone between pages. One token now, imported
 * by all three, so a route cannot disagree with another about what colour the
 * site is.
 *
 * These are `--navy-950` and `--parchment-100` from globals.css. If either
 * moves there, it moves here.
 */
export const brand = {
  /** --navy-950. The dark chrome, the icon ground, the OG card ground. */
  navy: "#051529",
  /** --parchment-100. The light chrome. */
  parchment: "#fbf7ef",
} as const;
