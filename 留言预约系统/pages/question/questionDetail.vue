<template>
	<view>
		<Top></Top>
		<view >
			<view class="bg-2 padding30">
				<swiper :indicator-dots="true" class="height300" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item class="height300">
						<image src="../../static/img/city.png" mode="aspectFill" class="height300"></image>
					</swiper-item>
				</swiper>
				
				<view class="size33 title">
					<text>
						關於ABC街街燈失靈問題關於ABC街街燈失靈問題....
					</text>
				</view>
				
				<view class="size26 plr10">
					<view class="mb20">
						<text>熱心市民：</text>
						<text>陳先生</text>
					</view>
					
					<view class="sb mb20">
						<view>
							<text>上報日期：</text>
							<text class="color-6">2020-01-01</text>
						</view>
						<view>
							<text>處理日期：</text>
							<text style="color:#179A16">2020-01-02</text>
						</view>
					</view>
					
					<view class="mb20">
						<text>事　　件：</text>
						<text>關於ABC街街燈失靈問題關於ABC街街燈失靈問題關於ABC街街燈失靈問題關於ABC街街燈失靈問題</text>
					</view>
				</view>
				
				<view class="response size24">
					<text>處理回復：</text>
					<view class="margint">
						<text>
							感謝市民上報問題，A街區議員已聯絡相關部門跟蹤並且完成維修工程。
						</text>
					</view>
				</view>
			</view>
			
			<view class="list size26">
				<view :class="['msg-item', { 'flex-end':i%2 }]" v-for="(item,i) in list" :key="i">
					<view class="msg-main bg-2">
						<view class="flex">
							<view class="ava ju al color-2 columns size27">
								<text>市</text>
								<text>民</text>
							</view>
							<text class="pt20">{{item.name}}:</text>
							<view class="msg-content">{{item.val}}</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="bg-2 color-5 padding30">
				<view ><text>匿名留言</text></view>
				
				<view class="al mt10">
					<input type="text" v-model="first_name" class="input width200" placeholder="你的姓氏" />
					<view class="al margin-left30">
						<view class="al" @click="sex=1">
							<view :class="['radio', { act: sex==1 }]"></view>
							<text>先生</text>
						</view>
						
						<view class="al mleft20" @click="sex=2">
							<view :class="['radio', { act: sex==2 }]"></view>
							<text>女士</text>
						</view>
					</view>
				</view>
				
				<view class="al sb mt10">
					<view class="width66 al sb">
						<input type="text" v-model="phone" placeholder="電話號碼" style="width:43%;" class="input" />
						<input type="text" placeholder="驗證碼" v-model="code" style="width:43%;" class="input" />
					</view>
					<view class="width34 flex-end">
						<button @click="getCode" v-model="code" class="primaryBtn sendCodeBtn" size="mini" v-if="reGet">發送驗證碼</button>
						<button class="primaryBtn sendCodeBtn" size="mini" v-else disabled>({{second}})</button>
					</view>
				</view>
				
				<view class="sb mt10">
					<view class="width66 al sb">
						<textarea v-model="content" class="textarea" style="height: 100upx;" placeholder="留言訊息" />
					</view>
					<view class="width34 flex-end">
						<button :loading="loading" @click="sub" class="primaryBtn sendBtn" size="mini">發送</button>
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
				detail: {},
				list: [
					{ name: "黃小姐",val: "我也有遇上這個問題" },
					{ name: "黃小姐",val: "我也有遇上這個問題" },
					{ name: "黃小姐",val: "我也有遇上這個問題我也有遇上這個問題我也有遇上這個問題我也有遇上這個問題" },
					{ name: "黃小姐",val: "我也有遇上這個問題" },
				],
				sex: 1,
				loading: false,
				reGet: true,
				second: 60,
				timer: null,
				phone: "",
				first_name: "",
				code: "",
				content: "",
			};
		},
		onShow () {
			this.calc()
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods:{
			sub () {
				let that = this
				if (that.loading) { return false }
				if (!that.first_name) {
					that.warning('請輸入姓氏')
				}
				else if (!that.phone) {
					that.warning('請輸入聯絡號碼')
				}
				else if (!that.code) {
					that.warning('請輸入驗證碼')
				}
				else {
					that.loading = true
					// uni.navigateTo({
					// 	url: "/pages/activity/bookingSuccess"
					// })
				}
			},
			toDetail (item) {
				uni.navigateTo({
					url: "/pages/news/newsDetail"
				})
			},
			calc () {
				clearInterval(this.timer)
				let second = uni.getStorageSync("second2")
				if (second) {
					this.second = Math.ceil((second - Date.now()) / 1000)
					if (this.second > 1) {
						this.reGet = false
					}
					this.timer = setInterval(() => {
						this.second = Math.ceil((second - Date.now()) / 1000)
						// console.log(this.second)
						if (this.second < 1) {
							this.reGet = true
							clearInterval(this.timer)
							uni.removeStorageSync("second2")
						} else {
							this.reGet = false
						}
					}, 1000);
				}
				
			},
			getCode () {
				let that = this
				if (!that.phone) {
					that.warning('請輸入聯絡號碼')
					return false
				}
				this.reGet = false
				uni.setStorageSync("second2", Date.now() + 300000)
				this.calc()
				
				// uni.request({
				// 	url:that.$store.state.app.baseURL + "smsCode",
				// 	method:"POST",
				// 	data: {
				// 		telephone: that.phone,
				// 	},
				// 	success (res) {
				// 		console.log(res)
				// 		if (res.data.code == 200) {
				// 			uni.showToast({
				// 				title:"验证码已发送",
				// 				icon: "none"
				// 			})
				// 		} else {
				// 			uni.showToast({
				// 				title:"发送失败,请稍后再试",
				// 				icon: "none"
				// 			})
				// 		}
				// 	},
				// 	fail() {
				// 		uni.showToast({
				// 			title:"发送失败,请稍后再试",
				// 			icon: "none"
				// 		})
				// 	}
				// })
			},
		}
	}
</script>

<style lang="less" scoped>

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

.height300 {
	width: 100%;
	height: 400upx;
}
.title {
	margin: 10upx 0 30upx;
}
.mb20 {
	margin-bottom: 20upx;
}
.plr10 {
	padding: 0 10upx;
}
.response {
	padding: 30upx 40upx 50upx;
	background: #C8FFCD;
	border-radius: 20upx;
}
.margint {
	margin-top: 10upx;
}
.msg-item {
	margin: 30upx;
}
.msg-main {
	padding: 20upx 30upx;
	width: 80%;
	border-radius: 10upx;
}
.msg-content {
	// border: solid 1px;
	flex: 10;
	padding-left: 40upx;
	padding-top: 15upx;
}
.pt20 {
	padding-top: 15upx;
}
.margin-left30 {
	margin-left: 30upx;
}
.width200 {
	width: 150upx;
}
.width66 {
	width: 66%;
}
.width34 {
	width: 34%;
}
.mt10 {
	margin-top: 15upx;
}
.sendBtn {
	margin: 0;
	width: 90%;
	height: 60upx;
}
.sendCodeBtn {
	margin: 0;
	width: 90%;
}

</style>
