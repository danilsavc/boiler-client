/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        boilerColor: "#FF6363",
      },
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};
