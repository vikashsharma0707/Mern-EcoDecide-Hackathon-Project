/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          50: '#f0fdf4',
          500: '#4ade80',
          600: '#22c55e',
          700: '#16a34a',
          900: '#14532d',
        }
      }
    },
  },
  plugins: [],
}