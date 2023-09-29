const config = require('./webpack.mixin.js')
const {merge} = require('webpack-merge')
const path = require('path')

module.exports = merge(config, 
{
    mode: 'production',
    devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    hot: false
    },
}
)