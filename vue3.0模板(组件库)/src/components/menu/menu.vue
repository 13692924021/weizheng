<style lang="scss" scoped>
.myMenu {
	width: 100%;
	height: 100%;
	overflow-y: auto;
}
</style>

<template>
    <div class="myMenu">
		<div v-for="(item,i) in list" :key="i">
			<a>{{item.title}}</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ['list'],
	created () {
		console.log(this.list)
	}
}
</script>

