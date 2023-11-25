/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/vancedvue/**/*', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

