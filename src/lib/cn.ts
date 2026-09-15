/**
 * Join conditional class names. Deliberately not `tailwind-merge` — components
 * here own their layout classes and expose `className` for additions only, so
 * there is nothing to de-conflict.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
