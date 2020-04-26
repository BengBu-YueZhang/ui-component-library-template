module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'at-rule-no-vendor-prefix': true,
    'declaration-property-unit-whitelist': {
      'font-size': ['px', '%'],
      '/^animation/': ['ms']
    },
    'media-feature-name-no-vendor-prefix': true,
    'max-nesting-depth': 8,
    'no-descending-specificity': true,
    'selector-class-pattern': '^[a-z0-9]+(-?[a-z0-9]+)*$',
    'selector-id-pattern': '^[a-z0-9]+(-?[a-z0-9]+)*$',
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'selector-max-compound-selectors': 6,
    'selector-pseudo-class-whitelist': [
      'active',
      'link',
      'visited',
      'first-child',
      'focus',
      'hover',
      'checked',
      'disabled',
      'enabled',
      'empty',
      'first-of-type',
      'indeterminate',
      'last-child',
      'last-of-type',
      'not',
      'nth-child',
      'nth-last-child',
      'nth-of-type',
      'nth-last-of-type',
      'only-child',
      'only-of-type',
      'root',
      'target'
    ],
    'string-quotes': 'double',
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': 'always-multi-line'
  }
};
