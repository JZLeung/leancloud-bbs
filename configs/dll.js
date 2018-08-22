const webpack = require('webpack');
const path = require('path');
// const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
// const os = require('os');
// const vueLoaderConfig = require('./vue-loader.conf')
const utils = {
    assetsPath: function (_path) {
        const assetsSubDirectory = process.env.NODE_ENV === 'production'
            ? 'static'
            : 'static'
        
        return path.posix.join(assetsSubDirectory, _path)
    }
}

console.log(__dirname, )
// const vuxLoader = require('vux-loader')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
const vendors = [
    // 'vue/dist/vue.runtime.esm.js',
    // 'raven-js',
    'markdown-it',
    'markdown-it-emoji',
    'vue-router',
    'js-cookie',
    'axios',
    'vuex',
];
const context = path.join(__dirname, '../')
const webpackConfig = {
    mode: 'production',
    context,
    output: {
        path: path.join(__dirname, '../public/js/'),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
    },
    entry: {
        "vendor": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            context,
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_[hash]',
        }),
        // new config.optimization.minimize
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true,
        //     // parallel: true
        // })
    ],
    module: {
        rules: [{
        //     test: /\.vue$/,
        //     loader: 'vue-loader',
        //     options: vueLoaderConfig
        // },
        // {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }
        ]
    }
};

module.exports = webpackConfig
