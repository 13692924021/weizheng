<style lang="less" scoped>
.topBox {
    >div {
        flex:10;
        margin: 10px;
        background: #fff;
        padding: 1em;
        display: flex;
        align-items:center;
    }
}
.threeWrap {
    >div {
        width: 32%;
        margin: 10px;
        background: #FFF;
        height: 310px;
        // padding: 2em;
        overflow:hidden;
        padding-top: 2em;
        >div {
            width: 88%;
            margin: auto;
            height: 100%;
        }
    }
}
.circle {
    width: 50px;
    height: 50px;border-radius: 50%;
}
.b1 {
    background: #00C292;
}
.p1 {
    padding-left: 1em;
}
.twoWrap {
    >div {
        height:300px;
        background: #FFF;
        margin: 10px;
        width: 49%;
        >div {
            width: 100%;
            height: 100%;
            padding: 10px 0;
        }
    }
}
</style>

<template>
    <div>
        <div class="topBox sb">
            <div>
                <div class="circle b1 ju al">
                    <Icon type="ios-add-circle" size="25" color="#FFF" />
                </div>
                <div class="p1">
                    <h2>350</h2>
                    <p>New Patient</p>
                </div>
            </div>

            <div>
                <div class="circle b1 ju al">
                    <Icon type="ios-add-circle" size="25" color="#FFF" />
                </div>
                <div class="p1">
                    <h2>13</h2>
                    <p>Today's ops</p>
                </div>
            </div>

            <div>
                <div class="circle b1 ju al">
                    <Icon type="ios-add-circle" size="25" color="#FFF" />
                </div>
                <div class="p1">
                    <h2>500</h2>
                    <p>OPD Patient</p>
                </div>
            </div>

            <div>
                <div class="circle b1 ju al">
                    <Icon type="ios-add-circle" size="25" color="#FFF" />
                </div>
                <div class="p1">
                    <h2>$100000</h2>
                    <p>Hospital Earning</p>
                </div>
            </div>
        </div>

        <div class="sb threeWrap">
            <div><div ref="dom1"></div></div>
            <div><div ref="dom2"></div></div>
            <div><div ref="dom3"></div></div>
        </div>

        <div class="sb twoWrap">
            <div><div ref="dom4"></div></div>
            <div><div ref="dom5"></div></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    data () {
        return {
            dom1: null,
            dom2: null,
            dom3: null,
            dom4: null,
            dom5: null,
        }
    },
    mounted () {
        this.createChart()
    },
    methods:{
        createChart () {
            let that = this
            let option1 = {
                color: ["#3A6366"],
                title: {
                    text: " New Patient"
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    splitLine: {
                        show: false
                    },
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                },
                grid: {
                    top: '20%',
                    left: '15%',
                    right: '10%',
                    bottom: '10%',
                    containLabel: false
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: "#CCF3E9"
                    }
                }]
            }
            let option2 = {
                color: ["#03A9F3"],
                title: {
                    text: " OPD Patients"
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    splitLine: {
                        show: false
                    },
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                },
                grid: {
                    top: '20%',
                    left: '15%',
                    right: '10%',
                    bottom: '10%',
                    containLabel: false
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: "#CDEEFD"
                    }
                }]
            }

            let option3 = {
                color: ["#FBA084"],
                title: {
                    text: " Treatment"
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    splitLine: {
                        show: false
                    },
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                },
                grid: {
                    top: '20%',
                    left: '15%',
                    right: '10%',
                    bottom: '10%',
                    containLabel: false
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    areaStyle: {
                        color: "#FEEAE4"
                    }
                }]
            }


            let option4 = {
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 135, name: '视频广告'},
                            {value: 1548, name: '搜索引擎'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            let option5 = {
                color: ['#3A6366'],
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 190, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            };


            this.dom1 = echarts.init(this.$refs.dom1, 'tdTheme')
            this.dom1.setOption(option1)

            this.dom2 = echarts.init(this.$refs.dom2, 'tdTheme')
            this.dom2.setOption(option2)

            this.dom3 = echarts.init(this.$refs.dom3, 'tdTheme')
            this.dom3.setOption(option3)

            this.dom4 = echarts.init(this.$refs.dom4, 'tdTheme')
            this.dom4.setOption(option4)

            this.dom5 = echarts.init(this.$refs.dom5, 'tdTheme')
            this.dom5.setOption(option5)

            window.addEventListener('resize',function () {
                that.dom1.resize()
                that.dom2.resize()
                that.dom3.resize()
                that.dom4.resize()
                that.dom5.resize()
            })
        }
    },
}
</script>

