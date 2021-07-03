<template>
	<view>
		<Top></Top>
		<view>
			<view class="noData" v-if="activity.length===0">暫無新聞</view>
			<view class="news bg-2 op" v-for="(item,i) in activity" @click="toDetail(item)">
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activity: [1,2,3]
			};
		},
		methods:{
			toDetail (item) {
				uni.navigateTo({
					url: "/pages/activity/activityDetail"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.news {
	// margin-bottom: 20upx;
}

</style>
