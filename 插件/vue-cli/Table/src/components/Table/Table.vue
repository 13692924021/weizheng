<style scoped lang="less">
    .TableWrap {
        width: 100%;
        // border: solid #ccc 1px;
        text-align:center;
    }
    .THEAD {
        display: flex;
        padding: 0.5vw 0;
        background: #102452;
        color: #FFF;
        position: relative;
    }
    .ROW {
        display: flex;
        transition: 0.2s;
        cursor: pointer;
        border-bottom: solid #CCC 1px;
        &:hover {
            background: #e2dfdf !important;
        }
        >div {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5vw 0;
            border-right: solid #CCC 1px;
        }
        >div:last-child {
            border: none !important;
        }
    }
    .ROW:last-child{
        border-bottom: none !important;
    }
    .searchWrap {
        display: flex;
        border-left: solid #CCC 1px;
        border-right: solid #CCC 1px;
        >div {
            padding: 0.5vw 0;
            border-right: solid #CCC 1px;
            >.inputWrap {
                width: 100%;
                max-width: 12vw;
                margin: auto;
                // border: solid red 1px;
                position: relative;
                >img {
                    width: 1.5vw;
                    height: 1.5vw;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    cursor: pointer;
                    display: none;
                    transform: translateY(-50%);
                }
                &:hover>img {
                    display: block !important;
                }
                >input {
                    width: 100%;
                    padding-right: 1vw;
                    box-sizing: border-box;
                    margin: auto;
                    display: block;
                }
            }
        }
        >div:last-child{
            border: none !important;
        }
    }
    .TBODY {
        border: solid #CCC 1px;
        color: #333333;
        font-size:14px;
    }
    .tableSelect {
        width: 80%;
        max-width:12vw;
        padding: 0.1vw 0.3vw;
    }
    .flex {
        display:flex;
    }
    .checkBox {
        user-select: none;
        width: 1vw;
        height: 1vw;
        border: solid #666666 1px;
        margin: auto;
        cursor: pointer;
        background: #FFF;
        border-radius: 3px;
        &:hover {
            box-shadow: 0 0 3px #102452;
        }
        >div {
            width: 100%;
            height: 100%;
            background: #102452;
            >img {
                width: 100%;
                height: 100%;
            }   
        }
    }
    .cLeft {
        position: absolute;
        left: 0.4%;
        top: 50%;
        transform: translateY(-50%);
    }
</style>

<template>
    <div class="TableWrap">
        <div class="THEAD" >
            <div :class="['checkBox', 'cLeft']" @click="clickAllCheck">
                <div v-if="checkAll"><img src="./static/img/check.png"></div>
            </div>
            <div v-for="(item,i) in column" :style="{ width:item.width ? item.width :  '100%' }" :key="i" v-html="item.title"></div>
        </div>

        <div class="searchWrap" v-if="searchable && tableData.length">
            <div v-for="(item,i) in column" :key="i" :style="{ width:item.width ? item.width :  '100%' }">
                <div v-if="item.searchType=='select'" v-show="!item.noSearch">
                    <select v-model="item.keyword" @change="selectColumns" class="tableSelect">
                        <!-- <option value="" selected disabled>请选择{{item.title}}</option> -->
                        <option value="" selected>全部{{item.title}}</option>
                        <option v-for="(item,i) in item.options" :key="i" :value="item">{{item}}</option>
                    </select>
                </div>
                <div class="inputWrap" v-show="!item.noSearch" v-else>
                    <input type="text" v-model="item.keyword" @input="filterData" :placeholder="'搜索' + item.title" >
                    <img src="./static/img/close.png" @click="clearKeyword(item)">
                </div>
                
            </div>
        </div>

        <div class="TBODY">
            <div class="ROW" v-for="(item,i) in tableData" :key="i" >
                <div v-for="(c,i) in column" :key="i" :style="{ width:c.width ? c.width :  '100%' }">
                    <div v-if="c.selection" class="checkBox" @click="clickCheckBox(item)">
                        <div v-if="item.check"><img src="./static/img/check.png"></div>
                    </div>
                    <div v-else-if="c.slot">
                        <slot :name="c.slot" :row="item"></slot>
                    </div>
                    <div v-else>{{item[c.key]}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// columns:
            //  title: "表头名字"  (可传 v-html)
            //  key: "key"
            //  width:  columns宽度 (任何单位)
            //  noSearch: true    (不显示搜索框)

// searchable: flase (不显示搜索框,默认显示)
export default {
    name: 'TABLE',
    data () {
        return {
            column: [],
            tableData: [],
            checkAll: false
        }
    },
    props: {
        searchable: {
            default: true,
        },
        columns: {
            type: Array,
            default: () => []
        },
        list: {
            type: Array,
            default: () => []
        }
    },
    created () {
        this.tableData = JSON.parse(JSON.stringify(this.list))
        this.column = JSON.parse(JSON.stringify(this.columns))
        this.preSelect()
    },
    watch:{
        list () {
            this.tableData = JSON.parse(JSON.stringify(this.list))
            this.column = JSON.parse(JSON.stringify(this.columns))
            this.preSelect()
        }
    },
    methods:{
        clickAllCheck () {
            this.checkAll = !this.checkAll
            this.tableData.forEach(item => {
                item.check = this.checkAll
            })
            this.$emit("on-check", this.tableData.filter(item => item.check))
        },
        clickCheckBox (item) {
            item.check = !item.check
            this.column = [...this.column]
            this.checkAll = this.tableData.every(item => { return item.check == true })
            this.$emit("on-check", this.tableData.filter(item => item.check))
        },
        //创建下拉框的数据
        preSelect () {
            this.column.forEach(c => {
                c.keyword = ""
                if (c.searchType == "select") {
                    let arr = []
                    let key = c.key
                    this.tableData.forEach(item => {
                        arr.push(item[key])
                    })
                    c.options = [...new Set(arr)]
                }
                if (c.selection) {
                    c.width="10%"
                    c.noSearch = true
                }
            })
            
        },
        //清空一个搜索框
        clearKeyword (item) {
            item.keyword = ''
            this.filterData()
        },
        //搜索数据
        filterData () {
            let arr = []
            arr = this.list.filter(item => {
                return this.column.every(c => {
                    // console.log(c)
                    let keyword = c.keyword
                    let key = ""
                    if (keyword) {
                        key = c.key
                        // for(let key in item) {
                            if (String(item[key]).includes(keyword)) {
                                return true
                            }
                        // }
                    } else {
                        keyword = ""
                        // console.log(2,keyword, key,item)
                        return true
                    }
                    
                })
            })
            this.tableData = JSON.parse(JSON.stringify(arr))
        },
        selectColumns () {
            this.filterData()
        },
    }
}
</script>



</style>
