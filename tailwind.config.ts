import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
  colors: {
    background: {
      dark: "var(--color-bg-dark)",
      mesh: "var(--color-bg-mesh)",
    },
    surface: {
      DEFAULT: "var(--color-surface)",
      hover: "var(--color-surface-hover)",
      border: "var(--color-surface-border)",
      highlight: "var(--color-surface-highlight)",
    },
    accent: {
      indigo: "#6366F1",
      cyan: "var(--color-accent-cyan)",
      violet: "var(--color-accent-violet)",
      emerald: "#34D399",
    },
    foreground: {
      DEFAULT: "var(--color-fg-default)",
      heading: "var(--color-fg-heading)",
      muted: "var(--color-fg-muted)",
    },
  },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "gradient-shift": "gradientShift 10s ease infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(99, 102, 241, 0.3)",
        "glow-cyan": "0 0 25px -5px rgba(34, 211, 238, 0.3)",
        "card-hover": "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px 0 rgba(99, 102, 241, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
