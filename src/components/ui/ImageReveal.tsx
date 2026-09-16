"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  /** Position among staggered siblings, in the site's shared stagger unit. */
  step?: number;
};

/** The site's entrance easing, as a cubic-bezier array Framer can read. */
const EDITORIAL = [0.22, 1, 0.36, 1] as const;

/** One stagger unit, matching `--reveal-stagger` in globals.css (70ms). */
const STAGGER = 0.07;

/**
 * A photograph arriving: the frame opens upward from its lower edge while the
 * image inside it settles back from a slight push-in.
 *
 * This is the one place Framer Motion earns its weight over the CSS reveal the
 * rest of the site uses. The effect is two elements moving against each other
 * on different curves and durations — the frame uncovering while the picture
 * decelerates into it — which is what makes it read as a photograph coming to
 * rest rather than as a box fading up. Expressed in CSS it would be two
 * keyframe sets, a second observer and a wrapper whose only job is to hold a
 * delay; as a pair of variants it is a dozen lines.
 *
 * The section and card entrances stay on CSS deliberately. They have to be
 * correct before hydration and impossible to strand at `opacity: 0`, and
 * `whileInView` can guarantee neither — see the note in Reveal.tsx.
 *
 * `data-reveal` is the safety catch that closes that same gap here: without
 * JavaScript the root layout's noscript rule forces opacity, transform and
 * clip-path back to their resting values, so the photograph is simply visible
 * rather than stuck behind an animation that will never run.
 */
export function ImageReveal({ children, className, step = 0 }: ImageRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div data-reveal="" className={className}>
        {children}
      </div>
    );
  }

  const delay = Math.min(Math.max(step, 0), 5) * STAGGER;

  return (
    <motion.div
      data-reveal=""
      className={cn("overflow-hidden", className)}
      initial={{ opacity: 0, clipPath: "inset(0% 0% 14% 0%)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.8, ease: EDITORIAL, delay }}
    >
      <motion.div
        initial={{ scale: 1.045 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.18, margin: "0px 0px -6% 0px" }}
        // Longer than the frame, so the picture is still settling after the
        // frame has finished opening. Equal durations read as one object
        // moving; unequal ones read as depth.
        transition={{ duration: 1.15, ease: EDITORIAL, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
