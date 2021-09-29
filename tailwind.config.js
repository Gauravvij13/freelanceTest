module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        1: '1rem',
      },
      boxShadow: {
        out: '10px 25px 50px 13px rgba(0, 0, 0, 0.25)',
        corner: '2px 2px 15px 2px rgba(0, 0, 0, 0.2);',
        cornersm: '1px 1px 8px 1px rgba(0, 0, 0, 0.2);',
      },
      textColor: {
        primary: '#e56281',
        secondary: '#0A0F15B3',

        lightBlue: '#10085D',
        lightChatGray: '#EFF2F8',
      },
      backgroundColor: {
        primary: '#e56281',
        secondary: '#0A0F15B3',
        lightBlue: '#10085D',
        lightChatGray: '#EFF2F8',
      },
      borderColor: {
        primary: '#e56281',
        secondary: '#0A0F15B3',
        lightBlue: '#10085D',
        lightChatGray: '#EFF2F8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
