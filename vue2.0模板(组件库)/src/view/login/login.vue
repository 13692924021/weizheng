<style lang="less" scoped>
.loginBg {
	height: 100vh;
	background: #000000;
}
.loginMain {
	border: solid #fff 1px;
	padding: 20px;
	position: fixed;
	width: 500px;left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius:10px;
}
.formItem {
	position: relative;
	padding-top: 20px;
	padding-bottom: 30px;
	width:80%;
	margin: auto;
	input {
		width: 100%;
		outline: none;
		border: none;
		background: #000000;border-bottom: solid #fff 2px;
		padding: 8px 0;
		color: #FFF;
	}
	input:focus ~ label,input:valid ~ label {
		top: 0!important;
		font-size: 12px !important;
	}
	label {
		transition: 0.5s;
		position: absolute;
		left: 0;
		top: 14px;
		pointer-events: none;
	}
}
.loginBtn {
	padding: 10px 20px;
	display: block;
	width: 100px;
	background: #07acf8;
	margin:30px auto;
	text-align:center;
	cursor: pointer;
	user-select: none;
	transition: 0.9s;
	color: #FFF;
	&:hover {
		box-shadow: 0 0 25px  #07acf8,0 0 50px  #07acf8,0 0 75px  #07acf8,0 0 100px  #07acf8;
	}
}
</style>

<template>
    <div class="loginBg">
		<div class="loginMain whiteColor">
			<h1 class="ju" style="margin: 40px 0;">Components</h1>

			<div class="formItem size16">
				<input type="text" required="">
				<label >USERNAME</label>
			</div>

			<div class="formItem size16">
				<input type="password" required="">
				<label >PASSWORD</label>
			</div>

			<a class="loginBtn size20 bold op" @click="login">Login</a>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods:{
		login () {
			this.$router.push("/index")
		}
	}
}
</script>

