"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useTransform, useMotionTemplate } from "framer-motion";
import { HERO, CTA, SITE } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DataGridBackground } from "@/components/ui/DataGridBackground";
import { DashboardPreview } from "@/components/ui/DashboardPreview";
import { useMousePosition } from "@/hooks/useMousePosition";
import { EASE_PREMIUM } from "@/lib/motion";

const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const headlineLine = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_PREMIUM } },
};

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { x, y } = useMousePosition(sectionRef, !prefersReducedMotion);
  const xPercent = useTransform(x, (v) => v * 100);
  const yPercent = useTransform(y, (v) => v * 100);
  const glowBackground = useMotionTemplate`radial-gradient(600px circle at ${xPercent}% ${yPercent}%, rgba(76,127,255,0.14), transparent 60%)`;

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44"
    >
      {/* ambient data grid */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <DataGridBackground className="h-full w-full" />
      </div>

      {/*
        Mouse-reactive glow. Always rendered (never branched on
        prefersReducedMotion) so server and first-client-render markup stay
        identical — useMousePosition simply never attaches its listener for
        reduced-motion users, so x/y stay centred and this reads as a static,
        gentle glow instead of a moving one.
      */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBackground }}
      />

      {/* static corner glows (always present, even with reduced motion) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-accent-blue/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-[380px] w-[380px] rounded-full bg-accent-violet/15 blur-[120px]"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-accent-cyan"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
            className="font-display text-display-xl font-medium text-ink sm:text-display-2xl"
          >
            {HERO.headlineLines.map((line, i) => (
              <motion.span
                key={line}
                variants={headlineLine}
                className={i === HERO.headlineLines.length - 1 ? "block text-gradient-accent" : "block"}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.55 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {HERO.subcopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.7 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton>
              <Button
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                {CTA.primary}
              </Button>
            </MagneticButton>
            <Button href="#services" variant="secondary" size="lg" withArrow={false}>
              {CTA.secondary}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-8 max-w-md text-sm leading-relaxed text-ink-faint"
          >
            {HERO.credibility}
          </motion.p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
