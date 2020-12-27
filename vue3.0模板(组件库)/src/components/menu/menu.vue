<style lang="scss" scoped>
.myMenu {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background: #03583f;                     // menu背景色
	color: #FFF;
}
.menuItem {
	a {
		width: 100%;
		padding: 15px;
		display: block;
		border-bottom: solid #CCC 1px;
		cursor: pointer;
		box-sizing: border-box;
		transition: 0.3s;
	}
	a:hover {
		color: #0bc6f5 !important;
	}
	position: relative;
}
.menuBox {
	text-indent: 1em;
	background:#038b63;             // 展开的子菜单的背景色
	transition: 0.3s linear;
	max-height: 0px;
	overflow:hidden;
}
.menuI {
	display: block;
	position: absolute;
	right: 10px;
	top: 19px;
	width: 0px;
	height: 0px;
	border: solid transparent 8px;
	border-top:solid #FFF 8px !important;
	transition: 0.3s linear;
	border-bottom: 0 !important;
}
.rotate180 {
	transform: rotate(180deg);
}
</style>

<template>
    <div class="myMenu">
		<div v-for="(item,i) in dataList" :key="i">
			<div class="menuItem" v-if="item.children.length==0"><a @click="active(item)">{{item.name}}</a></div>
			<div v-else class="menuItem">
				<a @click="changeExpand(i)">{{item.name}}</a>
				<i :class="['menuI', { rotate180:item.expand }]"></i>
				<div :class="['menuBox']" :style="{ 'max-height': item.expand ? item.children.length*55+'px' : '0' }">
					<div v-for="(child,i) in item.children" :key="i" class="menuItem">
						<a @click="active(item)">{{child.name}}</a>
					</div>	
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
// {                          dataList的格式
// 	path:"/index/table",
// 	name: "折叠",
// 	children: [
// 		{
// 			path:"/index/table",
// 			name: "子菜单1",
// 			children: []
// 		}
// 	]
// },
export default {
	props: ['list'],
	data () {
		return {
			dataList: []
		}
	},
	watch: {
		list () {
			this.init()
		}
	},
	created () {
		this.init()
	},
	methods:{
		//点击菜单
		active (item) {
			this.$emit("active",item)
		},
		init () {
			this.dataList = JSON.parse(JSON.stringify(this.list))
			this.dataList.forEach(item => {
				item.expand = false
			})
		},
		changeExpand (i) {
			this.dataList[i].expand = !this.dataList[i].expand
			console.log(this.dataList[i])
		}
	}
}
</script>

