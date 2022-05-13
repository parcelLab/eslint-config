/**
 * Config base for projects using playwright.
 */

module.exports = {
  overrides: [
    {
      // To ensure best performance enable only on e2e test files
      files: ['**/e2e/**/*.test.{js,ts}'],
      // Playwright rules are specific to playwright tests and extending base.js is not needed as other config will cover them
      extends: ['plugin:playwright/playwright-test'],
      rules: {
        // Define custom parcelLab rules
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
