/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./src/components/*.tsx",
    "./src/containers/*.tsx",
    "./src/containers/**/*.tsx",
    "./node_modules/@jk/jui/**/*.js",
  ],
  theme: {
    background: {
      gradient: "linear-gradient(180deg, #F52C00 0%, #4A0002 100%)",
    },
    extend: {},
  },
  plugins: [require("@jk/jui/dist/jk-theme-plugin")],
};
