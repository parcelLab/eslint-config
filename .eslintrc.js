module.exports = {
  extends: ["./src/typescript.js"],
  ignorePatterns: ["test/fixtures/*"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
};
