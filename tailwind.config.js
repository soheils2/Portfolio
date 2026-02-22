/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"Inter var"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          dark: "#0a0a0b",
        },
        card: {
          DEFAULT: "#f4f4f5",
          dark: "#18181b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
