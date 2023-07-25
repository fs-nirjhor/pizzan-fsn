/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 5s infinite'
      }
    },
  },
  plugins: [],
};
