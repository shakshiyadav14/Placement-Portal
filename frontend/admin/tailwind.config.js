/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink8:"#590D22",
        pink7:"#800F2F",
        pink6:"#A4133C",
        pink5:"#C9184A",
        pink4:"#FF4D6D",
        pink3:"#FF758F",
        pink2:"#FF8FA3",
        pink1:"#FFB3C1",
        pink0:"#FFCCD5"
      },
    },
  },
  plugins: [],
}