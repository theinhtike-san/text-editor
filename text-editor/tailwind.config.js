/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'agdasima': ['Agdasima', 'sans-serif'],
        'freehand': ['Freehand', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'courgette': ['Corugette', 'cursive'],

      }
    },
  },
  plugins: [],
}

