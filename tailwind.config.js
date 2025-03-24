/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        exo2: ['"Exo 2"', "sans-serif"],
        sans: ["Inter var", "sans-serif"],
      },
      keyframes: {
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1, 0.6)" },
          "50%": { transform: "translateY(8px) scale(1, 1)" },
        },
      },
      animation: {
        "scroll-bounce": "scroll-bounce 3s  infinite",
      },

      width: {
        "1/10": "10%",
      },
    },
  },

  variants: {
    extend: {
      scrollSnapType: ["responsive"],
      scrollSnapAlign: ["responsive"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
