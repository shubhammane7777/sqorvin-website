"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Ruler, MessageCircle, Wrench } from "lucide-react";
import { WHY_CHOOSE_US } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, revealViewport } from "@/lib/motion";

const icons = [Sparkles, Target, Ruler, MessageCircle, Wrench];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why sqorvin"
          title="What that actually means in practice"
        />

        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5"
        >
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group bg-canvas-raised p-7 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <Icon className="h-5 w-5 text-accent-blue transition-colors duration-300 group-hover:text-accent-cyan" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
