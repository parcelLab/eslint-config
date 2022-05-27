/**
 * Custom config for projects using storybook.
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      // For performance run storybook/recommended on storybook files, not regular code
      files: ['**/*.stories.{ts,tsx,mdx}'],
      // Storybook rules are specific to storybook files and extending base.js is not needed as other config will cover them
      extends: ['plugin:storybook/recommended'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
};
