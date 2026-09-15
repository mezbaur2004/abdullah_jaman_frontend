import { cn } from "@/lib/cn";

/**
 * Says plainly that a section's content is still being confirmed.
 *
 * It exists because the alternative is worse: a personal-brand site that
 * invents an achievement or a date to avoid an empty column. Each of these is
 * driven by a string in the content layer — delete the string and the note
 * goes with it.
 */
export function PendingNote({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-xl border-l-2 border-accent/50 py-1 pl-5 text-sm leading-relaxed text-content-subtle",
        className,
      )}
    >
      {children}
    </p>
  );
}
