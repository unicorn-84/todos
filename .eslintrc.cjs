module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  // TODO: Add plugin:jsx-a11y/recommended
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
  ignorePatterns: ['dist'],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react'],
  // TODO: Add no-console: ["error", { allow: ["error"] }]
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': [
      'error',
      'always',
      { omitLastInOneLineBlock: true },
    ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
