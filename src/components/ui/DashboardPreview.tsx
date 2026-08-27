"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { CheckCircle2, RefreshCw } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion";

// Illustrative trend shape only — deliberately unitless/unlabelled so this
// never reads as a real client's figures. Purpose is purely to convey "a
// live, connected dashboard" as a visual, not to claim a result.
const trendData = [
  { v: 22 }, { v: 28 }, { v: 24 }, { v: 34 }, { v: 30 }, { v: 42 }, { v: 38 }, { v: 52 },
];
const barData = [
  { v: 30 }, { v: 45 }, { v: 38 }, { v: 60 }, { v: 50 }, { v: 70 },
];

const panelVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_PREMIUM, delay: 0.3 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_PREMIUM, delay: 0.6 + i * 0.12 },
  }),
};

/**
 * A quietly pulsing dot on the last point of the trend line — the one piece
 * of "this is live, right now" language a static chart can't say on its
 * own. Only the final data point renders anything; every other index
 * returns null (Recharts calls this once per point).
 */
function LiveEndDot(props: { cx?: number; cy?: number; index?: number }) {
  const { cx, cy, index } = props;
  if (index !== trendData.length - 1 || cx == null || cy == null) return null;
  return (
    <g>
      <motion.circle
        cx={cx}
        cy={cy}
        r={4}
        fill="#4C7FFF"
        initial={{ opacity: 0.55, scale: 1 }}
        animate={{ opacity: [0.55, 0], scale: [1, 2.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: EASE_PREMIUM }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <circle cx={cx} cy={cy} r={3} fill="#4C7FFF" stroke="#0B0F1B" strokeWidth={1.5} />
    </g>
  );
}

/**
 * The hero's signature visual: a mock "connected dashboard" window. All
 * values are unlabelled/illustrative — this is a product visualisation, not
 * a reported result. Built entirely from SVG/Recharts, no photography.
 *
 * Animation props are always the same regardless of reduced-motion
 * preference (handled centrally by MotionConfig in MotionProvider) rather
 * than branched here — branching `variants`/`initial`/`animate` to
 * `undefined` based on useReducedMotion() would make this component's
 * server-rendered markup depend on a browser-only value, which is exactly
 * what causes a hydration mismatch on a statically-exported page. The same
 * reasoning extends to every loop added below: plain `animate` props with
 * `repeat: Infinity`, never a conditional derived from a browser-only hook —
 * MotionConfig's `reducedMotion="user"` is what actually turns these off for
 * people who've asked for less motion.
 *
 * Entrance (fade + scale, once) and idle motion (a slow continuous float)
 * are deliberately split across two nested elements rather than one: mixing
 * a one-shot transform with a looping one on the same element means fighting
 * over the same `y` value the moment the entrance finishes.
 */
export function DashboardPreview() {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-2xl border border-line bg-canvas-raised/80 shadow-card backdrop-blur-md"
      >
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
          <span className="ml-3 font-mono text-[11px] tracking-wide text-ink-faint">
            sqorvin — live view
          </span>
        </div>

        <div className="space-y-5 p-5">
          {/* trend area */}
          <div className="rounded-xl border border-line bg-white/[0.02] p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                Weekly performance
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-good/10 px-2 py-0.5 font-mono text-[11px] text-good">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-good"
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                trending up
              </span>
            </div>
            <div className="h-20">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 4, right: 6, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4C7FFF" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#4C7FFF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={["dataMin - 5", "dataMax + 5"]} />
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke="#4C7FFF"
                    strokeWidth={2}
                    fill="url(#trendFill)"
                    isAnimationActive
                    animationDuration={1400}
                    animationBegin={500}
                    dot={<LiveEndDot />}
                    activeDot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* two small tiles: bar chart + status list */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-line bg-white/[0.02] p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                By source
              </span>
              <div className="mt-2 h-14">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <Bar
                      dataKey="v"
                      fill="#8B5CF6"
                      radius={[3, 3, 0, 0]}
                      isAnimationActive
                      animationDuration={1000}
                      animationBegin={700}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2 rounded-xl border border-line bg-white/[0.02] p-3">
              {[
                { icon: RefreshCw, label: "Auto-refreshed", spin: true },
                { icon: CheckCircle2, label: "Sources connected", spin: false },
              ].map((row, i) => (
                <motion.div
                  key={row.label}
                  custom={i}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 font-mono text-[11px] text-ink-soft"
                >
                  <motion.span
                    className="flex"
                    animate={row.spin ? { rotate: 360 } : undefined}
                    transition={
                      row.spin
                        ? { duration: 1.1, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }
                        : undefined
                    }
                  >
                    <row.icon className="h-3.5 w-3.5 text-accent-cyan" aria-hidden="true" />
                  </motion.span>
                  {row.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <p className="border-t border-line px-5 py-2.5 text-center font-mono text-[10px] uppercase tracking-wider text-ink-faint">
          Illustrative product preview — not client data
        </p>
      </motion.div>
    </motion.div>
  );
}
