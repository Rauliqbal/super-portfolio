/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px'
        }
      },
      colors: {
        primary: '#4B70F5',
        white: '#F8FAFC',
        dark: '#0B0B1B'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

