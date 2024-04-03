/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "dark-primary": "#121212",
        "dark-secondary": "#2A2A2A",
        "light-primary": "#F3F5FE",
        "light-secondary": "#FCFCFC",
      },
    },
  },
  plugins: [],
};
