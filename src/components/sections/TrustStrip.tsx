"use client";

import { motion } from "framer-motion";
import { Lightbulb, RefreshCw, LayoutDashboard, TrendingUp } from "lucide-react";
import { TRUST_STRIP } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { staggerContainer, fadeUpSmall, revealViewport } from "@/lib/motion";

const icons = [Lightbulb, RefreshCw, LayoutDashboard, TrendingUp];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-canvas-raised/30 py-10">
      <Container>
        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRUST_STRIP.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <motion.li
                key={item}
                variants={fadeUpSmall}
                className="flex items-center gap-3"
              >
                <Icon className="h-5 w-5 flex-shrink-0 text-accent-cyan" aria-hidden="true" />
                <span className="text-sm font-medium text-ink-soft">{item}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}
