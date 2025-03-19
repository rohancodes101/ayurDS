/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "sea-green": "#2E8B57", // Example sea green color
          offwhite: "#F5F5F5", // Example off-white color
        },
        fontFamily: {
          playfair: ["Playfair Display", "serif"],
        },
        animation: {
          "spin-slow": "spin 10s linear infinite", // For the rotating herbal leaf
        },
      },
    },
    plugins: [],
  };