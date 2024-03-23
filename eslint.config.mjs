import antfu from '@antfu/eslint-config';

export default antfu(
  {
    files: ['**/*.@(ts|mts)'],
    typescript: true,
    // svelte: true,
    // parses normal json files as jsonc
    jsonc: false,
    jsx: false,
    languageOptions: {
      ecmaVersion: 'latest',
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
      jsx: false,
    },
    rules: {
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      'linebreak-style': [
        'error',
        'unix',
      ],
      'eol-last': [
        'error',
        'always',
      ],
      'no-trailing-spaces': [
        'error',
        {
          ignoreComments: true,
        },
      ],
      'quotes': [
        'error',
        'single',
      ],
      'semi': [
        'error',
        'always',
      ],
      'no-console': 'off',
      'curly': 'off',
      'no-case-declarations': 'error',
      'no-lone-blocks': 'off',
      'no-new': 'off',
      'node/prefer-global/process': ['error', 'always'],
      'style/brace-style': 'off',
      'style/multiline-ternary': [
        'error',
        'always-multiline',
      ],
      'style/indent': 'off',
      'style/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        },
      ],
      'ts/method-signature-style': 'off',
      'ts/no-redeclare': 'off',
      'ts/no-explicit-any': 'error',
      'antfu/if-newline': 'off',
      'unicorn/escape-case': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'ts/no-explicit-any': 'off',
    },
  },
);
