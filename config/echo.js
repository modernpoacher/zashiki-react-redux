require('./mock')()

console.log('zashiki-react-redux')
console.log('zashiki-react-redux',
	require('../lib/app/actions'),
	require('../lib/app/components'),
	require('../lib/app/reducers'),
	require('../lib/app/router'),
	require('../lib/app/routes'),
	require('../lib/app/store'),
	require('../lib/app/transformers'))
process.exit()
