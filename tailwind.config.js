/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        honeydew: '#F1FFF3',
        lightGreen: '#dff7e2',
        caribbeanGreen: '#00d09e',
        cyprus: '#0E3E3E',
        fenceGreen: '#052224',
        void: '#031314',
        lightBlue: '#6DB6FE',
        vividBlue: '#3299FF',
        oceanBlue: '#0068FF',
        text: '#093030',
      },
      borderRadius: {
        extraLarge: '70px',
      },
    },
  },
  plugins: [],
};
