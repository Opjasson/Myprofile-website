/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily : {
      'pop' : ['Mochiy Pop One'],
  },
    extend: {
      backgroundImage : {
        'profilePict' : "url('/src/static/img/whastapp.png')"
      },
      colors : {
        'primary' : '#5F6F65'
      },
    },
  },
  plugins: [],
}

