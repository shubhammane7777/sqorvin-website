"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, revealViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function RevealOnScroll({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
