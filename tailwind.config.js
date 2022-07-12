/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '18': '4.5rem',
      },
      height: {
        '0.75': '0.1875rem'
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}
