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
    },
    keyframes: {
      rotateWithPause: {
        '0%, 20%': { transform: 'rotate(10deg)' },
        '30%, 50%': { transform: 'rotate(0deg)' },
        '60%, 80%': { transform: 'rotate(-10deg)' },
        '90%, 100%': { transform: 'rotate(0deg)' },
      },
    },
    animation: {
      rotateWithPause: 'rotateWithPause 4s cubic-bezier(0.42, 0.0, 0.58, 1.0) infinite',
    },
  },
  plugins: [],
}