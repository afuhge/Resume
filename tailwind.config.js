const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
    colors: {
      teal: colors.teal,
      cyan: colors.cyan,
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
    }
  },
  plugins: [],
}

