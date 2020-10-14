<style lang="scss" scoped>
.ConfirmWrap {
	width: 80%;
	margin: auto;
	background: white;
	border-radius: 20upx;
}
.confirmTitle {
	padding: 20upx 0;
	text-align: center;
	color: #DE0124;
	font-size: 35upx;
	
}
.confirmText {
	color: black;
	font-size: 30upx;
	padding: 0 30upx;
}
.conCancel,.conOk {
	flex:5;
	padding: 20upx;
	margin-top: 10upx;
}
.conCancel {
	border-top: solid #CCC 1px;
	box-sizing: border-box;
}
.conOk {
	background: #DE0124;
	color: white;
}
.conBtnWrap {
	border-radius: 0 0 20upx 20upx;
	overflow: hidden;
}
</style>

<template>
	<view>
		<uniPopup type="center" ref="confirm" :maskClick="false">
			<view class="ConfirmWrap">
				<view class="confirmTitle">提示</view>
				<view class="confirmText">{{text}}</view>
				<view class="ju conBtnWrap">
					<view class="conCancel ju al op" @click="tapBtn(false)">取消</view>
					<view class="conOk ju al op" @click="tapBtn(true)">确定</view>
				</view>
			</view>
		</uniPopup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ["show","text"],
		watch: {
			show (val) {
				if (val) {
					setTimeout(() => {
						this.$refs.confirm.open()
					},100)
				} else {
					setTimeout(() => {
						this.$refs.confirm.close()
					},100)
				}
				// console.log("show", val)
			}
		},
		methods:{
			tapBtn (boo) {
				if (boo) {
					this.$emit("confirm",true)
				} else {
					this.$emit("confirm",false)
				}
			}
		}
	}
</script>


