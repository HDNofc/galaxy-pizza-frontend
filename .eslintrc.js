module.exports = {
  extends: ['react-app'],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.js?(x)'],
      rules: {
        'react/jsx-pascal-case': 'off',
        'no-else-return': 'error',
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: false,
          },
        ],
      },
    },
  ],
};
