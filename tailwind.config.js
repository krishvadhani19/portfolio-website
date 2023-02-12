/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        "dark-900": "#F1F5F9",
        "dark-800": "#E2E8F0",
        "dark-700": "#CBD5E1",
        "dark-600": "#94A3B8",
        "dark-500": "#64748B",
        "dark-400": "#475569",
        "dark-300": "#1E293B",
        "dark-200": "#0F172A",
        "dark-100": "#0d1117",
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  plugins: [],
};
