/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          light: '#f8fbf9',
          white: '#ffffff',
          card: '#ffffff',
          cardHover: '#f0fdf4',
          border: 'rgba(5, 150, 105, 0.35)',
          emerald: '#064e3b',
          emeraldLight: '#ecfdf5',
          emeraldDark: '#022c22',
          emeraldAccent: '#059669',
          emeraldGlow: 'rgba(5, 150, 105, 0.25)',
          darkText: '#064e3b',
          slateText: '#1f2937',
          muted: '#4b5563'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
