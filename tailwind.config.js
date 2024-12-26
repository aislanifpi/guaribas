/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gv-turquoise': '#20B2AA',
        'gv-green': '#00A572',
        'gv-beige': '#BEB599',
        'gv-orange': '#FFA500',
      },
    },
  },
  plugins: [],
};