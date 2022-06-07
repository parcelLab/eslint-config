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
      rules: {
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function' },
        ],
      },
    },
    {
      files: ['*.{test,spec}.{j,t}s?(x)'],
      rules: {
        'no-param-reassign': ['error', { props: false }],
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
