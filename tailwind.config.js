/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#6467f2",
        "primary-dark": "#4f51c0",
        "background-light": "#f6f6f8",
        "background-dark": "#101122",
        "surface-dark": "#1a1b3a",
        "border-dark": "#2d2e5c",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(100, 103, 242, 0.4)',
      }
    },
  },
  plugins: [],
}
