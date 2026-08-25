"use client";

import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, RefreshCw, BrainCircuit, Compass, Check } from "lucide-react";
import { SERVICES, type Service } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { staggerContainer, fadeUp, revealViewport } from "@/lib/motion";

const ICONS: Record<Service["icon"], React.ElementType> = {
  chart: BarChart3,
  "layout-dashboard": LayoutDashboard,
  "refresh-cw": RefreshCw,
  "brain-circuit": BrainCircuit,
  compass: Compass,
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Five ways to make your data work harder"
          description="Each engagement starts from a business outcome, not a piece of software — the tools follow from what you're actually trying to achieve."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            // First card spans two columns on the lg grid for an asymmetrical,
            // editorial layout rather than a uniform 3x2 grid of equal boxes.
            const spanClass = i === 0 ? "lg:col-span-2" : "";
            return (
              <motion.div key={service.id} id={service.id} variants={fadeUp} className={spanClass}>
                <GlassCard className="group h-full transition-transform duration-300 ease-premium hover:-translate-y-1 hover:border-accent-blue/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-accent-blue transition-colors duration-300 group-hover:border-accent-blue/50 group-hover:text-accent-cyan">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent-cyan">
                    {service.outcome}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-good" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
