require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const {
  default: router
} = require('./index.jsx')

module.exports = router
