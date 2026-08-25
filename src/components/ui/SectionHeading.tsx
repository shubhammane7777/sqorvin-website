"use client";

import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-display text-display-md font-medium text-ink sm:text-display-lg">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
