/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont : ["Montserrat","sans-serif"],
        titleFont : ["Inter","sans-serif"],
      },
      colors:  {
        'main-1': '#363636',
        'main-2': '#7c3aed',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

