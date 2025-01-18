/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Include EJS templates
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Add the Flowbite plugin
  ],
};
