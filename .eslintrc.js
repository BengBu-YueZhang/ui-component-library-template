module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    'import/prefer-default-export': 0
  }
}
