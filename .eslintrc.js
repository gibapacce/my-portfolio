module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // React specific rules
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off", // Disabled for simplicity
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-key": "error",
    "react/no-unescaped-entities": "warn",

    // React Hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // General JavaScript rules (relaxed)
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "warn",
    "no-debugger": "error",
    "prefer-const": "warn",
    "no-var": "warn",

    // Performance
    "no-unused-expressions": "warn",
    "no-unreachable": "error",
    "no-duplicate-imports": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["build/", "node_modules/", "public/", "*.config.js"],
};
