<style lang="less" scoped>
.myNav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navMain {
    // border: solid #333 1px;
    box-sizing: border-box;
    width: calc(100% - 50px);
    height: 50px;                            // nav的高度
    position: relative;
    overflow: hidden;
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
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.3s linear;
    box-sizing: border-box;
    white-space: nowrap;
    div { box-sizing: border-box;transition: 0.3s linear; }
    >div{
        display: inline-block;
        width: 20%;
        height: 100%;
        >div {
            // border: solid #FFF 1px;
            cursor: pointer;
            user-select: none;
            width: 100%;
            height: 100%;
            border-right: 0;
            // background: #03583F;
            // color: #FFF;
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
        <div class="navMain" ref="navMain">
            <div class="longBox" :style="{ left: left+'px' }">

                <!-- 每一个tab -->
                <div v-for="(item,i) in list" :key="i" @click="handleClick(item,i)" :ref="'nav'+i" :style="{ width: 100/num + '%' }">
                    <div :class="['ju al', { act: i==act }]">
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
        }
    },
    watch: {
        active: {
            handler (val) {
                this.act = val
                setTimeout(() => {
                    this.$refs['nav' + val].click()
                },50)
                
            },
            immediate: true
        }
    }, 
    mounted () {
        let that = this
        window.addEventListener('resize', function (e) {
            e = e || window.event
            that.fixLeft(e)  //这个实参未使用
        })
    },
    methods:{
        handleClick (item,i) {
            let width = this.$refs.navMain.clientWidth
            let navWidth = this.$refs.nav0.clientWidth

            this.left = -navWidth*i + ( width - navWidth )/2
            this.fixLeft()

            this.act = i
            this.$emit("on-click",item)
        },
        preNext (boo) {
            let width = this.$refs.navMain.clientWidth
            if (!boo) {
                this.left -= width
                // 左边点击
            } else {
                // 点击右边
                this.left += width
            }
            this.fixLeft()
        },
        fixLeft () {
            let width = this.$refs.navMain.clientWidth
            let navWidth = this.$refs.nav0.clientWidth
            let longWidth = this.list.length * navWidth

            if (this.left > 0) {
                this.left = 0
            }
            // console.log(Math.abs(this.left) , (longWidth-width),-(longWidth-width) )
            if ( Math.abs(this.left) >= (longWidth-width) ) {
                this.left = -(longWidth-width)
            }

        }
    }
}
</script>

