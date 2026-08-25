"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FINAL_CTA, CTA, SITE } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp, revealViewport } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-grad-radial-glow"
      />
      <Container className="relative text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <h2 className="mx-auto max-w-2xl text-balance font-display text-display-lg font-medium text-ink sm:text-display-xl">
            {FINAL_CTA.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {FINAL_CTA.subcopy}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {SITE.email}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
