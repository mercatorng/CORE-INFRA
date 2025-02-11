/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        instrument: ["Instrument Sans", "serif"],
        manrope: ["Manrope", "serif"],
      },
      colors: {
        ctaGreen: "#10D46B",
        ctaGreen500: "#04B757",
        ctaGreen600: "#24B065",
      },
    },
  },
  plugins: [],
};
