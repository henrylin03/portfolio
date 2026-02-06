import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],

  {
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-unused-css-selector": "warn",
      "astro/prefer-class-list-directive": "warn",
    },
  },
];
