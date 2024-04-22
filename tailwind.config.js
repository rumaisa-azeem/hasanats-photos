/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
      fontFamily: {
        "body": ["Inter", "ui-sans-serif"],
        "sans": ["Inter", "ui-sans-serif"]
      }
  },
  plugins: [
  ],
}