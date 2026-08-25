"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, revealViewport } from "@/lib/motion";

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A simple, transparent process"
          description="No black-box engagement — you know what's happening at every stage, from first call to handover."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line sm:block lg:left-0 lg:top-[27px] lg:h-px lg:w-full" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={revealViewport}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent-blue to-accent-violet sm:block lg:hidden"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={revealViewport}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 top-[27px] hidden h-px w-full bg-gradient-to-r from-accent-blue to-accent-violet lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-4 lg:gap-8">
            {PROCESS.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                transition={{ delay: i * 0.12 }}
                className="relative flex gap-5 lg:flex-col lg:gap-0"
              >
                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-line bg-canvas font-mono text-sm font-semibold text-accent-cyan shadow-glow lg:mb-6">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
