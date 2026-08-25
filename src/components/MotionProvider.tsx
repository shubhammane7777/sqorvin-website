"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so every Framer Motion animation — scroll reveals, hero
 * motion, hover/tap effects — automatically respects the OS-level
 * prefers-reduced-motion setting, without having to thread useReducedMotion
 * checks through every single section. Components that need bespoke
 * reduced-motion behaviour (e.g. skipping the loader, freezing the canvas
 * background) still check useReducedMotion() directly where that matters.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
