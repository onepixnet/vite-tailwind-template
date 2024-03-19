/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.html'],
  theme: {
    extend: {
      сolors: {},
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
