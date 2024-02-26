/** @type {import("tailwindcss").Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}", //primeuve
  ],
  theme: {
    extend: {
      colors: {
        black: {
          400: "var(--color-black-400)",
          500: "var(--color-black-500)",
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        white: "var(--color-white)",
        gray: "var(--color-gray)",
        "gray-dark": "var(--color-gray-dark)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
