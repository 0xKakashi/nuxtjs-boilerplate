/**
 * @name tailwind
 * @desc tailwind configuration & customization
 * @link https://tailwindcss.com/docs/configuration
 */
// const { colors } = require('tailwindcss/defaultTheme')
/**
 * @module tailwing
 */
module.exports = {
  important: true,
  purge: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue', 'Noto Sans', 'Arial', 'sans-serif'],
      'serif': ['Bitstream Vera Serif', 'Georgia', 'serif']
    },
    extend: {
      // colors: {
      //   primary: colors.blue[700],
      //   secondary: colors.blue[400],
      //   accent: colors.indigo[600],
      //   highlight: colors.red[500]
      // },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '9': '9px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px'
      },
      textSizes: {
        '6xl': '3.25rem',
        '7xl': '3.75rem',
        '8xl': '4rem',
        '9xl': '4.25rem',
        '10xl': '4.5rem',
        '11xl': '4.75rem',
        '12xl': '5rem',
        '13xl': '6rem',
        '14xl': '7rem',
        '15xl': '8rem'
      },
      opacity: {
        '40': '.4',
        '45': '.45',
        '50': '.5',
        '55': '.55',
        '60': '.6',
        '65': '.65',
        '70': '.7',
        '80': '.8',
        '85': '.85',
        '90': '.9',
        '95': '.95'
      },
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '28': '7rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.75rem',
        '32': '8rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '42': '10.5rem',
        '44': '11rem',
        '46': '11.5rem',
        '48': '12rem',
        '50': '12.5rem',
        '52': '13rem',
        '54': '13.5rem',
        '56': '14rem',
        '58': '14.5rem',
        '60': '15rem',
        '64': '16rem',
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem'
      }
    },
  },
  variants: {
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    fill: ['responsive', 'hover', 'focus', 'active'],
    gridTemplateColumns: ['responsive']
  },
  plugins: [],
}
