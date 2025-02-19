/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			display: 'DM Sans", sans-serif'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  daisyui: {
    themes: [{
        mytheme: {
          "primary": "#2fc9d7",
          "secondary": "#D9D9D9",
          "accent": "#fb9678",
          "success": "#00c292",
          "warning": "#fec90d",
          "neutral": "#F2F2F2",
          "base-100": "#ffffff",
          "base-200": "#272925",
          "base-300": "#BFBFBF",
        },
    },
    "light",
    "dracula"
  ],
  },
  plugins: [
    require("daisyui"),
      require("tailwindcss-animate")
],
}
