/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App/.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'yellow-metacritic': '#FFBD3F',
      'white-metacritic': '#FFFFFF',
      'gray-metacritic': '#CBD5E1',
      'black-metacritic': '#000000',
      'red-metacritic': '#FF0000',
      'green-metacritic': '#84CC16',
    }
  },
  plugins: [],
}

