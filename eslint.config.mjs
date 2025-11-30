import globals from 'globals'
import standard from '@sequencemedia/eslint-config-standard/configs/recommended/merge'
import typescript from '@sequencemedia/eslint-config-typescript/configs/recommended/merge'
import babelParser from '@babel/eslint-parser'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'

const reactParserOptions = {
  ecmaFeatures: {
    jsx: true
  }
}

const reactPlugins = {
  react: reactPlugin
}

const reactRules = {
  'no-unused-vars': [
    'error',
    {
      varsIgnorePattern: 'React'
    }
  ],
  quotes: [
    'error',
    'single'
  ],
  'jsx-quotes': [
    'error',
    'prefer-single'
  ],
  'react/jsx-indent': [
    'error',
    2,
    {
      checkAttributes: true,
      indentLogicalExpressions: true
    }
  ],
  'react/display-name': 'off'
}

const reactSettings = {
  react: {
    version: 'detect'
  }
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
    ...reactPlugin.configs.flat.recommended,
    settings: {
      ...reactSettings
    }
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
      parser: babelParser,
      parserOptions: {
        ...reactParserOptions,
        project: null
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
    },
    settings: {
      ...reactSettings
    }
  }),
  standard({
    files: [
      'src/**/__tests__/**/*.{cjs,mjs,jsx}',
      'jest.*.mjs'
    ],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ...reactParserOptions,
        project: null
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
    },
    settings: {
      ...reactSettings
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
      parser: typescriptParser,
      parserOptions: {
        projectService: true
      },
      globals: {
        ...globals.node,
        CogsTypes: 'readonly'
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
      parser: typescriptParser,
      parserOptions: {
        projectService: true
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      '@typescript-eslint/no-redundant-type-constituents': 'off'
    }
  })
]
