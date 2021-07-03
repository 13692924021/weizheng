<template>
	<view>
		<Top></Top>
		<view class="padding-top45">
			<view class="modal-main color-5">
				<view class="mt20 tc"><text>感謝您的報名</text></view>
				<view class="ju mt20">
					<image src="../../static/img/success.png" mode="aspectFill" class="successImg mt20"></image>
				</view>
				<view class="mt20 tc"> <text>已確認提交</text>  </view>
				
				<view class="mt20 tc"> <text>參考編號：</text>  </view>
				<view class="tc"> <text>81726378216397</text>  </view>
				
				<view class="mt20 tc"> <text>報名活動：變革香港講座</text>  </view>
				<view class="tc"> <text>活動時間：2022-07-07 16:00-18:00</text>  </view>
				
				<view class="tc margint100 color-1">
					<text>( {{s}} )...秒後自動返回</text>
				</view>
				
				<view class="mt20 ju">
					<button class="primaryBtn width50p" size="mini" @click="back">返回活動頁面</button>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				timer: null,
				s: 5
			}
		},
		mounted () {
			this.timer = setInterval(() => {
				this.s--
				if (this.s < 0) {
					clearInterval(this.timer)
					uni.navigateBack()
				}
			}, 1000)
		},
		beforeDestroy () {
			clearInterval(this.timer)
		},
		methods: {
			back () {
				uni.navigateBack( )
			}
		}
	}
</script>

<style>
</style>
