module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:json/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  /* These are the built-in rules of this config.
     We can override/add feature project specific rules in .eslintrc.js of feature project
  */
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "no-console": ["error", { allow: ["error"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-uses-react": "error",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-var-requires": "off",
    "jest/no-mocks-import": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "jest/expect-expect": "error",
  },
};
