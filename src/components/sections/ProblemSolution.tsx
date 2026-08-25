"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { PROBLEM_SOLUTION } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, fadeUpSmall, revealViewport } from "@/lib/motion";

export function ProblemSolution() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The shift"
          title="From scattered spreadsheets to decisions you trust"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="rounded-2xl border border-line bg-canvas-raised/40 p-8 lg:rounded-r-none lg:border-r-0"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">Today</p>
            <ul className="mt-5 space-y-4">
              {PROBLEM_SOLUTION.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-faint" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-ink-soft sm:text-base">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative z-10 flex items-center justify-center py-4 lg:py-0">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={revealViewport}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-canvas shadow-glow"
            >
              <ArrowRight className="h-5 w-5 rotate-90 text-accent-blue lg:rotate-0" aria-hidden="true" />
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-accent-blue/30 bg-gradient-to-b from-accent-blue/[0.06] to-transparent p-8 lg:rounded-l-none lg:border-l-0"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-accent-cyan">
              With sqorvin
            </p>
            <motion.ul
              variants={staggerContainer(0.08, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              className="mt-5 space-y-4"
            >
              {PROBLEM_SOLUTION.solutions.map((solution) => (
                <motion.li key={solution} variants={fadeUpSmall} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-good" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-ink sm:text-base">
                    {solution}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
