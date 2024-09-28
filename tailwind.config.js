/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./src/**/*.{tex, ts}"],
  theme: {
    fontFamilly: {
      sans: ["inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
