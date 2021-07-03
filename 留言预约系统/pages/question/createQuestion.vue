<template>
	<view>
		<Top></Top>
		<view class="padding30 bg-2 color-5">
			<input type="text" class="input" v-model="title" placeholder="輸入標題..." />
			<Edit class="editor" @input="enter"></Edit>
			
			<view class="al mt20">
				<input type="text" class="input width201" v-model="name" placeholder="你的真實姓名..." />
				
				<view class="al margin-left30 color-1">
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
			
			<view class="al sb mt20">
				<picker class="input width33" mode="selector" range-key="name" :range="areaList" @change="changeArea">
					<view class="relative">
						<text>{{area ? area : "選擇地區"}}</text> 
						<view class="sanjiao"></view>
					</view>
				</picker>
				<input class="input width60" placeholder="發生地址" v-model="address" />
			</view>
			
			<view class="mt20 sb">
				<input type="text" v-model="phone" placeholder="聯絡號碼" class="input width60" />
				<button class="primaryBtn margin0" size='mini'>獲取驗證碼</button>
			</view>
			
			<view class="mt20 sb">
				<input type="text" v-model="code" placeholder="驗證碼" class="input width60" />
			</view>
			
			<view class="tc size35 mt40"><text>上傳圖片或影片 (如有需要)</text></view>
			<view class="clearBoth mt20">
				<view class="file-preview ju al op">+</view>
			</view>
			<view class="mt40">
				<button class="primaryBtn" @click="sub" :loading="loading">確認提交</button>
			</view>
			
			
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				content: "",
				name: "",
				sex: 1,
				area: "",
				phone: "",
				code: "",
				address:"",
				loading: false,
				areaList: [
					{ id: 1, name: "雙龍" },
					{ id: 2, name: "荃灣" },
				]
			};
		},
		methods:{
			changeArea (e) {
				this.area = this.areaList[e.detail.value].name
			},
			enter (e) {
				console.log(e)
			},
			sub () {
				uni.navigateTo({
					url: "/pages/question/subSuccess"
				})
				let that = this
				if (that.loading) { return false }

				else if (!that.name) {
					that.warning('請輸入姓名')
				}
				else if (!that.area) {
					that.warning('請選擇地區')
				}
				else if (!that.address) {
					that.warning('請輸入地址')
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
						url: "/pages/question/subSuccess"
					})
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("@/static/css/color.less");
.editor {
	border: solid #CBCBCB 1px;
	margin-top: 20upx;
	border-radius: 15upx;
	overflow: hidden;
}
.width201 {
	width: 400upx;
}
.margin-left30 {
	margin-left: 30upx;
}
.mt20 {
	margin-top: 20upx;
}
.width33 {
	width: 33%;
}
.width60 {
	width: 60%;
}
.margin0 {
	margin: 0;
}
.mt40 {
	margin-top: 40upx;
}
.file-preview {
	font-size: 120upx;
	background: @color-4;
	padding: 10upx 0;
}
.sanjiao {
	border: solid transparent 10upx;
	border-top: solid @color-5 10upx;
	border-bottom: 0;
	position: absolute;
	right: 0;
	top: 33%;
}

</style>
