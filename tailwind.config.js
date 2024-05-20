const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
      "./src/**/*.{html,js,jsx}",
      flowbite.content(),
  ],
  theme: {
    extend: {},
      fontFamily: {
        "body": ["Inter", "ui-sans-serif"],
        "sans": ["Inter", "ui-sans-serif"]
      }
  },
  plugins: [
      flowbite.plugin()
  ],
}