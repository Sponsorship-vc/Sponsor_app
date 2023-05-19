/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1D263A',
      },
    },
    fontFamily: {
        abc: ["Poppin", "sans-serif"]
    }
  },
  plugins: [],
}