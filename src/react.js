/**
 * Config base for projects using react.
 */

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  settings: { react: { version: 'detect' } },
  extends: require.resolve('./base.js'),
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'],
      plugins: ['react'],
      rules: {},
    },
    {
      files: ['*.{test,spec}.{j,t}s?(x)'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
