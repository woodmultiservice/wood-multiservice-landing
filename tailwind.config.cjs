/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#5c3d2e',
          green: '#108a00',
        },
      },
    },
  },
  plugins: [],
};