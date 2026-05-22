import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#F5A800",
        electric: "#00AAFF",
        navy: "#0D1B2E",
        flame: "#E84E0F",
        dark: "#070F1A",
      },
      fontFamily: {
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 15px rgba(245,168,0,0.6)",
        "gold-lg": "0 0 30px rgba(245,168,0,0.5), 0 0 60px rgba(245,168,0,0.25)",
        blue: "0 0 15px rgba(0,170,255,0.6)",
        "blue-lg": "0 0 30px rgba(0,170,255,0.5), 0 0 60px rgba(0,170,255,0.25)",
        flame: "0 0 15px rgba(232,78,15,0.6)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "drift-1": "drift1 22s ease-in-out infinite",
        "drift-2": "drift2 28s ease-in-out infinite",
        "drift-3": "drift3 20s ease-in-out infinite",
        "drift-4": "drift4 25s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glowPulse: {
          "0%, 100%": {
            textShadow: "0 0 20px rgba(245,168,0,0.4), 0 0 40px rgba(245,168,0,0.2)",
          },
          "50%": {
            textShadow: "0 0 40px rgba(245,168,0,0.8), 0 0 80px rgba(245,168,0,0.4), 0 0 120px rgba(245,168,0,0.2)",
          },
        },
        drift1: {
          "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "33%": { transform: "translate(25px, -35px) rotate(120deg)" },
          "66%": { transform: "translate(-18px, 18px) rotate(240deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(360deg)" },
        },
        drift2: {
          "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "25%": { transform: "translate(-35px, 25px) rotate(90deg)" },
          "75%": { transform: "translate(18px, -18px) rotate(270deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(360deg)" },
        },
        drift3: {
          "0%": { transform: "translate(0px, 0px) rotate(45deg)" },
          "50%": { transform: "translate(40px, 28px) rotate(225deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(405deg)" },
        },
        drift4: {
          "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "40%": { transform: "translate(-28px, -45px) rotate(160deg)" },
          "80%": { transform: "translate(35px, 10px) rotate(320deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
