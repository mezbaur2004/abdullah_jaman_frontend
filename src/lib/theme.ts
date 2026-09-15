export const THEMES = ["system", "light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

/**
 * Display order in the selector, which is not the order above.
 *
 * System sits in the middle because the control is a spectrum — lightest on
 * the left, darkest on the right — and "follow the device" is the neutral
 * position between them. It also means the two ends are the two explicit
 * choices, so the shape of the control says what it does before it is read.
 */
export const THEME_ORDER = ["light", "system", "dark"] as const;

export const THEME_STORAGE_KEY = "aj-theme";
/** Dispatched on the window so every toggle instance stays in sync. */
export const THEME_EVENT = "aj-themechange";

/**
 * Runs before first paint, from a blocking inline script in <head>.
 *
 * Only an explicit choice is written to the document. Leaving the attribute
 * off is what "system" means — the CSS then falls through to
 * `prefers-color-scheme`, so the system default needs no JavaScript at all and
 * is correct even if this script never runs.
 *
 * Minified by hand because it ships inline on every page.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;
