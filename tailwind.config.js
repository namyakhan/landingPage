/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },

      colors: {
        blue: "#3EBFFF",
        greyish: "#A7ABAE"
      },
    },
  },
  plugins: [],
};
