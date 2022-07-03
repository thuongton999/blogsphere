/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          "0%": {transform: "translateY(-100%)"},
          "100%": {transform: "translateY(0)"},
        }
      }
    },
    colors: {
      current: "currentColor",
      night: {
        100: "#4C566A",
        200: "#434C5E",
        300: "#3B4252",
        400: "#2E3440"
      },
      snow: {
        100: "#D8DEE9",
        200: "#E5E9F0",
        300: "#ECEFF4"
      },
      frost: {
        100: "#88C0D0",
        200: "#81A1C1",
        300: "#5E81AC"
      }
    }
  },
  plugins: [],
}
