/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          'light-green': '#13D0CA',
          'dark-green': '#15B5AB',
          'light-gray' : '#f2f2f2',
          'dark-gray' : '#c8c8c6',
        },
    },
  },
  plugins: [],
}

