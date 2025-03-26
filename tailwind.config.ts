import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
   
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Lufga", ...fontFamily.sans], // Définit Lufga comme police principale
      },
    },
  },
  plugins: [],
} satisfies Config;
