/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'my-theme': '#E46545',
      },
      backgroundColor: {
        'my-theme': '#E46545',
        'my-theme-btn': 'rgba(228, 101, 69, 52%)'
      },
      borderColor: {
        'my-theme': '#E46545'
      },
      screens: {
        'xs': {'max':'560px'}
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}