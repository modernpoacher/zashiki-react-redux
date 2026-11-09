/**
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

import globals from 'globals'
import standard from '@sequencemedia/eslint-config-standard/configs/recommended/merge'
import typescript from '@sequencemedia/eslint-config-typescript/configs/recommended/merge'
import reactPlugin from '@eslint-react/eslint-plugin'

const reactParserOptions = {
  ecmaFeatures: {
    jsx: true
  }
}

const reactPlugins = {
  react: reactPlugin
}

/**
 * @type {RulesRecord}
 */
const reactRules = {
  'no-unused-vars': [
    'error',
    {
      varsIgnorePattern: 'React'
    }
  ],
  '@stylistic/quotes': [
    'error',
    'single'
  ],
  '@stylistic/jsx-quotes': [
    'error',
    'prefer-single'
  ],
  '@stylistic/indent': [
    'error',
    2,
    {
      SwitchCase: 1,
      ignoredNodes: [
        'TemplateLiteral *'
      ],
      offsetTernaryExpressions: true
    }
  ]
}

export default [
  {
    ignores: [
      'coverage'
    ]
  },
  /**
   *  React config for all `jsx` files
   */
  {
    ...reactPlugin.configs.recommended,
    files: [
      '**/*.jsx'
    ]
  },
  /**
   *  Standard config
   */
  standard({
    files: [
      '**/*.{mjs,cjs,mts,cts}'
    ],
    ignores: [
      'src',
      'test',
      'jest.*.mjs'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  /**
   *  Standard config for `mjs` and `mts` files
   */
  standard({
    files: [
      'src/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }),
  standard({
    files: [
      'test/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }),
  /**
   *  Standard config for all `jsx` files
   */
  standard({
    files: [
      'src/**/*.jsx'
    ],
    ignores: [
      'src/**/__tests__/**/*.{cjs,mjs,jsx}'
    ],
    languageOptions: {
      parserOptions: {
        ...reactParserOptions
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      ...reactPlugins
    },
    rules: {
      ...reactRules
    }
  }),
  standard({
    files: [
      'src/**/__tests__/**/*.{cjs,mjs,jsx}',
      'jest.*.mjs'
    ],
    languageOptions: {
      parserOptions: {
        ...reactParserOptions
      },
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    },
    plugins: {
      ...reactPlugins
    },
    rules: {
      ...reactRules
    }
  }),
  /**
   *  TypeScript config
   */
  typescript({
    files: [
      '**/*.{mts,cts}'
    ],
    ignores: [
      'src',
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-redundant-type-constituents': 'off'
    }
  }),
  typescript({
    files: [
      'src/**/*.{mts,cts}',
      'test/**/*.{mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      '@typescript-eslint/no-redundant-type-constituents': 'off'
    }
  })
]
