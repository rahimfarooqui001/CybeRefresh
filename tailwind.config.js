/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: false,
  theme: {
    extend: {
      colors:{
        primary: '#77CC6D',
        secondary: 'F8F8F8',
        tertiary: '#27313D',
       
      }
    },
  },
  
  plugins: [
    require('daisyui'),
  ],
}

