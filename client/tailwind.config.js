/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#5422c2",
        secondary: "#5422c2",
        tertiary: "#a1efe3",
      },
      fontFamily: {
        display: "Jost, ui-serif",
      },
    },
  },
  plugins: [],
};
