import { cn } from "@/lib/cn";

/**
 * The lattice's own figure, drawn once at display size.
 *
 * It opens the closing band, where the obvious move would have been a large
 * quotation mark — and a quotation mark is the one ornament this passage
 * cannot have. The closing statement is not a quotation: no verified words of
 * his are on the record, and the text is set without quote marks, attribution
 * rule or name for exactly that reason. Hanging a giant open-quote over it
 * would make the typography claim what the words carefully do not.
 *
 * The eight-point khatam says ceremony without saying "someone said this".
 */
export function GeometricStar({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 76 76"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("size-16", className)}
    >
      <rect x="19" y="19" width="38" height="38" />
      <rect x="19" y="19" width="38" height="38" transform="rotate(45 38 38)" />
      <circle cx="38" cy="38" r="8" />
    </svg>
  );
}
