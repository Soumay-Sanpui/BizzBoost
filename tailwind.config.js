/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay : 'Clash Display',
        cabinate: 'Cabinet Grotesk',
      },
      colors: {
        bc1: '#7F47FB',
        bcgr: '#93AB2E',
        bcbx: '#D9D9D9',
        txt: '#808080',
      }
    },
  },
  plugins: [],
}
