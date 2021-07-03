<template>
	<view class="bg-2">
		<Top ref="Top"></Top>
		<view class="swiperBg relative">
			<!-- <view class="color-2 size40 abso-text">
				<view>積極參與管制</view>
				<view>推動社會變革</view>
			</view>
			
			<image src="../../static/img/main.png" mode="aspectFill" class="fullImg"></image> -->
			<swiper class="fullImg" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="300">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/img/main.png" mode="aspectFill" class="fullImg"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="btn-wrap sa">
			<view :class="['tab op', {act1: index==0}]" @click="index=0">最新新聞</view>
			<view :class="['tab op', {act1: index==1}]" @click="index=1">最新活動</view>
		</view>
		
		<view v-show="index==0">
			<view class="news bg-2 op" v-for="(item,i) in news" @click="toDetail(item)">
				<image class="news-img" src="../../static/img/city.png" mode=""></image>
				<view class="padding30">
					<view class="sb news-title">
						<view class="c1">
							<text class="color-7">回應區議員宣誓安排</text>
						</view>
						<view class="nowrap color-5">
							<text>2020-09-09 12:12</text>
						</view>
					</view>
					<view class="c2 color-5">
						<text>
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
						</text>
					</view>
				</view>
			</view>
			<view class="noMore op" @click="toTop">已經沒有更多資料</view>
		</view>
		
		<view v-show="index==1">
			<view class="news bg-2 op" v-for="(item,i) in active" @click="toDetail1(item)">
				<image class="news-img" src="../../static/img/city.png" mode=""></image>
				<view class="padding30">
					<view class="sb news-title">
						<view class="c1">
							<text class="color-7">回應區議員宣誓安排</text>
						</view>
						<view class="nowrap color-5">
							<text>2020-09-09 12:12</text>
						</view>
					</view>
					<view class="c2 color-5">
						<text>
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
						</text>
					</view>
				</view>
			</view>
			<view class="noMore op"  @click="toTop">已經沒有更多資料</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				news: [1,2,3,4,5],
				active: [1,2,3]
			}
		},
		onLoad() {

		},
		onShow () {
			
		},
		methods: {
			toDetail (item) {
				uni.navigateTo({
					url: "/pages/news/newsDetail"
				})
			},
			toDetail1 (item) {
				uni.navigateTo({
					url: "/pages/activity/activityDetail"
				})
			},
			toTop () {
				uni.pageScrollTo({
					scrollTop:0,
					duration: 100
				})
			}
		}
	}
</script>

<style lang="less" scoped>
@import url("@/static/css/color.less");
.fullImg {
	width: 100%;
	height: 420upx;
	// margin-bottom: 50upx;
}
.abso-text {
	position: absolute;
	left: 90upx;
	top: 80upx;
}

.swiperBg {
	background: #0063BF;
}
.btn-wrap {
	padding-top: 10upx;
}
.tab {
	padding: 15upx 30upx;
	text-align: center;
	border-bottom: solid 10upx transparent;
}
.act1 {
	border-bottom: solid 10upx @color-8;
}

.noMore {
	margin: 90upx auto 30upx;
	text-align: center;
	padding-bottom: 30upx;
}

</style>
