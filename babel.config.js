const debug = require('debug')

const log = debug('zashiki-react-redux')

const {
  env: {
    DEBUG = 'zashiki-react-redux',
    NODE_ENV = 'development'
  }
} = process

debug.enable(DEBUG)

log('`zashiki-react-redux` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: '12.18.1',
        browsers: [
          'last 4 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
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

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
