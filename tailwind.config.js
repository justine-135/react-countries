/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      18: "1.125rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      default: ["Nunito Sans", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueDark: "hsl(207, 26%, 17%)",
        veryDarkBlueLight: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "#2B3743",
        darkWhite: "#FAFAFA",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
  screens: {
    mobile: "375px",
    // => @media (min-width: 640px) { ... }
  },
};
