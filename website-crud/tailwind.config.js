/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-100': '#e0f7fa',
        'sky-200': '#b2ebf2',
        'blue-500': '#0288d1',
        'blue-700': '#01579b',
        'blue-900': '#002f6c',
        'yellow-500': '#fbc02d',
        'red-500': '#d32f2f',
      },
      boxShadow: {
        default: '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  
  
  plugins: [],
}