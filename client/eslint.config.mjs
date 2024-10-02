import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      reactHooks: pluginReactHooks,
    },
    rules: {
      // "react-hooks/rules-of-hooks": ["error"],
      // "react-hooks/exhaustive-deps": ["warn"],
      "no-console": ["warn"],
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];
