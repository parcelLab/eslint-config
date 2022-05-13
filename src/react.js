/**
 * Config base for projects using react.
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.jsx'],
      extends: ['airbnb', 'airbnb/hooks', require.resolve('./base.js')],
      plugins: ['react'],
      rules: {
        // Define custom parcelLab rules
        'unicorn/filename-case': 'off',
      },
    },
  ],
};
