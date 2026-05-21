/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#800c0c",
      },

      fontFamily: {
        lora: ["Lora", "serif"],
        cinzel: ["Cinzel Decorative", "serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl2: "1.5rem",
      },
    },
  },

  plugins: [],
};