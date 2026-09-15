import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: string;
  className?: string;
  /** "inverse" for the dark band, where the muted tokens flip. */
  tone?: "base" | "inverse";
  id?: string;
};

export function Eyebrow({
  children,
  className,
  tone = "base",
  id,
}: EyebrowProps) {
  const inverse = tone === "inverse";

  return (
    <p
      id={id}
      className={cn(
        "flex items-center gap-3 text-eyebrow font-medium uppercase",
        inverse ? "text-on-inverse-muted" : "text-content-subtle",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8 shrink-0",
          inverse ? "bg-accent-on-inverse" : "bg-accent",
        )}
      />
      {children}
    </p>
  );
}
