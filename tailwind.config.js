/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clrFigma : "#5268F4"
      },
      backgroundImage: {
        'bg-right2' :"url('../img/bg-right2.png')"
      }
    },
  },
  plugins: [],
}
