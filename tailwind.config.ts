import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          color: {
            1: "#0B0D17",
            2: "#D0D6F9",
            3: "#FFFFFF",
            4: "#181B25",
            5: "#0B0D17",
            6: "#979797",
          }
        },
      fontFamily: {
        ballefair: ["Bellefair", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        barlowcon: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
