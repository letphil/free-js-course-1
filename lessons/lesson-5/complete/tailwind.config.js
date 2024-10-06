/** @type {import('tailwindcss').Config} */
export default {
  // added this here
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // for daisy ui
  plugins: [
    require("daisyui"),
    // added this here
  ],
};
