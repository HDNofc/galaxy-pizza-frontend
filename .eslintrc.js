module.exports = {
  extends: ['react-app', 'prettier'],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.js?(x)'],
      rules: {
        'react/jsx-pascal-case': 'off',
        'no-else-return': 'error',
        'no-case-declarations': 'error',
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: false,
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'styled-components',
                message: 'Please import from styled-components/macro.',
              },
            ],
            patterns: ['!styled-components/macro'],
          },
        ],
      },
    },
  ],
};
