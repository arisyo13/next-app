module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
      'jest',
    ],
    // the three recommended plugins are similar, but they have minor differences
    // it is easier to have them all as dependencies rather than extracting those
    // differences into our own rules
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      'jsx-quotes': ['error', 'prefer-double'],
      'react/prop-types': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/semi': ['warn', 'always'],
      'quote-props': [1, 'as-needed'],
      '@typescript-eslint/no-non-null-assertion': 0,
      'eol-last': ['error', 'always'],
      'no-useless-escape': 0,
      'object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/ban-ts-ignore': 0,
  
      'key-spacing': ['error'],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'keyword-spacing': ['error'],
      'sort-imports': ['error', {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        ignoreMemberSort: false
      }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'block-like'], next: ['return', 'block-like']
        },
        {
          blankLine: 'always',
          prev: 'block-like', next: 'block-like'
        },
      ],
      'no-trailing-spaces': ['error', { ignoreComments: true }],
      'object-curly-newline': ['error', {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
        ImportDeclaration: { multiline: true, consistent: true },
        ExportDeclaration: { multiline: true, consistent: true }
      }],
      'no-return-assign': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      'block-spacing': 'error',
      'brace-style': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'max-len': ['error', {
        code: 150,
        ignoreRegExpLiterals: true,
        tabWidth: 2,
        ignoreUrls: true,
        ignorePattern: '<Path .*|<Polyline .*|<Polygon .*|<G .*|<path .*|<polyline .*|<polygon .*|<g .*'
      }],
      'no-multiple-empty-lines': ['error', {
        max: 2,
        maxBOF: 0,
        maxEOF: 1
      }],
    },
    overrides: [
      {
        files: ['*.js', '**/*.ts', '**/*.tsx'],
        rules: {
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/ban-ts-comment': 0,
          '@typescript-eslint/no-empty-interface': 0,
          'no-case-declarations': 0,
          'react/display-name': 0,
        },
        parserOptions: {
          sourceType: 'module',
        },
      }
    ],
    settings: {
      react: {
        version: 'detect'
      }
    },
    globals: {
      __dirname: 'readonly',
      process: 'readonly',
      module: 'readonly',
      require: 'readonly',
      exports: 'writable'
    },
    env: {
      node: true,
    },
  };
  