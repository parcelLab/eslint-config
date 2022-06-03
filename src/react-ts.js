/**
 * Config base for projects using react with typescript.
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
      files: ['*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        require.resolve('./typescript.js'),
      ],
      plugins: ['react'],
      rules: {
        // Define custom parcelLab rules
        'unicorn/filename-case': 'off',
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function' },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
      },
    },
  ],
};
