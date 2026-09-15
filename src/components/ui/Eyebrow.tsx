import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: string;
  className?: string;
  /** Matches the surrounding tone so the rule and label stay legible. */
  tone?: "ink" | "paper";
  id?: string;
};

export function Eyebrow({
  children,
  className,
  tone = "ink",
  id,
}: EyebrowProps) {
  return (
    <p
      id={id}
      className={cn(
        "flex items-center gap-3 text-eyebrow font-medium uppercase",
        tone === "ink" ? "text-ink-500" : "text-brass-300",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8 shrink-0",
          tone === "ink" ? "bg-ink-300" : "bg-brass-300/50",
        )}
      />
      {children}
    </p>
  );
}
