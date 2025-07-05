/** @type {import('tailwindcss').Config} */
const { colors, radii, transitions } = require("./tokens/theme.js");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { ...colors },
    extend: {
      borderRadius: { ...radii },
      transitionDuration: { ...transitions },
    },
  },
  daisyui: {
    themes: [
      {
        atendor: {
          primary: colors.primary,
          secondary: colors.secondary,
          accent: colors.accent,
          neutral: colors.text,
          "base-100": colors.surface,
          "base-200": colors.background,
          info: colors.accent,
          success: colors.success,
          warning: colors.warning,
          error: colors.error,
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
  