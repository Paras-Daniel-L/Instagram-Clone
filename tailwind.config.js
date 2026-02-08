/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font here
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}