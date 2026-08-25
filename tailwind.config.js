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
          light: '#fdfbf7',
          white: '#ffffff',
          card: '#ffffff',
          cardHover: '#faf7f0',
          border: 'rgba(212, 175, 55, 0.35)',
          gold: '#d4af37',
          goldLight: '#f9f1d8',
          goldDark: '#aa820a',
          goldAccent: '#b8911b',
          goldGlow: 'rgba(212, 175, 55, 0.25)',
          darkText: '#1a1a1a',
          slateText: '#334155',
          muted: '#64748b'
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
