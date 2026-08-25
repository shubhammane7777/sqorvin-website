"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Wraps its child in a subtle "magnetic" pointer-follow effect: the button
 * nudges toward the cursor within a small radius.
 *
 * Always renders the same <motion.div> structure — the reduced-motion case
 * is handled centrally by <MotionConfig reducedMotion="user"> in
 * MotionProvider, which neutralises the x/y transform for those users. Doing
 * it that way (rather than branching to a different element here) keeps the
 * server-rendered and first-client-render markup identical, which matters
 * for a statically-exported page: branching on useReducedMotion() directly
 * would make this component's SSR output depend on a value only the browser
 * can know, causing a hydration mismatch for exactly the users this feature
 * is meant to help.
 */
export function MagneticButton({
  children,
  className,
  strength = 18,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={cn("group inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
