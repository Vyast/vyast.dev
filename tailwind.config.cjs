const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        industry: ["Industry", ...fontFamily.sans],
      },
      backgroundImage: {
        topography: "url('/topography.svg')",
      },
      screens: {
        xs: "384px",
      },
    },
  },
  plugins: [],
};
