const webpack = require('webpack')
const path = require('path')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const Vue = require('vue')
const Buefy = require('buefy/package.json')
const AV = require('leancloud-storage')
const externals = {
    // 'element-ui':'ELEMENT'
}
const assets = [
    { path: 'https://unpkg.com/buefy@0.6.6/lib/buefy.min.css', type: 'css'}
]
console.log(process.env.NODE_ENV, AV.version)

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
    externals['vue'] = 'Vue'
    externals['buefy'] = 'Buefy'
    externals['leancloud-storage'] = 'AV'
    // externals['element-ui'] = 'ELEMENT'
    assets.push(
        { path: `https://lib.baomitu.com/vue/${Vue.version}/vue.min.js`, type: 'js' },
        { path: `https://unpkg.com/buefy@${Buefy.version}/lib/index.js`, type: 'js' },
        { path: `https://cdn.jsdelivr.net/npm/leancloud-storage@${AV.version}/dist/av-min.js`, type: 'js' },
    )
}

const plugins = [{
    name: 'html-assets',
    func: HtmlWebpackIncludeAssetsPlugin,
    options: {
        assets,
        // 是否在 webpack 注入的 js 文件后新增？true 为 append, false 为 prepend。
        // 生产环境中，这些 js 应该先加载。
        append: !isProd,
        publicPath: '',
    }
}, {
    name: 'dll',
    func: webpack.DllReferencePlugin,
    options: {
        context: path.join(__dirname, '../'),
        manifest: require('../configs/vendor-manifest.json')
    }
}]

module.exports = {
    externals,
    plugins
}
