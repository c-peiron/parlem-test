/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': "#FFF",
      'black': "#000",
    },
    extend: {},
  },
  plugins: [],
}
