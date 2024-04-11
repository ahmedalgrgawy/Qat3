/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg-color': '#d7d7d7',
      'bg-secondary-color': '#bebfc4',
      'main': '#4f5e7b',
      'main-darker': '#3b4356',
      'secondary': '#7e8494',
      'third': '#9e9da2',
      'fourth': '#f5f5f5',
      'white': '#fff'
    },
    extend: {},
  },
  plugins: [],
}