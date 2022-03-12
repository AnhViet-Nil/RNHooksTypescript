module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-base',
    'airbnb-typescript/base',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'prettier/prettier': 'error',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-curly-brace-presence': [
          'error',
          { props: 'always', children: 'always' },
        ],
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'import/no-cycle': 'warn',
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.js', '.jsx'],
          },
        ],
        'import/no-extraneous-dependencies': [
          'warn',
          {
            devDependencies: [
              'storybook/**',
              '**/**.stories.js',
              '**/**.test.js',
            ],
          },
        ],
        'no-unused-vars': [
          'error',
          { vars: 'all', args: 'none', ignoreRestSiblings: false },
        ],
        'react/jsx-props-no-spreading': [
          'error',
          {
            html: 'ignore',
            custom: 'ignore',
            explicitSpread: 'ignore',
            exceptions: [''],
          },
        ],
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
