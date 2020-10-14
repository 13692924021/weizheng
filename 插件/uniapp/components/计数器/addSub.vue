<style lang="less" scoped>
	.addsubrap {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20upx 0;
		width: 140upx;
		// border: solid red 1px;
	}
	.addSubBtn {
		// border: solid black 1px;
		width: 30upx;
		height: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		font-weight: bold;
		box-sizing: border-box;
		border-radius: 50%;
		background: #DE0124;
		color: white;
		transform: scale(1.2);
		position: relative;
	}
	.addSubBtn:active {
		opacity: 0.6;
	}
	.numInput {
		width: 80upx;
		text-align: center;
	}
	.ADD::after,.SUB::after{
		width: 15upx;
		height: 4upx;
		background: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		content: "";
		display: block;
	}
	.SUB::before{
		width: 15upx;
		height: 4upx;
		background: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%) rotate(90deg);
		content: "";
		display: block;
	}
</style>

<template>
	<view class="addsubrap">
		<view class="addSubBtn ADD ju al"  @click="change(false)"></view>
		<view>
			<input class="numInput" disabled @blur='onChange' type="text" @input="inputNum($event)" v-model="index" />
		</view>
		<view class="addSubBtn SUB" @click="change(true)"></view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				index: 0
			}
		},
		props: {
			num: {
				default: 1
			},
			max: {
				default:100
			},
			min: {
				default:0
			}
		},
		mounted () {
			this.index = this.num
		},
		watch:{
			num (val) {
				this.index = val
				
				// 输入空白默认0
				if (val == "") {
					setTimeout(() => {
						this.index = "0"
					},100)
				}
			},
		},
		methods: {
			// 输入框失焦事件
			onChange (e) {
				// 输入空白默认0
				let num = e.detail.value
				if (num == ""){
					this.index = "0"
				}
				this.finish()
			},
			// 点击 加减
			change (e) {
				if (e) {
					this.index++
					if (this.index > this.max) {
						this.index = this.max
					}
				} else {
					this.index--
					if (this.index < this.min) {
						this.index = this.min
					}
				}
				this.finish()
			},
			inputNum (e) {
				this.index = e.detail.value
				this.finish()
			},
			finish() {
				this.$emit('changeNum',this.index)
			}
		}
	}
</script>


