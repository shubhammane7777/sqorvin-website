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

/** Standard viewport config for scroll-triggered reveals: fire once, a little before fully in view. */
export const revealViewport = { once: true, margin: "-80px" } as const;
