/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "dark-gradient": "#170E13",
        "dark-second-gradient": "#7A7ADB",
      },
    },
  },
  plugins: [],
};
