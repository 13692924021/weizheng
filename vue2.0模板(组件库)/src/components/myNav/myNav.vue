<style lang="less" scoped>
.myNav {
    width: 100%;
    max-width: 100%;
    display: inline-block;
    white-space: nowrap;
    >div {
        display: inline-block;
        vertical-align: middle;
    }
    justify-content: space-between;
    align-items: center;
    >div:first-child, >div:last-child {
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            transform: scale(1.1);
        }
    }
}
.navMain {
    box-sizing: border-box;
    width: calc(100% - 2px);
    height: 50px;                            // nav的高度
    position: relative;
    overflow-x: auto;
    margin: 0 10px;
    position: relative;

}
.leftDir {
    width: 0;
    height: 0;
    border-left:0;
    border-right:solid 10px #10103d;          //左尖嘴颜色
    border-top:solid 10px transparent;
    border-bottom:solid 10px transparent;
}
.rightDir {
    width: 0;
    height: 0;
    border-right:0;
    border-left:solid 10px #333;           //右尖嘴颜色
    border-top:solid 10px transparent;
    border-bottom:solid 10px transparent;
}
.longBox {
    // width: 100%;
    height: 100%;
    // border: solid red 1px;
    display: inline-block;
    transition: 0.3s linear;
    box-sizing: border-box;
    white-space: nowrap;
    div { box-sizing: border-box;transition: 0.3s linear; }
    >div{
        display: inline-block;
        width: 200px;
        height: 100%;
        >div {
            // border: solid #000 1px;
            cursor: pointer;
            user-select: none;
            width: 100%;
            height: 100%;
            // border-right: transparent 1px solid;
        }
    }
}
.act {
    color:#FFF;
    background: #10103d !important;
}
</style>

<template>
    <div class="myNav">
        <div class="leftDir" @click="preNext(true)"></div>
        <div class="navMain noBar" ref="navMain">
            <div class="longBox" :style="{ left: left+'px' }">

                <!-- 每一个tab   -->
                <div v-for="(item,i) in list" :key="i" @click="handleClick(item,i)" :ref="'nav'+i"  :style="{ width: itemWidth }">
                    <div :class="['ju al', { act: i==act }]" >
                        {{item.name}}
                    </div>
                    
                </div>


            </div>
        </div>
        <div class="rightDir" @click="preNext(false)"></div>
    </div>
</template>

<script>
/*
    参数
        active: 0      当前高亮
        list：[]       nav；列表
        num: 5         一页显示多少个tab
    事件
        on-click       点击一个nav触发挂载点的自定义事件， 参数是被点击的JSON
*/
export default {
    data () {
        return {
            act: 0,
            left: 0,
            itemWidth: "100px"
        }
    },
    props: {
        list: {
            default: () => []
        },
        active: {
            default: 0
        },
        num: {
            default: 5
        },
    },
    watch: {
        active: {
            handler (val) {
                if (this.list[val]) {
                    this.act = val
                    setTimeout(() => {
                        this.handleClick(this.list[val], val)
                    },50)
                }
            },
            immediate: true
        },

    }, 
    mounted () {
        let that = this
        window.addEventListener('resize', function (e) {
            e = e || window.event
            that.init()
        })
        that.init()
    },
    methods:{
        init () {
            try {
                let width = this.$refs.navMain.clientWidth
                this.itemWidth = width / this.num + "px"
            } catch{

            }
            
        },
        handleClick (item,i) {
            let navMain = this.$refs.navMain
            let width = this.$refs.navMain.clientWidth
            let navWidth = this.$refs['nav' + i][0]

            // navMain.scrollLeft = navWidth.offsetLeft - width/2 + navWidth.clientWidth/2
            navMain.scrollTo({
                left: navWidth.offsetLeft - width/2 + navWidth.clientWidth/2,
                behavior: "smooth"
            })

            this.act = i
            this.$emit("on-click",{item, i})
        },
        preNext (boo) {
            let navMain = this.$refs.navMain
            let width = this.$refs.navMain.clientWidth
            let left = navMain.scrollLeft
            if (!boo) {
                left += width
                // 左边点击
            } else {
                // 点击右边
                left -= width
            }
            navMain.scrollTo({
                left: left,
                behavior: "smooth"
            })
        },
    }
}
</script>

