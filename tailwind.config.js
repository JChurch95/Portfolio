/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#64ffda',
        'dark': '#0a0a0a',
        'light': '#e6f1ff'
      }
    },
  },
  plugins: [],
}
