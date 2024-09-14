/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'h-sm': { 'raw': '(max-height: 740px)' },
      },
      colors: {
        'black': '#121417',
        'bank-green': {
          300: '#399f60',
          500: '#088738',
          800: '#066c2d'
        },
        'bank-blue': {
          300: '#5fa6ed',
          500: '#1A80E5',
          800: '#1566b7	'
        },
        'bank-red': {
          300: '#f06c6c',
          500: '#CE1C1C',
          800: '#a80909'
        },
        'bank-gray': {
          500: '#F0F2F5',
          600: '#E5E8EB',
          700: '#DBE0E5',
          800: '#637587',
        }
      }
    },
  },
  plugins: [],
}

