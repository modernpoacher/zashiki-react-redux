require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const {
  default: component
} = require('./index.jsx')

module.exports = component
