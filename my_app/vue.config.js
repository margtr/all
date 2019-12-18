const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        //端口号
        port: 3000,
        //代理
        proxy: {
            '/api': {
                //目标服务路径
                target: 'http://ustbhuangyi.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.join(__dirname, './src'))
            .set('components', path.join(__dirname, './src/components'))
            .set('pages', path.join(__dirname, './src/pages'))
            .set('style', resolve('./src/style'))
            .set('assets', resolve('./src/assets'))
            .set('views', resolve('./src/views'))
            .set('router', resolve('./src/router'))
    }
}