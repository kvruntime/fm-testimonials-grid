/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./src/**/*.{tsx, ts}"],
  theme: {
    fontFamilly: {
      sans: ["'Barlow Semi Condensed'", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
