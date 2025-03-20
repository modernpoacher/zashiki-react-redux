const debug = require('debug')

const log = debug('zashiki-react-redux')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`zashiki` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
        browsers: [
          'last 2 versions',
          'safari >= 9',
          'ios >= 8',
          'ie >= 9',
          '> 2%'
        ]
      },
      /*
       *  Required! For `browsers`
       */
      useBuiltIns: 'usage',
      corejs: 3
    }
  ],
  '@babel/react'
]

const plugins = [
  '@babel/syntax-jsx'
]

// @ts-ignore
module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets,
    plugins,
    ignore: [
      /node_modules\/(?!shinkansen-*)\//,
      /node_modules\/(?!@modernpoacher\/isomorphic)\//,
      /node_modules\/(?!@sequencemedia\/react-render)\//,
      /node_modules\/(?!@sequencemedia\/react-redux-render)\//,
      /node_modules\/(?!@sequencemedia\/react-router-render)\//,
      /node_modules\/(?!@sequencemedia\/react-router-redux-render)\//,
      /node_modules\/(?!react-component-instance)\//,
      /node_modules\/(?!react-component-snapshot)\//,
      /node_modules\/(?!react-component-name)\//
    ]
  }
}
