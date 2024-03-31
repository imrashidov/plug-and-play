/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "dark-gradient": "#063669",
        "dark-second-gradient": "#06254b",
        "dark-third-gradient": "#020617",
      },
    },
  },
  plugins: [],
};
