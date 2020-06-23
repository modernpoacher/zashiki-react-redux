const debug = require('debug')

const log = debug('@modernpoacher/zashiki-react-redux')

const {
  env: {
    DEBUG = '@modernpoacher/zashiki-react-redux',
    NODE_ENV = 'development'
  }
} = process

debug.enable(DEBUG)

log('`@modernpoacher/zashiki-react-redux` is awake')

const presets = [
  [
    '@babel/env', {
      targets: {
        node: 'current',
        browsers: [
          'last 2 versions'
        ]
      },
      useBuiltIns: 'entry',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/proposal-export-namespace-from',
  '@babel/proposal-export-default-from',
  '@babel/proposal-class-properties',
  [
    'module-resolver', {
      alias: {
        '@modernpoacher/zashiki-react-redux': './src'
      }
    }
  ]
]

function using () {
  log({ NODE_ENV })

  return NODE_ENV === 'production'
}

module.exports = (api) => {
  if (api) api.cache.using(using)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
