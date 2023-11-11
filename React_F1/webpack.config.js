const path = require('path');

module.exports = {
    entry: "./source/index.js",
    output: {
        path: path.join(__dirname, '/xcore'),
        filename: 'index.bundle.js',
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'source')
        },
        port: 3010,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"

            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    }
}