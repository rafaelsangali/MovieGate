/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#0E131F',
        'slate-gray': '#59546C',
        'light-gray': '#E5E5E5',
        red: '#E83F5B',
        green: '#12A454',
        purple: '#5636D3',
        orange: '#FF872C',
        title: '#363F5F',
        text: '#969CB2'
      }
    }
  },
  plugins: []
}
