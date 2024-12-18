/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1DB954',
        'dark': '#191414',
        'light': '#e6f1ff'
      },
      fontFamily: {
        'spotify': ['Circular', 'sans-serif']
      }
    },
  },
  plugins: [],
}