module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0
  }
}
