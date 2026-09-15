export const THEMES = ["system", "light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

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
