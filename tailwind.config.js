const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/Components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xss: '375px', // min-width
      xs: '350px', // min-width
      '2md': '768px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: { '3xl': '1540px' },
      colors: {
        'primary-blue': '#6478d3',
        'primary-gray': '#F7F8F9',
        'dark-blue': '#0C1E6F',
        'dark-gray': '#B5BABB',
        'light-gray': '#E8E9EA',
        'xs-light-gray': '#f8f9fa',
        't-black': '#191B23',
        't-black-2': '#0F151D',
        't-black-3': '#2D3233',
        't-black-4': '#22242A',
        'card-black': '#242A39',
        'p-green': '#51DC8E',
        'light-gray-100': '#8C9192',
        'light-gray-200': '#8D92A3',
        'light-gray-300': '#F1F3F8',
        'light-gray-400': '#676C6D',
        'light-gray-500': '#8D9192',
        'light-gray-250': '#D9D9D9',
        'light-gray-100-1': '#F7F8FA',
        'orange': '#F7B579',
        'orange-800': '#D38640',
        'light-blue-200': '#CDCDD7',
        'light-blue-300': '#55595A',
        'light-red': '#EF4B5F',
        'load-green': '#51DC8E',
        'violet-18': '#6478D318',
        'white-08': '#ffffff14',
        'violet-02': '#6979CD',
        cream: '#F3EBE9',
        brown: '#8E7766',
        'blue-01': '#3960D9',
        'blue-02': '#007AFF',
      },
      // fontSize: {
      //   xxxs: '10px',
      //   xxs: '11px',
      //   'xs.5': '0.813rem',
      //   'xl.5': '22px',
      //   '2.5xl': '1.625rem',
      // },
      // dropShadow: {
      //   card: '0 5px 20px #0000000D',
      //   a: '0 0 10px #00000010',
      // },
      // borderRadius: {
      //   '2.5xl': '1.25rem',
      // },
      // padding: {
      //   '5px': '5px',
      // },
      // height: {
      //   15: '60px',
      //   '40per': '45%',
      //   '48per': '48%',
      // },
      // width: {
      //   15: '60px',
      // },
      // margin: {
      //   '42vh': '42vh',
      //   '46vh': '46vh',
      //   '48vh': '48vh',
      //   '52vh': '52vh',
      //   '58vh': '58vh',
      //   '62vh': '62vh',
      //   92: '22rem',
      // },
      // zIndex: {
      //   1: '1',
      // },
      // opacity: {
      //   46: '.46',
      //   13: '.13',
      // },
    },
  },
  plugins: [],
};
