<template>
	<view>
		<Top></Top>
		<view>
			<view class="news bg-2" >
				<image class="news-img" src="../../static/img/city.png" mode=""></image>
				<view class="padding30">
					<view class="sb news-title">
						<view class="">
							<text class="color-7">回應區議員宣誓安排</text>
						</view>
						<view class="nowrap color-5">
							<text>2020-09-09 12:12</text>
						</view>
					</view>
					<view class="color-5 news-detial">
						<text>
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
							對於今天有報道指，特區政府有意於七月為區議員進行宣誓安排，民建聯立法會議員暨立法會...
						</text>
					</view>
					
					<view class="ju">
						<button class="bg-6 color-2 button" style="width: 40%;"
							@click="back"
							size="mini">返回上一頁</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			back () {
				uni.navigateBack()
			},
		}
	}
</script>

<style lang="less" scoped>
.news {
	// margin-bottom: 20upx;
}
.news-img {
	width: 750upx;
	height: 400upx;
}
.padding30 {
	padding: 30upx;
}
.news-title {
	margin-bottom: 30upx;
}
.nowrap {
	white-space: nowrap;
	margin-left: 20upx;
}
.news-detial {
	margin: 50upx 0upx
}
</style>
