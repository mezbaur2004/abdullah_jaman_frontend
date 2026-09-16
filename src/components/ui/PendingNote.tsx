import { Callout } from "./Callout";

/**
 * Says plainly that a section's content is still being confirmed.
 *
 * It exists because the alternative is worse: a personal-brand site that
 * invents an achievement or a date to avoid an empty column. Each of these is
 * driven by a string in the content layer — delete the string and the note
 * goes with it.
 *
 * Kept as its own name rather than folded into `Callout` because the meaning
 * is specific: this is not an aside, it is the site declining to make
 * something up. The label is fixed here so all three of them agree.
 */
export function PendingNote({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <Callout label="Still being confirmed" className={className}>
      {children}
    </Callout>
  );
}
