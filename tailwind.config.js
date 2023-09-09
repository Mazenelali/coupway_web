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
          'dark-gray' : '#959595',
          'label-gray':'#9f9f9f',
          'dimmer':"#36363699"
        },
        screens: {
          'sm': '640px',
        }
    },
  },
  plugins: [],
}

