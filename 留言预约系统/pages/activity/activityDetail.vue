<template>
	<view>
		<Top></Top>
		<view>
			<view class="news bg-2" >
				<image class="news-img" src="../../static/img/city.png" mode=""></image>
				<view class="padding30">
					<view class="sb al">
						<view class="">
							<text class="color-7">回應區議員宣誓安排</text>
						</view>
						<view class="nowrap color-5">
							<!-- <text>2020-09-09 12:12</text> -->
							<button class="primaryBtn" size="mini" @click="showModal"><text>報名參加</text></button>
						</view>
					</view>
					<view class="news-title color-5">
						<text>2020-09-09 16:00-18:00</text>
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
		
		<!-- 填寫資料 -->
		<Pop ref="modal" style="z-index:200">
			<view class="modal-main">
				<view><text class="size33">業主講座</text></view>
				<view><text class="size27">地址地址地址地址地址地址地址地址地址地址地址地址</text></view>
				
				<view class="sb mt20">
					<view class="date-box">
						<view><text>日期</text></view>
						<picker mode="date" @change="chooseDate" class="picker1 mt20">
							<view class="color-6 size27">{{date ? date.slice(5) : '選擇日期'}}</view>
						</picker>
					</view>
					<view class="time-box">
						<view><text>時間</text></view>
						<picker mode="selector" :range="timeList" class="picker2 mt20" @change="chooseTime">
							<view class="color-6 size27">{{time ? time : "選擇時間"}}</view>
						</picker>
					</view>
				</view>
				
				<view class="mt20"><text>聯絡資料</text></view>
				<view class="mt20">
					<view class="al">
						<view style="flex:4" class="al">
							<text>姓：</text>
							<input class="input" type="text" v-model="first_name" />
						</view>
						
						<view class="flex6 al">
							<text>名：</text>
							<input class="input" type="text" v-model="last_name" />
						</view>
					</view>
					
					<view class="mt20 al">
						<view class="al" @click="sex=1">
							<view :class="['radio', { act: sex==1 }]"></view>
							<text>先生</text>
						</view>
						
						<view class="al mleft20" @click="sex=2">
							<view :class="['radio', { act: sex==2 }]"></view>
							<text>女士</text>
						</view>
					</view>
						
					<view class="al mt20">
						<view class="label1 sb">
							<text>聯</text>
							<text>絡</text>
							<text>號</text>
							<text>碼</text>
						</view>
						：
						<view class="al sb" style="flex:10;">
							<input type="number" class="input width61" v-model="phone" />
							<view class="al">
								<button v-if="reGet" @click="getCode" class="bg-6 button color-2" size="mini">獲取驗證碼</button>
								<button v-else disabled class="bg-6 button color-2" size="mini">({{second}})</button>
							</view>
							
						</view>
					</view>
					
					<view class="al mt20">
						<view class="label1 sb">
							<text>驗</text>
							<text>證</text>
							<text>碼</text>
						</view>
						：
						<view class="al sb" style="flex:10;">
							<input type="text" class="input width61" v-model="code" />
						</view>
					</view>
					
					<view class="al mt20 color-2">
						<view class="label1 sb">
							
						</view>
						：
						<view class="al" style="flex:10;">
							<button @click="sub" :loading="loading" class="bg-6 color-2 margin0 width63 op" size="mini">確認預約</button>
						</view>
					</view>
						
				</view>
				
				
			</view>
		</Pop>
	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: "",
				time: "",
				timeList: [
					"08:00-10:00",
					"10:00-12:00",
					"14:00-16:00",
					"16:00-18:00",
				],
				sex: 1,
				first_name: "",
				last_name: "",
				phone: "",
				code: "",
				loading: false,
				reGet: true,
				second: 60,
				timer: null,
			};
		},
		mounted () {
			// this.showModal()
		},
		onShow () {
			this.calc()
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods:{
			calc () {
				clearInterval(this.timer)
				let second = uni.getStorageSync("second1")
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
							uni.removeStorageSync("second1")
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
				uni.setStorageSync("second1", Date.now() + 300000)
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
			sub () {
				let that = this
				if (that.loading) { return false }
				if (!that.date) {
					that.warning('請選擇日期')
				}
				else if (!that.time) {
					that.warning('請選擇時間')
				}
				else if (!that.first_name) {
					that.warning('請輸入姓氏')
				}
				else if (!that.last_name) {
					that.warning('請輸入名字')
				}
				else if (!that.phone) {
					that.warning('請輸入聯絡號碼')
				}
				else if (!that.code) {
					that.warning('請輸入驗證碼')
				}
				else {
					that.loading = true
					uni.navigateTo({
						url: "/pages/activity/bookingSuccess"
					})
				}
			},
			showModal () {
				this.$refs.modal.open()
			},
			back () {
				uni.navigateBack()
			},
			chooseDate (e) {
				// console.log(e)
				this.date = e.detail.value
			},
			chooseTime (e) {
				// console.log(e)
				this.time = this.timeList[e.detail.value]
			}
		}
	}
</script>

<style lang="less" scoped>
@import url("@/static/css/color.less");
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
