"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect warns during server rendering; this is the standard guard.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * A figure that counts up from zero the first time it scrolls into view.
 *
 * The server renders the final value, so without JavaScript — and for anyone
 * who has asked for reduced motion — the number is simply there. Assistive
 * technology always reads the final value; the ticking digits are hidden
 * from it.
 */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : NaN;
  const [shown, setShown] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    if (Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShown(0);

    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(eased * target));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  if (!match || Number.isNaN(target)) return <>{value}</>;

  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {match[1]}
        {shown === null ? match[2] : shown.toLocaleString("en-US")}
        {match[3]}
      </span>
    </span>
  );
}
