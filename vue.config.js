module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'content': 'components/content',
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'views': '@views'
            }
        }
    }
}