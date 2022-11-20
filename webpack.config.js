const path = require('path');

module.exports = {
    entry: './dist/index.js',
    mode: 'production',
    output: {
        filename: 'simple-bool.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'SimpleBool',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        auxiliaryComment: 'A simple set of functions that return a boolean.',
    },
};