/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // <- tell Tailwind where to look
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4800"
      }
    },
    screens: {
      sm: '640px',   // Small (mobile)
      md: '768px',   // Medium (tablet)
      lg: '1024px',  // Large (laptop)
      xl: '1280px',  // Extra large (desktop)
      '2xl': '1536px',
    },
  },
  plugins: [],
}
