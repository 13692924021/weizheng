<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import url("@/static/css/color.less");
	page {
		background-color: @color-4;
		font-size: 28upx;
		height: 100%;
		color: #000;
	}
	.noData {
		color: @color-5;
		padding: 30upx 0;
		text-align: center;
	}
	@keyframes rotate {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
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
	.primaryBtn {
		background: @color-6;
		color: @color-2;
		&:active {
			opacity: 0.8;
		}
	}
	.button {
		border-radius: 8upx;
		&:active {
			opacity: 0.8;
		}
	}
	.input {
		border: solid #CBCBCB 1px;
		border-radius: 10upx;
		padding: 5upx 10upx;
	}
	
	.modal-main {
		width: 670upx;
		padding: 40upx;
		background: #FFF;
		margin: auto;
		border-radius: 20upx;;
	}
	.date-box {
		width: 35%;
	}
	.time-box {
		width: 65%;
	}
	.mt20 {
		margin-top: 25upx;
	}
	.picker1 {
		width: 80%;
		padding: 25upx 0;
		text-align: center;
		border: solid @color-6 1px;
		border-radius: 15upx;
	}
	.picker2 {
		width: 80%;
		padding: 25upx 0;
		text-align: center;
		border: solid @color-6 1px;
		border-radius: 15upx;
	}
	.flex6 {
		flex: 6;
		margin-left: 20upx;
	}
	.label1 {
		width: 120upx;
	}
	.button {
		width: 150upx;
		padding: 0upx 15upx !important;
	}
	.width61 {
		width: 58%;
	}
	.radio {
		width: 15upx;
		height: 15upx;
		border: solid 1px;
		border-radius: 50%;
		margin-right: 10upx;
		transition: 0.3s;
	}
	.act {
		background: #000;
	}
	.mleft20 {
		margin-left: 40upx;
	}
	.margin0 {
		margin: 0;
	}
	.width63 {
		width: 63%;
		padding: 8upx 0 !important;
		margin-top: 30upx;
	}
	.successImg {
		width: 230upx;
		height: 230upx;
	}
	.margint100 {
		margin-top: 100upx;
	}
	.width50p {
		width: 50%;
	}
	.padding-top45 {
		padding-top: 45upx;
	}
	
	// ================================
	
	.textarea {
		border: solid #CBCBCB 1px;
		padding: 10upx;
	}
	
</style>
