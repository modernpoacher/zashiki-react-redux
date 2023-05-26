require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen)/
  ]
})

require('./index.jsx')
