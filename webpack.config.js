const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    output: {
        // バンドルしてmain.jsとして出力
        filename: 'main.js',
        path: outputPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: outputPath
    }
};
