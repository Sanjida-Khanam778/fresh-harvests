/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "serif"],
        questrial: ["Questrial", "sans-serif"],
      },
      colors: {
        primary: "#749B3F",
        green: "#176D38",
      }
    },
  },
  plugins: [],
};
