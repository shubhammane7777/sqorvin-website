"use client";

import { motion } from "framer-motion";
import { FOUNDER, SITE } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { fadeUp, fadeUpSmall, staggerContainer, revealViewport } from "@/lib/motion";

const SKILLS = [
  "Python",
  "SQL",
  "Power BI",
  "Machine Learning",
  "Business Reporting",
  "Software Development",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="relative w-40 sm:w-48">
            <div
              aria-hidden="true"
              className="absolute -inset-1.5 rounded-[20px] bg-gradient-to-br from-accent-blue/40 to-accent-violet/40 opacity-60 blur-lg"
            />
            <img
              src="/shubham-mane.jpg"
              alt="Shubham Mane, founder of sqorvin"
              width={700}
              height={843}
              className="relative w-full rounded-2xl border border-line object-cover shadow-card"
            />
          </div>
          <p className="mt-5 font-display text-lg font-medium text-ink">{FOUNDER.name}</p>
          <p className="text-sm text-ink-soft">{FOUNDER.role}</p>

          <motion.div
            variants={staggerContainer(0.05, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-6 flex flex-wrap gap-2"
          >
            {SKILLS.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUpSmall}
                className="rounded-full border border-line bg-canvas-raised px-3 py-1 text-xs text-ink-soft"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="space-y-5"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.18em] text-accent-cyan"
          >
            About sqorvin
          </motion.p>
          {FOUNDER.bio.map((paragraph) => (
            <motion.p
              key={paragraph}
              variants={fadeUp}
              className="text-pretty text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.p variants={fadeUp} className="pt-2 text-sm text-ink-faint">
            Based in {SITE.location.split(",")[0]}, working with clients across the UK.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
