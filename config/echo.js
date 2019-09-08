require('./mock')()

console.log('zashiki-react-redux')
console.table({
  'app/actions': !!require('../lib/app/actions'),
  'app/common': !!require('../lib/app/common'),
  'app/components': !!require('../lib/app/components'),
  'app/reducers': !!require('../lib/app/reducers'),
  'app/router': !!require('../lib/app/router'),
  'app/routes': !!require('../lib/app/routes'),
  'app/sagas': !!require('../lib/app/sagas'),
  'app/store': !!require('../lib/app/store'),
  'app/transformers': !!require('../lib/app/transformers')
})
process.exit()
