<template>
	<view>
		<Top></Top>
		<view >
			<view v-for="(item,i) in dataList" class="bg-2 mb30 op" @click="toDetail(item)">
				<view class="padding30">
					<view class="al">
						<view class="ava ju al color-2 columns size27">
							<text>市</text>
							<text>民</text>
						</view>
						<text>黃小姐</text>
					</view>
					
					<view class="c2 width70 size25">
						<text>
							關於ABC街街燈失靈問題關於ABC街街燈失靈問題....關於ABC街街燈失靈問題關於ABC街街燈失靈問題....
						</text>
					</view>
					
					<view class="sb al">
						<view class="al">
							<view class="dot red"> </view>
							<text>未處理</text>
						</view>
						<text class="color-5 size23">10/12/2020</text>
					</view>
				</view>
				
				
				<image class="q-img" mode="aspectFill" src="../../static/img/home-img1.png"></image>
				
				
				
			</view>
			<view class="noMore op"  @click="toTop">已經沒有更多資料</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [1,2,3,4]
			};
		},
		methods:{
			toDetail (item) {
				uni.navigateTo({
					url: "/pages/question/questionDetail"
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
.mb30 {
	margin-bottom: 30upx;
	// padding: 30upx;
}
.padding30 {
	padding: 30upx;
}
.ava {
	width: 70upx;
	height: 70upx;
	border-radius: 50%;
	background: #C4C4C4;
	margin-right: 10upx;
}
.width70 {
	width: 70%;
	margin: 20upx 0;
}
.dot {
	width: 15upx;
	height: 15upx;
	border-radius: 10upx;
	margin-right: 10upx;
}
.red {
	background: red;
}
.q-img {
	width: 750upx;
	height: 400upx;
	display: block;
}
.noMore {
	margin: 90upx auto 30upx;
	text-align: center;
	padding-bottom: 30upx;
}
</style>
