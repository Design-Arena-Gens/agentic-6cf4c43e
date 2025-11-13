import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#070811",
        "midnight-light": "#0c101f",
        "tech-blue": "#33A3FF",
        "mint-green": "#55F2D2",
        slate: "#1f2539",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        heading: ["var(--font-poppins)", ...fontFamily.sans],
      },
      boxShadow: {
        glow: "0 0 40px rgba(51, 163, 255, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
