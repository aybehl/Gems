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
      'pastel-yellow': 'var(--pastel-yellow)',
      'fresh-green': 'var(--fresh-green)',
      'bubble-gum-pink': 'var(--bubble-gum-pink)',
      'black': 'var(--black)',
      'cobalt-blue': 'var(--cobalt-blue)',
      'white': 'var(--white)'
    }
  },
  plugins: [],
}