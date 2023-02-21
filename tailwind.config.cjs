// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': [ 'Montserrat', 'ui-sans-serif'],
      'serif': [ 'Playfair Display', 'ui-serif']}
  }
};
