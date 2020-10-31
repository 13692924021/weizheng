module.exports = {
    devServer:{
        proxy:{
            "api": {
                target:'http://mostex.nextsls.com/',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    "^/api":''
                }
            }
        }
    }
}