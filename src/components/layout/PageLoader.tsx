"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LogoMark } from "@/components/ui/Logo";

/**
 * Brief branded loading sequence shown once per page load. Kept short
 * (~900ms) so it reads as a considered detail rather than an obstacle, and
 * dismisses near-instantly under prefers-reduced-motion — reduced motion
 * here means "don't make me wait for a flourish", not just "animate it more
 * gently".
 *
 * `visible` always starts `true` (a constant, not derived from
 * useReducedMotion()) so the server-rendered and first-client-render markup
 * match exactly; only the *dismiss delay* set up in the effect below reacts
 * to the user's actual preference, which is safe because effects only ever
 * run after hydration has already succeeded.
 */
export function PageLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), prefersReducedMotion ? 0 : 900);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <LogoMark className="h-12 w-12" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
