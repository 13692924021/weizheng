<style scoped lang="less">
    .TableWrap {
        width: 100%;
        // border: solid #ccc 1px;
        text-align:center;
    }
    .THEAD {
        display: flex;
        padding: 0.5vw 0;
        background: linear-gradient(#08183f, #171799);
        color: #FFF;
        position: relative;
    }
    .ROW {
        display: flex;
        transition: 0.2s;
        cursor: pointer;
        border-top: solid #CCC 1px;
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
    .ROW:first-child{
        border-top: none !important;
    }
    .searchWrap {
        display: flex;
        border-left: solid #CCC 1px;
        border-right: solid #CCC 1px;
        >div {
            padding: 0.5vw 0;
            border-right: solid #CCC 1px;
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
                    height: 26px;
                    padding-left: 6px;
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
        height: 26px;
        max-width:12vw;
        padding: 0.1vw 0.3vw;
        // height: 25px;
    }
    .flex {
        display:flex;
    }
    .checkBox {
        user-select: none;
        width:20px;
        height: 20px;
        border: solid #666666 1px;
        // margin: auto;
        cursor: pointer;
        background: #FFF;
        border-radius: 3px;
        transition: 0.7s;
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
        left: 5px;
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
    .pageBox {
        width: 25px;
        height: 25px;
        border: solid #161795 1px;
        border-radius:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        cursor: pointer;
        user-select: none;
        position: relative;
        .leftIcon {
            width: 30%;
            height: 30%;
            border: solid transparent 1px;
            border-left: solid #161795 2px !important;
            border-top: solid #161795 2px !important;
            transform: rotate(-45deg) translate(20%, 20%);
        }
        .rightIcon {
            width: 30%;
            height: 30%;
            border: solid transparent 1px;
            border-right: solid #161795 2px !important;
            border-top: solid #161795 2px !important;
            transform: rotate(45deg) translate(-20%, 20%);
        }
        &:hover {
            box-shadow: 0 0 3px #161795;
        }
    }
    .Margin10 {
        margin: 4px;
    }
    .pageAct {
        background:#161795 !important;
        color: #FFF  !important;
    }
    .margin2px {
        margin: 0 2px;
    }
</style>
<template>
    <div class="TableWrap">
        <div class="flexEnd">
            <div class="padding1">
                <button class="op" @click="initFilter">清空筛选条件</button>
                <button class="op" @click="exportData">导出csv</button>
            </div>
        </div>
        <div class="THEAD" >
            <div :class="['checkBox', 'cLeft']" @click="clickAllCheck" v-if="selection">
                <div v-if="checkAll"><img src="./static/img/check.png"></div>
            </div>
            <div v-for="(item,i) in column" :style="{ width:item.width ? item.width :  '100%' }" :key="i" v-html="item.title"></div>
        </div>

        <div class="searchWrap" v-if="searchable">
            <div v-for="(item,i) in column" :key="i" :style="{ width:item.width ? item.width :  '100%' }">
                <div v-if="item.searchType=='select' && !item.time" v-show="!item.noSearch">
                    <select v-model="item.keyword" @change="selectColumns" class="tableSelect">
                        <!-- <option value="" selected disabled>请选择{{item.title}}</option> -->
                        <option value="" selected>全部{{item.title}}</option>
                        <option v-for="(item,i) in item.options" :key="i" :value="item">{{item}}</option>
                    </select>
                </div>
                <div v-else-if="item.time" class="inputWrap selectTimeWrap" v-show="!item.noSearch">
                    <select v-model="year" @change="selectColumns">
                        <option value="" selected>年份</option>
                        <option v-for="(item,i) in yearList" :key="i" :value="item">{{item}}</option>
                    </select>
                    <select class='margin2px' v-model="month" @change="selectColumns">
                        <option value="" selected>月份</option>
                        <option v-for="(item,i) in monthList" :key="i" :value="item">{{item}}</option>
                    </select>
                    <select v-model="date" @change="selectColumns">
                        <option value="" selected>日期</option>
                        <option v-for="(item,i) in dateList" :key="i" :value="item">{{item}}</option>
                    </select>
                </div>
                <div class="inputWrap" v-show="!item.noSearch" v-else>
                    <input type="text" v-model="item.keyword" @input="filterData" :placeholder="'搜索' + item.title" >
                    <img src="./static/img/close.png" @click="clearKeyword(item)">
                </div>
                
            </div>
        </div>

        <div class="TBODY">
            <div class="loadData" v-if="loading"> </div>
            <div class="noData" v-if="!tableData.length && !loading">暂无数据</div>
            <div class="ROW" v-for="(item,i) in ( tableData.slice((page-1)*offset, (page-1)*offset+offset) )" :key="i" >
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
        <br>
        <div class="flex-end">
            <div class="al">
                <span style="padding-right: 20px;">共{{total}}条 </span>
                <div class="pageBox" @click="changePage(page-1)"> <div class="leftIcon"></div> </div>
                <div class="al" style="padding: 0 4px;">
                    <div :class="['pageBox Margin10', { pageAct:page===item }]" 
                        v-for="(item,i) in Math.ceil(total/offset)" 
                        :key="i" @click="changePage(i+1)">{{item}}</div>
                </div>
                <div class="pageBox" @click="changePage(page+1)"> <div class="rightIcon"></div> </div>
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
            //  selection: true  (显示checkBox)

// searchable: flase (不显示搜索框,默认显示)
// loading: true   (显示加载中的动画)

// 自定义事件：
//   on-check (勾选事件)
// 组件内部事件
//   exportData (导出xlsx)

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
            total: 0,
            page: 1,
            offset:5
        }
    },
    props: {
        loading: {      // 加载中
            default: false
        },
        searchable: {   // 是否显示搜索
            default: true,
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
        //点击分页
        changePage (item) {
            let that = this
            this.page = item
            if (item < 1) {
                this.page = 1
            }
            console.log(item, Math.ceil(that.total/that.offset))
            if (item > Math.ceil(that.total/that.offset)) {
                this.page = Math.ceil(that.total/that.offset)
            }
            document.getElementsByClassName("Main")[0].scrollTop = 0
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
            for(let i = 0;i< 10; i++) {
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
                    c.width="90px"
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
                    if (String(keyword)) {
                        key = c.key
                        if (String(item[key]).toUpperCase().includes(String(keyword).toUpperCase())) {
                            return true
                        }
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
            this.total = this.tableData.length
            this.page = 1
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
                        if (item[key]) {
                            item[key] = timeStr
                            item.cTimestamp = D.getTime()
                        } else {
                            item[key] = "No Date"
                        }
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


