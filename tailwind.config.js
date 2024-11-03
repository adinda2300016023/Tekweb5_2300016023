/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customblue : "#2D76F9",
        customGray : '#747474',
        customBg : "#EEF4FF",
        customWhite: "#FFFFFF",
        customblack: "#000000",
      },
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}

