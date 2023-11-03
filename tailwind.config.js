/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: '"DM Sans", sans-serif',
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "forest"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
}
