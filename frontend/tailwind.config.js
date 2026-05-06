/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'starbucks-green': '#006241',
        'starbucks-dark': '#1e3932',
        'starbucks-warm-red': '#d50032', // For 'Join now' or 'Rewards' accents if needed, though button is black/white
      }
    },
  },
  plugins: [],
}
