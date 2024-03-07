/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      color01: '#1ED760',
      color02: '#1D75DE',
      color03: '#1F0D09',
      color04: '#EFEFEF',
    },
    extend: {
      spacing: {
        '10px': '.625rem',
        '14px': '.875rem',
        '912px': '54rem',
      },
      maxWidth: {
        '448px': '28rem',
      },
      fontSize: {
        40: '2.5rem',
        28: '1.75rem',
        26: '1.625rem',
        20: '1.25rem',
        15: '.9375rem',
        11: '.6875rem',
        9: '.5625rem',
      },
    },
  },
  plugins: [],
};
