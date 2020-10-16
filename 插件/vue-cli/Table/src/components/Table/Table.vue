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
</style>

<template>
    <div class="TableWrap">
        <div class="THEAD" >
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
                    <input type="text" v-model="item.keyword" @input=filterData >
                    <img src="./static/img/close.png" @click="clearKeyword(item)">
                </div>
                
            </div>
        </div>

        <div class="TBODY">
            <div class="ROW" v-for="(item,i) in tableData" :key="i" >
                <div v-for="(c,i) in column" :key="i" :style="{ width:c.width ? c.width :  '100%' }">{{item[c.key]}}</div>
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
    methods:{
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
