/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js.ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#fca5a5",
        tercero:"#4e0e69",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(70, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
      screens: {
        sp: "480px",
        lm: "840px",
        lx:"1022px"
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '4px 3px 15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

