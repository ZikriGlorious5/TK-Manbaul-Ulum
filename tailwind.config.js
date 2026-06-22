/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-dark": "#3a7d44",
        "green-mid": "#5aab62",
        "green-light": "#d4edda",
        cream: "#f5f0e8",
        "cream-dark": "#e8e0d0",
        "red-accent": "#e05c4b",
        yellow: "#f6c84b",
        "brown-text": "#3d2b1f",
        "gray-soft": "#888888",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        fredoka: ["Fredoka One", "cursive"],
      },
      borderRadius: {
        DEFAULT: "18px",
        sm: "10px",
      },
      boxShadow: {
        card: "0 4px 18px rgba(0,0,0,0.10)",
        "btn-nav": "0 3px 0 #b03d2e",
        "btn-nav-hover": "0 5px 0 #b03d2e",
        "btn-cta": "0 4px 0 #b03d2e",
        "btn-cta-hover": "0 7px 0 #b03d2e",
        "btn-green": "0 3px 0 #2a5e31",
        "btn-wa": "0 3px 0 #1a9e4a",
        "btn-download": "0 3px 0 #c9a020",
        "logo-circle": "0 3px 0 #2a5e31",
        navbar: "0 2px 14px rgba(58,125,68,0.10)",
      },
    },
  },
  plugins: [],
};
