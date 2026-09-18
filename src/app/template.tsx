import type { ReactNode } from "react";

/**
 * The route transition.
 *
 * A template — unlike a layout — is remounted on every navigation, which is
 * exactly the hook a cross-fade needs: the class below is applied fresh each
 * time a new page arrives, so the animation plays on every route change
 * without a line of JavaScript, a client boundary or a library.
 *
 * React's `<ViewTransition>` is the other way to do this and is not available
 * here: the app is on React 19.2.8, which does not export it. When it lands in
 * a stable release this becomes a paired old/new transition rather than an
 * entrance for the incoming page alone. Until then the incoming page rises and
 * fades in and the outgoing one is simply replaced, which is the same gesture
 * a reader perceives and none of the weight.
 *
 * The animation is off entirely under `prefers-reduced-motion` — see
 * `.route-enter` in globals.css — rather than merely shortened.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="route-enter">{children}</div>;
}
