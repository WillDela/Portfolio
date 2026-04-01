/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#fdfbf7',
          100: '#f6f3eb',
          200: '#eadecf',
          300: '#d7c1a8',
          400: '#c5a382',
          500: '#b4855e',
          600: '#a57351',
          700: '#895c44',
          800: '#724e3b',
          900: '#5c4133',
        },
        forest: {
          50: '#f4f7f4',
          100: '#e5eee5',
          200: '#cddbcd',
          300: '#a9c2a9',
          400: '#7ea27e',
          500: '#5c805c',
          600: '#486548',
          700: '#3a503a',
          800: '#314131',
          900: '#1e2d1e',
        },
        clay: {
          500: '#c58361',
          600: '#b5724f',
        },
        moss: {
          500: '#4a7c59',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
