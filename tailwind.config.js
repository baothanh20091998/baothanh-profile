/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./module/components/**/*.{js,ts,jsx,tsx}",
    "./module/pages/**/*",
    "./config/*"
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#7B7B7B",
        error: "#FA5252",
        dark: "#a6a6a6",
        "dark-secondary": "#212425",
        "mainBg": "#111111",
        oriange: "#E93B81",
        "oriange-lite": "#FD7590",
        g: "#6AB5B9",
        pp: "#c17ceb",
        fb: "#1773EA",
        in: "#0072b1"
      },
    },
  },
  plugins: [],
}
