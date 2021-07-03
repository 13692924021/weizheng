<template>
	<view class="bg-2">
		<view class="bar-height"></view>
		<swiper class="height200" :autoplay='true' interval="5000" circular :duration="200">
			<swiper-item class="height200">
				<image class="height200" src="../static/img/logo.png" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
		
		<view class="bg-6 relative">
			<view class="lIco" v-if="currentX>10"></view>
			<scroll-view class="categories color-2" scroll-x scroll-with-animation 
				@scrolltolower="scrolltolower"
			    @scroll="navScroll" :scroll-left="x">
				<view :class="['c-item-wrap', { act: index==i }]" :id="'cate' + i"
					v-for="(item,i) in categories" :key="item.i">
					<view :class="['c-item']" 
						@click="clickNav(item,i)"
						>{{item.Name}}</view>
				</view>
				
			</scroll-view>
			<view class="rIco" v-if="rIco"></view>
		</view>
		
		
		
		<view :class="['right-fix', { 'right-260': !showRightBtn }]">
			<view class="relative">
				<view class="fix-btn-text color-2 tc op" @click="toCreateQuestion">報告社區問題！</view>
				<view class="onOff al" @click="showRightBtn=!showRightBtn">
					<image v-if="!showRightBtn" class="rf-btn" src="../static/img/left1.png" mode="aspectFill"></image>
					<image v-else class="rf-btn" src="../static/img/close1.png" mode="aspectFill"></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"Top",
		data() {
			return {
				index: 0,
				categories: [
					{ Name: "首頁", url: "/pages/index/index" },
					{ Name: "新聞動態", url: "/pages/news/news" },
					{ Name: "活動詳情",url: "/pages/activity/activity" },
					{ Name: "預約會面" },
					{ Name: "社區問題", url: "/pages/question/question" },
				],
				x: 0,
				navMain: 0,
				currentX: 0, 
				rIco: true
			};
		},
		mounted () {
			this.initLeft()
		},
		computed: {
			showRightBtn: {
				get () { return this.$store.state.app.showRightBtn },
				set (val) {
					this.$store.commit("setAppData", { key: "showRightBtn", value: val })
				}
			}
		},
		methods:{
			toCreateQuestion () {
				uni.navigateTo({
					url: "/pages/question/createQuestion"
				})
			},
			scrolltolower (e) {
				// console.log(e,123)
				setTimeout(() => {
					this.rIco = false
				},50)
			},
			navScroll (e) {
				// console.log(e.detail.scrollLeft)
				this.rIco = true
				this.currentX = e.detail.scrollLeft
			},
			initLeft () {
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route //获取当前页面路由
				let url = "/" + routes[routes.length - 1].route; //获取路由参数
				// console.log(url)
				if (url.includes("index")) {
					this.initNav(this.categories[0],0)
				}
				if (url.includes("news")) {
					this.initNav(this.categories[1],1)
				}
				if (url.includes("activity")) {
					this.initNav(this.categories[2],2)
				}
				if (url.includes("question")) {
					this.initNav(this.categories[4],4)
				}
			},
			initNav (data,i) {
				let that = this
				this.index = i
				uni.createSelectorQuery().select(".categories").boundingClientRect(res => {
					let navMain = res.width
					that.navMain = res.width
					uni.createSelectorQuery().select("#cate" + i).boundingClientRect(res1 => {
						let item = res1.width
						that.x = item*i - navMain/2 + (item/2)
						// console.log(i, that.x)
					}).exec()
				}).exec()
			},
			clickNav (item,i) {
				uni.navigateTo({
					url: item.url
				})
			},
			
		}
	}
</script>

<style lang="less" scoped>
@import url("@/static/css/color.less");
// #ifdef APP-PLUS
.bar-height {
	height: var(鈥搒tatus-bar-height);
}
// #endif
.height200 {
	width: 750upx;
	height:250upx;
}
.c-item-wrap {
	// border: solid red 1px;
	// padding: 20upx 0;
	display: inline-block;
	// width: 187upx;
	// width: 180upx;
	width: 25%;
	text-align:center;
	padding: 18upx 0 8upx;
}
.c-item {
	display: inline-block;
	// padding-bottom: 10upx;
	padding-left: 8upx;
	padding-right: 8upx;
	// padding:13upx 0upx;
	// margin: 20upx;
}
.categories {
	width: 100%;
	white-space: nowrap;
	// padding-bottom: 15upx;
	// border: solid 1px;
}
.act {
	color: @color-8 !important;
	border-bottom: solid @color-8 10upx;
	background: rgba(226, 174, 73, 0.4)
}
.right-fix {
	width: 260upx;
	// border: solid red 1px;
	position: fixed;
	right: 0;
	top: 48%;
	z-index: 100;
	transition: 0.3s;
}
.right-260 {
	right: -260upx;
}
.onOff {
	position: fixed;
	right: 0;
	top: 48%;
	padding: 12upx;
	background: #BD2C30;
	z-index: 101;
	border-radius: 35upx 0 0 35upx;
}
.fix-btn-text {
	padding: 8upx 0;
	background: #BD2C30;
	border-radius: 35upx 0 0 35upx;
}
.rf-btn {
	width: 28upx;
	height: 28upx;
}
.lIco {
	width: 0;
	height: 0;
	border: solid transparent 15upx;
	border-right: solid #FFF 15upx;
	position: absolute;
	left: 5upx;
	top: 20upx;
}
.rIco {
	width: 0;
	height: 0;
	border: solid transparent 15upx;
	border-left: solid #FFF 15upx;
	position: absolute;
	right: 5upx;
	top: 20upx;
}

</style>
