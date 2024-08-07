/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dela': ['"Dela Gothic One"', 'sans-serif'],
        'chivo': ['"Chivo"', 'sans-serif'],
      },
    },
    colors: {
      'amber': 'var(--amber)',
      'pastel-yellow': 'var(--pastel-yellow)'
    }
  },
  plugins: [],
}