<style lang="less" scoped>
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
		color: #FFF;
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
.act {
	background: #10103d !important; 
}
</style>

<template>
    <div class="myMenu">
		<div v-for="(item,i) in dataList" :key="i">
			<div :class="['menuItem', {act: act==item.name}]" v-if="item.children.length==0"><a @click="active(item)">{{item.name}}</a></div>
			<div v-else class="menuItem">
				<a @click="changeExpand(i)">{{item.name}}</a>
				<i :class="['menuI', { rotate180:item.expand }]"></i>
				<div :class="['menuBox']" :style="{ 'max-height': item.expand ? item.children.length*55+'px' : '0' }">
					<div v-for="(child,i) in item.children" :key="i"  :class="['menuItem', {act: act==child.name}]">
						<a @click="active(child)">{{child.name}}</a>
					</div>	
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
// {                          dataList的格式
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
	props: ['list', "activeName"],
	data () {
		return {
			dataList: [],
			act: "",      //当前高亮的菜单
		}
	},
	watch: {
		list () {
			this.init()
		},
		activeName () {
			this.act = this.activeName
		}
	},
	created () {
		this.init()
		this.act = this.activeName
	},
	methods:{
		//点击菜单
		active (item) {
			this.act = item.name
			this.dataList.forEach(item => {
				if (!item.children.find( c => c.name == this.act )) {
					item.expand = false
				}
			})
			this.$emit("active",item)
		},
		init () {
			this.dataList = JSON.parse(JSON.stringify(this.list))
			this.dataList.forEach(item => {
				item.expand = false
				let childActive = item.children.find(c => {
					return c.name == this.activeName
				})
				if (childActive) { item.expand =true }
			})
		},
		changeExpand (i) {
			this.dataList.forEach((item, j) => {
				if (j != i) {
					item.expand = false
				}
			})
			this.dataList[i].expand = !this.dataList[i].expand
		}
	}
}
</script>

