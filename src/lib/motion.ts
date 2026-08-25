import type { Variants } from "framer-motion";

// Shared easing/timing so every scroll reveal, hover and page-load animation
// feels like it belongs to the same system.
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_PREMIUM },
  },
};

export const staggerContainer = (stagger = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

/**
 * Standard viewport config for scroll-triggered reveals: as soon as ~15% of
 * the element is on screen.
 *
 * Deliberately `once: false` (re-checks every time), not `once: true`.
 * `once: true` means the reveal gets exactly one chance to fire, driven by
 * an IntersectionObserver callback — and a fast/instant scroll (a jump to
 * an anchor link, a very quick trackpad flick, keyboard/screen-reader focus
 * jumping to a section) can reach the target position without that callback
 * landing in time. Framer Motion applies the `hidden` state (opacity: 0) as
 * an inline style the instant the component mounts, unconditionally — if
 * the one-shot trigger is ever missed, there is no fallback and the content
 * stays invisible permanently. Verified this exact failure with an instant
 * `window.scrollTo` jump during development. With `once: false`, a missed
 * frame just means the next scroll/resize/layout pass re-evaluates it — so
 * content can only ever be briefly late, never stuck invisible. The only
 * trade-off is a subtle re-fade if someone scrolls back and forth across the
 * trigger boundary, which is a much smaller cost than content that can
 * vanish for good.
 */
export const revealViewport = { once: false, amount: 0.15 } as const;
