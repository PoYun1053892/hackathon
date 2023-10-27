/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  ignorePatterns: ["build_stage/*", "build_prod/*"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
      },
    ],
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    react: {
      version: "17.0.2",
    },
  },
};
