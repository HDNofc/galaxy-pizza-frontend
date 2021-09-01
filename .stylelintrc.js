module.exports = {
  extends: [
    'stylelint-config-standard',
    // 'stylelint-config-recommended-scss',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
    'stylelint-config-styled-components',
  ],
  // plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend', 'each', 'else', 'for', 'if', 'include'],
      },
    ],
    'font-weight-notation': 'numeric',
    'order/order': ['custom-properties', 'declarations'],
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'media-feature-range-operator-space-after': null,
    'media-feature-range-operator-space-before': null,
    'no-duplicate-selectors': null,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignoreAtRules: ['if', 'else', 'import'],
      },
    ],

    // https://github.com/stylelint/stylelint/issues/4953
    // https://github.com/stylelint/stylelint/pull/4944
    'function-name-case': null,
    'no-extra-semicolons': null,
    'value-keyword-case': null,
  },
};
