module.exports = {
  'compact': true,
  'comments': false,
  'presets': [
    [
      '@babel/env', {
        'targets': {
          'node': 'current',
          'browsers': [
            'last 2 versions'
          ]
        },
        'useBuiltIns': 'usage',
        'corejs': '3'
      }
    ],
    '@babel/react'
  ],
  'plugins': [
    '@babel/proposal-export-default-from',
    '@babel/proposal-class-properties',
    [
      'module-resolver', {
        'alias': {
          'zashiki-react-redux': './src'
        }
      }
    ]
  ]
}
