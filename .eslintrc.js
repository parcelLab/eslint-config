module.exports = {
  extends: ["./src/typescript.js"],
  ignorePatterns: ["test/fixtures/*"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "unicorn/prefer-module": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prefer-number-properties": "off",
  },
};
