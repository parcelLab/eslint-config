/**
 * Custom config base for test projects using jest.
 */

module.exports = {
  overrides: [
    {
      env: {
        es2022: true,
        jest: true,
        node: true,
      },
      // For performance run jest/recommended on test files, not regular code
      files: ['*.{test,spec}.{j,t}s?(x)'],
      plugins: ['jest'],
      // Jest rules are specific to jest tests and extending base.js is not needed as other config will cover them
      extends: ['plugin:jest/recommended'],
      rules: {},
    },
  ],
};
