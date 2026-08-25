"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Tracks pointer position relative to a container element and exposes it as
 * spring-smoothed Framer Motion values (0–1 normalised). Used for the
 * mouse-reactive glow in the hero. Falls back to the container centre and
 * never attaches a listener when the user has reduced motion enabled — this
 * is a decorative effect, not a functional one.
 */
export function useMousePosition(
  ref: React.RefObject<HTMLElement>,
  enabled: boolean
) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const handleMove = (e: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
      });
    };

    el.addEventListener("pointermove", handleMove);
    return () => {
      el.removeEventListener("pointermove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [ref, enabled, x, y]);

  return { x: springX, y: springY };
}
