/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gray: '#F7F7F7',
        'mid-gray': '#888888',
        'dark-gray': '#636363',
        white: '#FFFFFF',
        red: '#C12F30',
        black: '#000000'
      }
    },
    plugins: [],
  };
  