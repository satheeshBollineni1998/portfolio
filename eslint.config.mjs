import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Ensure proper resolution of paths
});

const eslintConfig = [
  // Extend Next.js core web vitals for Next.js-specific rules
  ...compat.extends("next/core-web-vitals"),

  // Add plugins or custom rules for development and production
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Apply these rules to JavaScript and TypeScript files
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // General best practices
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn", // Allow console logs in dev but not in production
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",

      // React-specific rules
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React to be in scope
      "react/jsx-key": "error", // Enforce unique keys in lists
      "react-hooks/rules-of-hooks": "error", // Enforce correct hook usage
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in hooks

      // TypeScript-specific rules (if applicable)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ], // Ignore unused variables prefixed with "_"
    },
  },

  // Optional: Add configurations for other file types
  {
    files: ["**/*.json"],
    languageOptions: {
      parser: require("jsonc-eslint-parser"),
    },
    rules: {
      "jsonc/indent": ["error", 2],
    },
  },
];

export default eslintConfig;
