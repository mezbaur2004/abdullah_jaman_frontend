"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";

import { cn } from "@/lib/cn";
import {
  THEME_EVENT,
  THEME_STORAGE_KEY,
  THEMES,
  type Theme,
} from "@/lib/theme";

const meta: Record<Theme, { label: string; Icon: typeof Sun }> = {
  system: { label: "System", Icon: Monitor },
  light: { label: "Light", Icon: Sun },
  dark: { label: "Dark", Icon: Moon },
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

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
  const { label, Icon } = meta[theme];

  const onClick = useCallback(() => applyTheme(next), [next]);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Theme: ${label}. Switch to ${meta[next].label.toLowerCase()}.`}
      title={`Theme: ${label}`}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-line text-content-muted transition-colors duration-300 ease-editorial hover:border-line-strong hover:text-content",
        className,
      )}
    >
      <Icon aria-hidden="true" strokeWidth={1.5} className="size-[1.125rem]" />
    </button>
  );
}
