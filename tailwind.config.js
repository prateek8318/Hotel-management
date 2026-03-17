/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indian-saffron': '#FF9933',
        'indian-green': '#138808',
        'indian-white': '#FFFFFF',
        'maroon': '#800000',
        'gold': '#FFD700',
        'saffron-light': '#FFB366',
        'green-light': '#4CAF50',
        'warm-orange': '#FF8C42',
        'rich-red': '#CC4125',
        'turmeric': '#FFCC33',
        'cardamom': '#8FBC8F',
        'sandal': '#F4E4C1'
      },
      fontFamily: {
        'indian': ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
