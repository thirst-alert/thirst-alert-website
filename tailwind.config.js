/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': '#0D6766',
        'secondary': '#113A3A',
        'accent': '#4FE0B5',
        'background': '#191A1F',
        'surface': '#28292F'
      },
      spacing: {
        '15': '3.75rem'
      },
      maxHeight: {
        '1/2vh': '50vh',
        '3/4': '75%'
      }
    },
    screens: {
      'mobile': '0px',
      'tablet': '640px',
      'desktop': '1024px',
    }
  },
  plugins: [],
}

