/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg-color': '#d7d7d7',
      'main': '#4f5e7b',
      'secondary': '#7e8494'
    },
    extend: {},
  },
  plugins: [],
}