module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    project: true,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': ['error', 'ignorePackages'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
