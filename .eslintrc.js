// These rules are just for testing! They do not affect the rules exported by this package.
// To alter rules exporter by the package, go to the /src folder
module.exports = {
  extends: ["./src/typescript.js"],
  ignorePatterns: ["test/fixtures/*"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
};
