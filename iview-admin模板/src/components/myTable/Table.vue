<style scoped lang="less">
    .TableWrap {
        width: 100%;
        // border: solid #ccc 1px;
        text-align:center;
        box-shadow:5px 5px 5px #CCC;
        

    }
    .THEAD {
        display: flex;
        padding: 0.5vw 0;
        background: #0C539C;
        color: #FFF;
        position: relative;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
    .ROW {
        display: flex;
        transition: 0.2s;
        cursor: pointer;
        border-top: solid rgb(231, 230, 230) 1px;
        &:hover {
            background: #e2dfdf !important;
        }
        >div {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5vw 0;
            // border-right: solid #CCC 1px;
        }
        >div:last-child {
            border: none !important;
        }
    }
    .ROW:first-child{
        border-top: none !important;
    }
    .searchWrap {
        display: flex;
        border-left: solid #CCC 1px;
        border-right: solid #CCC 1px;
        >div {
            padding: 0.5vw 0;
            // border-right: solid #CCC 1px;
            >.inputWrap {
                width: 90%;
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
        border: 1px solid lightblue;
        // border: solid #CCC 1px;
        border-radius: 5px;
        color: #535252;
        font-size:12px;
        background: rgba(255, 255, 255, 0.9);
        // height: ~"calc(100vh - 250px)";
        overflow-y: auto;
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
    .selectTimeWrap {
        display: flex;
        align-items: center;
        >select {
            width: 33%;
            padding: 0.1vw 0;
        }
    }
    .flexEnd {
        display: flex;
        justify-content: flex-end;
    }
    .padding1 {
        user-select: none;
        padding: 0.5vw 0;
        >button {
            background:linear-gradient(#08183f, #171799);
            color: #FFF;
            display: inline-block;
            margin-left: 0.4vw;
            padding: 0.3vw 1vw;
            outline: none;
            font-size: 0.8vw;
            border: none;
            cursor: pointer;
            &:hover {
                box-shadow: 0 0 3px #333;
            }
        }
    }
    .op:active {
        opacity: 0.6 !important;
    }
    .loadData {
        width: 3vw;
        height: 3vw;
        border-radius: 50%;
        margin: 3vw auto;
        border: solid #102452 5px;
        border-left: solid transparent 5px !important;
        animation: rotate 1s linear infinite;
    }
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .noData {
        margin: 2vw 0;
        color: #666666;
    }
</style>
<template>
    <div class="TableWrap">
        <!-- <div class="flexEnd">
            <div class="padding1">
                <button class="op" @click="initFilter">清空筛选条件</button>
                <button class="op" @click="exportData">导出csv</button>
            </div>
        </div> -->
        <div class="THEAD" >
            <div :class="['checkBox', 'cLeft']" @click="clickAllCheck" v-if="selection">
                <div v-if="checkAll"><img src="./static/img/check.png"></div>
            </div>
            <div v-for="(item,i) in column" :style="{ width:item.width ? item.width :  '100%' }" :key="i" >{{$t( item.title )}}</div>
        </div>

        <div class="searchWrap" v-if="searchable">
            <div v-for="(item,i) in column" :key="i" :style="{ width:item.width ? item.width :  '100%' }">
                <div v-if="item.searchType=='select' && !item.time" v-show="!item.noSearch">
                    <select v-model="item.keyword" @change="selectColumns" class="tableSelect">
                        <!-- <option value="" selected disabled>请选择{{item.title}}</option> -->
                        <option value="" selected>{{$t( 'all' )}}{{$t(item.title)}}</option>
                        <option v-for="(item,i) in item.options" :key="i" :value="item">{{item}}</option>
                    </select>
                </div>
                <div v-else-if="item.time" class="inputWrap selectTimeWrap" v-show="!item.noSearch">
                    <select v-model="year" @change="selectColumns">
                        <option value="" selected>{{$t( "year" )}}</option>
                        <option v-for="(item,i) in yearList" :key="i" :value="item">{{item}}</option>
                    </select>
                    <select v-model="month" @change="selectColumns">
                        <option value="" selected>{{$t( "month" )}}</option>
                        <option v-for="(item,i) in monthList" :key="i" :value="item">{{item}}</option>
                    </select>
                    <select v-model="date" @change="selectColumns">
                        <option value="" selected>{{$t( "date" )}}</option>
                        <option v-for="(item,i) in dateList" :key="i" :value="item">{{item}}</option>
                    </select>
                </div>
                <div class="inputWrap" v-show="!item.noSearch" v-else>
                    <input type="text" v-model="item.keyword" @input="filterData" :placeholder="$t('search') + $t( item.title )" >
                    <img src="./static/img/close.png" @click="clearKeyword(item)">
                </div>
                
            </div>
        </div>

        <div class="TBODY" :style="{height:tbodyHeight}">
            <div class="loadData" v-if="loading"> </div>
            <div class="noData" v-if="!tableData.length && !loading">暂无数据</div>
            <div class="ROW" v-for="(item,i) in tableData" :key="i" @click="clickRow(item)">
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
// 使用方法:

// 需先npm install xlsx -S  安装导出文件的插件

// columns:
            //  title: "表头名字"  (可传 v-html)
            //  key: "key"
            //  width:  columns宽度 (任何单位)
            //  noSearch: true    (不显示搜索框)
            //  time: true  ( 是创建时间 )
            //  searchType : 'select'   (搜索框換成select)

// searchable: flase (不显示搜索框,默认显示)
// loading: true   (显示加载中的动画)

import excel from './static/js/excel.js'
export default {
    name: 'TABLE',
    data () {
        return {
            column: [],
            tableData: [],
            checkAll: false,
            yearList: [],
            monthList: ["01","02","03","04","05","06","07","08","09","10","11","12"],
            dateList: [],
            year: "",
            month: "",
            date: "",
            timeKey: "",  // 记录数据的创建时间的key (例如：createdAt)
            selection: false,
        }
    },
    props: {
        tbodyHeight: {
            default:"480px !important"
        },
        loading: {      // 加载中
            default: false
        },
        searchable: {   // 是否显示搜索
            default: false,
        },
        columns: {    // 表头
            type: Array,
            default: () => []
        },
        list: {    //tbody展示的数据
            type: Array,
            default: () => []
        }
    },
    created () {
        this.dataInit()
        this.timeInit()
    },
    watch:{
        list () {
            this.dataInit()
        },
        columns () {
            this.dataInit()
        }
    },
    methods:{
        clickRow (e) {
            this.$emit("clickRow",e)
        },
        // 数据初始化
        dataInit () {
            this.tableData = JSON.parse(JSON.stringify(this.list))
            this.column = JSON.parse(JSON.stringify(this.columns))
            this.preSelect()
            this.filterData()
        },
        //初始化时间
        timeInit () {
            let yearList = []
            let y = new Date().getFullYear()
            for(let i = 0;i< 15; i++) {
                yearList.push(String(y))
                y--
            }
            this.yearList = yearList
            let dateList = []
            for(let i = 0;i< 31; i++) {
                dateList.push(String(i+1))
            }
            this.dateList = dateList
        },
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
                
                if (c.selection) {
                    c.width="15%"
                    c.noSearch = true
                    this.selection = true
                }
                if(c.time) {
                    let key= c.key
                    this.timeKey = key
                    // this.tableData.forEach(item => {
                    //     let D = new Date(item[key])
                    //     console.log(D)
                    //     let y = D.getFullYear()
                    //     let m = D.getMonth() + 1
                    //     let d = D.getDate()
                    //     let h = D.getHours()
                    //     let min = D.getMinutes()
                    //     if (m < 10) { m = "0" + m }
                    //     if (d < 10) { d = "0" + d }
                    //     if (h < 10) { h = "0" + h }
                    //     if (min < 10) { min = "0" + min }
                    //     let timeStr = y + "-" + m + "-" + d
                    //     if (h != 0 && min != 0) {
                    //         timeStr += " " + h + ":"
                    //         timeStr += min
                    //     }
                    //     item[key] = timeStr
                    // })
                }
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
                        return true
                    }
                })
            })
            arr = arr.filter(item => {
                // console.log(item[this.timeKey])
                let D = new Date(item[this.timeKey])
                let y = String(D.getFullYear())
                let m = String((D.getMonth() + 1) < 10 ? "0" + (D.getMonth() + 1) : (D.getMonth() + 1))
                let d = String(D.getDate() < 10 ? "0" + D.getDate() : D.getDate())
                return ( 
                    (this.year? y==(this.year) : true) && 
                    (this.month ? m==(this.month) : true) && 
                    (this.date ? d==(this.date) : true)
                )
                
            })

            this.tableData = JSON.parse(JSON.stringify(arr))
            this.column.forEach(c => {
                if(c.time) {
                    let key= c.key
                    this.tableData.forEach(item => {
                        let D = new Date(item[key])
                        let y = D.getFullYear()
                        let m = D.getMonth() + 1
                        let d = D.getDate()
                        let h = D.getHours()
                        let min = D.getMinutes()
                        if (m < 10) { m = "0" + m }
                        if (d < 10) { d = "0" + d }
                        if (h < 10) { h = "0" + h }
                        if (min < 10) { min = "0" + min }
                        let timeStr = y + "-" + m + "-" + d
                        if (h != 0 && min != 0) {
                            timeStr += " " + h + ":"
                            timeStr += min
                        }
                        item[key] = timeStr
                        item.cTimestamp = D.getTime()
                    })
                }
            })
        },
        selectColumns () {
            this.filterData()
        },
        initFilter () {
            this.column.forEach(item => {
                item.keyword = ""
                this.year = ""
                this.month = ""
                this.date = ""
                this.filterData()
            })
        },
        exportData () {
            let rows = this.tableData.filter(item => item.check)
            if (rows.length) {
                let fields = []
                for(let key in rows[0]) {
                    this.column.forEach(c => {
                        if (c.key == key) {
                            // fields.push(c.key)
                            fields.push(c.title)
                        }
                    })
                }
                let arr = []
                rows.forEach(item => {
                    let dataObj = {}
                    this.column.forEach(c => {
                        if (c.key) {
                            dataObj[c.title] = item[c.key]
                        }
                    })
                    arr.push(dataObj)
                })
                // console.log(fields,arr)
                let tableData = arr
                const params = {
                    title: fields,
                    key: fields,
                    data: tableData,
                    autoWidth: true,
                    filename: 'table-' + Date.now()
                }
                excel.export_array_to_excel(params)
                this.exportLoading = false
            } else {
                alert("请勾选需要导出的数据")
            }
        }
    }
}
</script>


