/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],

  theme: {
    extend: {
      colors: {
        'main': '#2ed87b',

      },

      animation: {
        vibrate: 'vibrate 0.2s infinite',
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-1px, 0)' },
          '40%': { transform: 'translate(1px, 0)' },
          '60%': { transform: 'translate(-1px, 0)' },
          '80%': { transform: 'translate(1px, 0)' },
        },
      },

      boxShadow: {
        'custom': '3px 3px 0 0 rgba(0, 0, 0, 0.02)',
      },
    },
  },

  plugins: [

  ],
}

