/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial": "radial-gradient(#9494944d 1px, transparent 0)",
      },
      backgroundSize: {
        "custom-size": "30px 30px",
      },
      colors: {
        "gris-fuerte": "#E2E8F0",
      },
    },
  },
  plugins: [],
};
