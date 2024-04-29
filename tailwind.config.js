/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '350px',
      // => @media (min-width: 576px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'md': '768px',
      // => @media (min-width: 960px) { ... }
      'lg': '962px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1200px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

