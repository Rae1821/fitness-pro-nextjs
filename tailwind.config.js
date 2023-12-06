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
    themes: [{
        mytheme: {
          "primary": "#2fc9d7",
          "secondary": "#D9D9D9",
          "accent": "#fb9678",
          "neutral": "#F2F2F2",
          "base-100": "#ffffff"
        },
    },
    "light",
    "dracula"
  ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
}
