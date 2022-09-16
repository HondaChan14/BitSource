/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      "main-primary": "#006684",
      "main-secondary": "#004E71"
      },
    },
    fontFamily: {
      Roboto: ["Roboto, san-serif"],
    },
    constainer: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}
