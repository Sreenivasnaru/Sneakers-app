/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'slate-gray': '#6b7280'
        
      },
      colors: {
        'primary': '#eceeff'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')"
      }
    },
  },
  plugins: [
    
  ],
}

