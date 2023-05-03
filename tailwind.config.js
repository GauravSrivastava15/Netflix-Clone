/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fade-pattern":
          "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111",
      },
    },
  },
  plugins: [],
};
