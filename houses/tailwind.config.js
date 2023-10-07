/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '479.99px' },
    },
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif']
      },
      boxShadow: {
        '3xl': '0px 9px 32px 0px rgba(89, 92, 219, 0.05);',
      },
      textShadow: {
        textStroke:
          '-1px -1px 0 #1B1C57, 1px -1px 0 #1B1C57, -1px 1px 0 #1B1C57, 1px 1px 0 #1B1C57'
      },
      backgroundImage: {
        heroGradient:
          'linear-gradient(94.59deg, #4923B4 2.39%, #EB78CF 97.66%)'
      },
      colors: {
        lightgreen: '#10B981',
        darkblue: '#1B1C57',
        lightgray: '#626687'
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      animation: {
        fadeIn: '.2s fade-in ease-out'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

