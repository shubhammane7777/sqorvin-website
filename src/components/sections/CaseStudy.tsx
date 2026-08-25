"use client";

import { motion } from "framer-motion";
import { CASE_STUDY } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, fadeUp, fadeUpSmall, revealViewport } from "@/lib/motion";

export function CaseStudy() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <Badge className="border-accent-violet/30 text-accent-violet">
            {CASE_STUDY.label}
          </Badge>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-display text-display-md font-medium text-ink sm:text-display-lg">
              {CASE_STUDY.clientType}
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  The challenge
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">
                  {CASE_STUDY.challenge}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  What we did
                </h3>
                <ul className="mt-2 space-y-2">
                  {CASE_STUDY.approach.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-base text-ink-soft">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-blue" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="flex flex-col gap-4"
          >
            {CASE_STUDY.metrics.map((metric) => (
              <motion.div key={metric.label} variants={fadeUpSmall}>
                <GlassCard className="py-5">
                  <p className="font-display text-3xl font-semibold text-gradient-accent">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{metric.label}</p>
                </GlassCard>
              </motion.div>
            ))}
            <p className="px-1 text-xs italic leading-relaxed text-ink-faint">
              {CASE_STUDY.disclaimer}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
