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
        greyish: "#A7ABAE",
        white: " hsl(0, 0%, 100%)",
        yellow: "hsl(51, 100%, 49%)",
        red: "hsl(7, 99%, 70%)",
        green: "hsl(167, 40%, 24%)",
        darkblue: "hsl(198, 62%, 26%)",
        cyan: "hsl(168, 34%, 41%)",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
