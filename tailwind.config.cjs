/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte,html,js,ts}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes: "url('/profil.webp')",
        jm: "url('/profilos.webp')",
      }),
    },
  },
  plugins: [],
}
