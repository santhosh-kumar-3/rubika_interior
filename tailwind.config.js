/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobileS': '320px',   // For small mobile screens
        'mobileM': '375px',   // For medium mobile screens
        'mobileL': '425px',   // For large mobile screens
      },
      colors: {
        primary: "#804c18",
        dark: "#222222",
        light: '#f7f1eb'
      },
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
