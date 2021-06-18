<template>
	<view class="bg-2">
		<view class="bar-height"></view>
		<swiper class="height200" :autoplay='true' interval="5000" circular :duration="200">
			<swiper-item class="height200">
				<image class="height200" src="../static/img/logo.png" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
		
		<scroll-view class="bg-2 categories" scroll-x scroll-with-animation :scroll-left="x">
			<view class="c-item-wrap" :id="'cate' + i"
				v-for="(item,i) in categories" :key="item.i">
				<view :class="['c-item', { act: index==i }]" 
					@click="clickNav(item,i)"
					>{{item.Name}}</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"Top",
		data() {
			return {
				index: 0,
				categories: [
					{ Name: "首頁" },
					{ Name: "新聞動態" },
					{ Name: "活動詳情" },
					{ Name: "預約會面" },
				],
				x: 0,
			};
		},
		methods:{
			clickNav (item,i) {
				let that = this
				this.index = i
				uni.createSelectorQuery().select(".categories").boundingClientRect(res => {
					let navMain = res.width
					uni.createSelectorQuery().select("#cate" + i).boundingClientRect(res1 => {
						let item = res1.width
						that.x = item*i - navMain/2 + (item/2)
					}).exec()
				}).exec()
			},
		}
	}
</script>

<style lang="less" scoped>
// #ifdef APP-PLUS
.bar-height {
	height: var(鈥搒tatus-bar-height);
}
// #endif
.height200 {
	width: 750upx;
	height:200upx;
}
.c-item-wrap {
	// border: solid red 1px;
	// padding: 20upx 0;
	display: inline-block;
	width: 190upx;
	text-align:center;
}
.c-item {
	display: inline-block;
	// padding:13upx 0upx;
	// margin: 20upx;
}
.categories {
	white-space: nowrap;
}
.act {
	color: blue !important;
}
</style>
