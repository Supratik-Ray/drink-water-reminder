/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Calm blue – main brand
        accent: "#22C55E", // Hydration green – success & progress
        background: "#0F172A", // Deep navy – dark mode base
        surface: "#1E293B", // Cards & containers
        muted: "#94A3B8", // Secondary text
        danger: "#EF4444", // Errors
      },
    },
  },
  plugins: [],
};
