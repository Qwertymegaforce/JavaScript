const path = require('path')

module.exports =  {
  entry: path.resolve(__dirname, 'some.js'),
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
}
