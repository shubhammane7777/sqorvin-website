import type { Config } from "tailwindcss";

// -----------------------------------------------------------------------
// Design system tokens for sqorvin.
// Colour, type, spacing and motion values are centralised here so every
// component pulls from the same system instead of one-off values.
// -----------------------------------------------------------------------
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#05070D", // near-black navy background
          raised: "#0B0F1B", // card / section surface
          raised2: "#101830", // secondary elevated surface (nav, modals)
        },
        ink: {
          DEFAULT: "#F4F6FB", // primary off-white text
          soft: "#9AA4C4", // secondary/muted text
          faint: "#5B6488", // tertiary/disabled text
        },
        line: {
          DEFAULT: "#1D2540", // default hairline borders
          soft: "#151B31",
        },
        accent: {
          blue: "#4C7FFF",
          violet: "#8B5CF6",
          cyan: "#22D3EE",
        },
        good: "#34D399",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-xl": ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-lg": ["2.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["1.875rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #4C7FFF 0%, #8B5CF6 100%)",
        "grad-radial-glow":
          "radial-gradient(circle at center, rgba(76,127,255,0.16) 0%, rgba(76,127,255,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(76,127,255,0.25), 0 8px 40px rgba(76,127,255,0.18)",
        "glow-violet": "0 0 0 1px rgba(139,92,246,0.25), 0 8px 40px rgba(139,92,246,0.18)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 50px rgba(0,0,0,0.35)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
