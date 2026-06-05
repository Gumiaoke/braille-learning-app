/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#7ED8FF',
        'growth-green': '#9BE7C4',
        'joy-yellow': '#FFD966',
        'warm-orange': '#FFB74D',
        'coral': '#FF8A80',
        'purple-soft': '#B39DDB',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    }
  },
  plugins: [],
}
