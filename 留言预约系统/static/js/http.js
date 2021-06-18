function http (options) {
	// let baseURL = "https://acarepro.online/store/qiaoyumin/login/little/"
	// let baseURL = "/api/"
	let baseURL = "http://192.168.1.115:5005/api/c1/"
	// let baseURL = "http://139.9.194.151:9005/api/c1/"
	
	
	let imgUrl = "https://acarepro.online/IMGPATH/"
	
	window.baseURL = baseURL
	window.imgUrl = imgUrl
	let header = {
		token: uni.getStorageSync("token"),
	}
	if (options.header) {
		header = Object.assign(options.header, header)
	}
	if (
		options.url.includes("login/sale")
	) {
		header = {}
		baseURL = baseURL.replace("api/c1/",'')
	}
	if (!options.method) {
		options.method = "GET"
	}
	
	
	
	uni.request({
		url: baseURL + options.url,
		data: options.data ? options.data : {},
		method: options.method,
		header: header,
		success (res) {
			//处理产品的数据
			if ((options.url.includes("product") || options.url.includes("getShoppingCar")) && options.method=='GET' ) {
				// if (options.url.includes("getShoppingCar")) {
				// 	console.log(123123, res.data.data[0])
				// }
				if (res.data.data instanceof Array) {
					res.data.data.forEach(item => {
						// console.log(item)
						try {
							if (item.detail) {
								item.desc = JSON.parse(item.detail)
							} else {
								item.desc = JSON.parse(item.desc)
							}
							
							if (!item.desc.specification) {
								item.desc.specification = {}
							} else {
								item.specification = item.desc.specification.val1 + item.desc.specification.val2 + " × " + item.desc.specification.val3 + item.desc.specification.val4
							}
							item.proNumber = item.desc.proNumber
							item.viscosity = item.desc.viscosity
						} catch {
							console.log('catch', item.ID, item)
							item.desc = {}
						}
					})
				} else if (res.data.data instanceof Object) {
					let item = res.data.data
					try {
						item.desc = JSON.parse(item.desc)
						if (!item.desc.specification) {
							item.desc.specification = {}
						} else {
							item.specification = item.desc.specification.val1 + item.desc.specification.val2 + " × " + item.desc.specification.val3 + item.desc.specification.val4
						}
						item.proNumber = item.desc.proNumber
						item.viscosity = item.desc.viscosity
					} catch {
						console.log('catch', item.ID, item)
						item.desc = {}
					}
				}
			}
			
			options.success ? options.success(res) : null
		},
		fail (error) {
			console.log("err",error)
			options.fail ? options.fail(error) : null
		},
		complete (res) {
			// console.log("all", res)
			if (res.data) {
				if (res.data.code == 40002){
					uni.showToast({
						title: "登录状态过期，请重新登录",
						icon: "none"
					})
					uni.redirectTo({
						url: "/pages/login/login"
					})
				}
			}
			
			options.complete ? options.complete(res) : null
		},
	})
}
export default http