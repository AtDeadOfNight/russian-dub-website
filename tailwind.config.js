/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '1370px': '1370px',
        '1180px': '1180px',
        'xs': '450px',
      }
    },
  },
  plugins: [],
}

