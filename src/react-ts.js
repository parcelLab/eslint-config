/**
 * Config base for projects using react with typescript.
 */

module.exports = {
  extends: [require.resolve('./react.js'), require.resolve('./typescript.js')],
  overrides: [
    {
      files: ['*.tsx'],
      extends: ['airbnb-typescript', 'prettier'],
      rules: {
        'react/require-default-props': 'off',
        'react/function-component-definition': [
          'error',
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
