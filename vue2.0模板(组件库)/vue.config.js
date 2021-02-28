module.exports = {
    lintOnSave: false,
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
    devServer: {
        // https: true,
		proxy: {
			"api": {
				target: "http://167.179.100.249:9091",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			},
			"db": {
				target: "https://douban.uieee.com",
				changeOrigin: true,
				pathRewrite: {
					"^/db": ""
				}
			}
		}
	}
}