/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#d4ddee",
      bordalogin: "#fbffff",
      footer: "#bccde9",
      linkform: "#62739d",
      red: "#fd1605",
      formButton:"#e8e6e7",
      slate: colors.slate,
      white: colors.white,
      blue: colors.blue,
      yellow: colors.yellow,
      // amber: colors.amber,
      pink: colors.pink,
      yellow: colors.amber,
      orkutform: "#e8eefa",
      outros: "#8f8a8f",
      black:colors.black,
    },
    extend: {},
  },
  plugins: [],
};
