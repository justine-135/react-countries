/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      18: "1.125rem",
      14: "0.875rem",
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
    screens: {
      tabletNav: "630px",
      mobile: "375px",
      tablet: "830px",
      tablet2: "518px",
      pc: "1100px",
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
      boxShadow: {
        backBtnLight: "0 0 10px 0px #cbd5e1",
        backBtnDark: "0 0 10px 0px #0f172a",
      },
    },
  },
  plugins: [],
};
