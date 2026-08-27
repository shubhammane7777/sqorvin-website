"use client";

import { motion } from "framer-motion";
import { CheckCircle2, UploadCloud, ShieldCheck, ArrowUpRight } from "lucide-react";
import { DEMO } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { fadeUp, revealViewport } from "@/lib/motion";

/**
 * "Try it yourself" — links out to the standalone upload-your-data demo.
 * Deliberately not another full DashboardPreview: that visual already owns
 * the hero. This card mirrors the demo's own upload step instead, so the
 * promise ("drop a file in") matches what actually happens when someone
 * clicks through.
 */
export function DemoCTA() {
  return (
    <section id="try-it" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/3 bg-grad-radial-glow"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent-cyan">
            {DEMO.eyebrow}
          </p>
          <h2 className="text-balance font-display text-display-md font-medium text-ink sm:text-display-lg">
            {DEMO.headline}
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-soft">
            {DEMO.subcopy}
          </p>

          <ul className="mt-7 flex flex-col gap-3">
            {DEMO.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-good"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>

          <a
            href={DEMO.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-grad-primary px-7 font-body text-base font-semibold text-white shadow-glow transition-all duration-300 ease-premium hover:shadow-glow-violet hover:brightness-110"
            aria-label={`${DEMO.cta} (opens in a new tab)`}
          >
            {DEMO.cta}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex justify-center lg:justify-end"
        >
          <a
            href={DEMO.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-sm rounded-2xl border border-line bg-canvas-raised/80 shadow-card backdrop-blur-md transition-transform duration-300 ease-premium hover:-translate-y-1"
            aria-label={`${DEMO.cta} (opens in a new tab)`}
          >
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
              <span className="ml-3 font-mono text-[11px] tracking-wide text-ink-faint">
                sqorvin — live demo
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 px-6 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10">
                <UploadCloud className="h-6 w-6 text-accent-blue" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Drag a file here, or click to browse
                </p>
                <p className="mt-1 font-mono text-[11px] text-ink-faint">
                  .csv &middot; .xlsx &middot; .xls
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-line px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0 text-accent-cyan" aria-hidden="true" />
              Nothing leaves your browser
            </div>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
