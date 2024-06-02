import antfu from '@antfu/eslint-config';

export default antfu(
  {
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
      'curly': [
        'error',
        'multi',
      ],
      'no-template-curly-in-string': 'off',
      'no-case-declarations': 'error',
      'no-lone-blocks': 'off',
      'no-new': 'off',
      'unused-imports/no-unused-vars': 'warn',
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
      'antfu/curly': 'off',
      'unicorn/escape-case': 'off',
    },
  },
  {
    files: ['**/types/*.ts', '**/types.ts', '**/*.d.ts'],
    rules: {
      'ts/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/inject/**/*.?(c|m)@(j|t)s', '**/inject.?(c|m)@(j|t)s'],
    rules: {
      'ts/no-require-imports': 'off',
      'ts/no-var-requires': 'off',
    },
  },
);
