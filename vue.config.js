const {externals, plugins} = require('./configs/cdn')
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/leancloud-bbs/'
        : '/',
    chainWebpack: config => {
        // console.log(config.mode())
        config.module
            .rule('pug').test(/\.pug$/)
            // .use('pug-loader')
            // .loader('pug-loader')
            .end()
        plugins.forEach(plugin => {
            config.plugin(plugin.name)
                .use(plugin.func, plugin.options)
                .init((onePlugin, args) => {
                    return new onePlugin(args)
                })

        })

        config.externals(externals)
    }
}
