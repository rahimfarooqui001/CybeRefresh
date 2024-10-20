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
        tertiary: '#789cf2',
       
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
    
  },
  
  plugins: [
    require('daisyui'),
  ],
}

