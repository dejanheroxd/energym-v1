/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // gympurple: "#7361c3",
        // gymblue: "#009de0",
        gymblue: "#0e9ec9",
        gymGreen: "#AFC92B",
        gymGreenBright: "#d1e958",
        // gymrose: "#c70050",
        // gymrose: "#7361c3",
        gymrose: "#b82abf",
        gymrosedark: "#871f8c",
      },
    },
  },
  plugins: [],
};
