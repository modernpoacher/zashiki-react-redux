require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const {
  default: routes
} = require('./index.jsx')

module.exports = routes
