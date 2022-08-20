/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'BACKGROUND':
        "url('../img/BACKGOUND.png')",
        'LogoFraseApp':
        "url('../img/LOGO_FRASEAPP.png')",
        'LogoGPlay':
        "url('../img/LOGO_gplay.png')",
        'LogoIOS':
        "url('../img/LOGO_ios.png')",
      },
      fontFamily: { 
        Hammersmith: ['Hammersmith One', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Pinyon: ['Pinyon Script','sans-serif']
      },
      colors: {
        'primario': '#fbb923',
      }
    },
  },
  plugins: [],
}
