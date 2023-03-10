const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './**/*.html',
    './**/*.vue',
    './**/*.jsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      display: ['Rubik', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      emerald: colors.emerald,
      red: colors.rose,
      yellow: colors.amber,
      'tory-blue': {
        DEFAULT: '#0B4BB3',
        50: '#AAC8FA',
        100: '#92B9F8',
        200: '#629AF5',
        300: '#327BF2',
        400: '#0E5FE3',
        500: '#0B4BB3',
        600: '#0A43A0',
        700: '#093B8D',
        800: '#073379',
        900: '#062B66'
      },

      'golden-bell': {
        DEFAULT: '#E29312',
        50: '#FCF1DE',
        100: '#FAE6C6',
        200: '#F7D297',
        300: '#F3BE68',
        400: '#EFA939',
        500: '#E29312',
        600: '#B3740F',
        700: '#84560B',
        800: '#553707',
        900: '#261803'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last']
    }
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
