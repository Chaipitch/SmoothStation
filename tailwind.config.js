const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      }
    },
    fontFamily: {
      'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require('daisyui')],

}
