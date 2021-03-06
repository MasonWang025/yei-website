module.exports = {
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    ,
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    extend: {
      colors: {
        yei: {
          primary: {
            gray: "#dce8e3",
            main: "#279361",
            darker: "#208556",
          },
          secondary: {
            brighter: "#113b47",
            main: "#293236",
            darker: "#0d303b",
            darkest: "#0d242b",
            black: "#232323",
            blackVibrant: "#010915",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
