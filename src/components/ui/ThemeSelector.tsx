"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/cn";
import {
  THEME_EVENT,
  THEME_ORDER,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

const meta: Record<Theme, { label: string; hint: string; Icon: LucideIcon }> = {
  light: { label: "Light", hint: "Always light", Icon: Sun },
  system: { label: "System", hint: "Match my device", Icon: Monitor },
  dark: { label: "Dark", hint: "Always dark", Icon: Moon },
};

/**
 * The document itself is the source of truth — the blocking init script has
 * already written it before React runs. Reading through
 * `useSyncExternalStore` means no effect has to sync state after mount, so
 * there is no extra render and no hydration mismatch: the server snapshot is
 * "system", and React re-reads the real value immediately after hydrating.
 */
function subscribe(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  // Keep other tabs in step.
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Theme {
  const value = document.documentElement.getAttribute("data-theme");
  return value === "light" || value === "dark" ? value : "system";
}

function getServerSnapshot(): Theme {
  return "system";
}

function applyTheme(next: Theme) {
  const root = document.documentElement;

  // "System" is the absence of the attribute, not a value of it. That is what
  // lets the CSS fall through to `prefers-color-scheme` on its own, and it is
  // why the system default is correct even when this file never loads.
  if (next === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", next);
  }

  try {
    if (next === "system") {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    }
  } catch {
    // Private browsing or blocked storage: the choice still applies to this
    // page, it just will not be remembered. Not worth failing over.
  }

  window.dispatchEvent(new Event(THEME_EVENT));
}

/**
 * All three choices visible, each one click away.
 *
 * Built as a radio group rather than three buttons, because that is what it
 * is: one setting with three mutually exclusive values. The semantics are
 * worth the extra markup — a screen reader announces "Light, radio button, 1
 * of 3, not selected" instead of three unrelated buttons, and arrow keys move
 * between the options natively.
 *
 * The active pill is one absolutely positioned element that slides, not three
 * backgrounds fading in and out. Sliding is what makes the three read as
 * positions on a single control rather than as separate lit-up buttons — and
 * it is one transition instead of six.
 */
export function ThemeSelector({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const activeIndex = THEME_ORDER.indexOf(theme as (typeof THEME_ORDER)[number]);

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={cn(
        "relative inline-flex items-center rounded-full border border-line bg-surface-soft p-[3px]",
        className,
      )}
    >
      {/* Decorative: the selected state is announced by aria-checked, so the
          pill must not be reachable or readable on its own. */}
      <span
        aria-hidden="true"
        className="absolute inset-y-[3px] left-[3px] w-[calc((100%-6px)/3)] rounded-full border border-line-accent bg-surface-raised shadow-card transition-transform"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />

      {THEME_ORDER.map((option) => {
        const { label, hint, Icon } = meta[option];
        const active = option === theme;

        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            // The icon alone is not a name, so the button carries one.
            aria-label={`${label} — ${hint.toLowerCase()}`}
            title={`${label} — ${hint.toLowerCase()}`}
            onClick={() => applyTheme(option)}
            className={cn(
              "relative z-10 inline-flex size-7 items-center justify-center rounded-full transition-colors sm:size-8",
              active
                ? "text-accent"
                : "text-content-subtle hover:text-content",
            )}
          >
            <Icon aria-hidden="true" strokeWidth={1.5} className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
