/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      spacing: {
        '5px': '5px',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'lightblue': '#3949ab',
      'darkblue': '#1b365d',
      'lightgreen': '#38761d',
      'darkgreen': '#264f29',
      'lightred': '#ff4747',
      'darkred': '#ac2a2a',
      'lightgrey': '#d9d9d9',
      'darkgrey': '#969696',
      'purple': '#9748ff',
    },
  },
  plugins: [],
}
