<style scoped>
.header {
    border-bottom: solid gray 1px;
    width: 100%;
    height: 60px;
    background: #2e2d2d;
}
.span {
    cursor: pointer;
}
.view {
    padding: 10px;
    border-radius: 9px;
    margin-right: 20px;
    background: white;
}
.center {
    width: 550px;
    height: 39px;
    border-bottom: solid white 2px;
}
.content {
    margin-top: 10px;
    border-top: gray solid 1px;
}
.add {
    width: 130px;
    height: 30px;
    border: solid gray 1px;
    background: #474747;
    border-radius: 9px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.add >div {
    margin: auto;
    color: white;
    font-size: 16px;
    padding: 0;
    margin: 0;
    
}
.parent {
    width: 100%;
}
.child {
    width: 97%;
    margin: auto;
    margin-top: 30px;
}
.logoAdd {
    width: 20px;
    height: 20px;
}
.drawer {
    width: 100%;
    display: flex;
    border-bottom: solid rgb(177, 170, 170) 1px;
    padding-bottom: 20px;
    margin-bottom: 20px;
}
.drawer > div {
    /* flex: 5; */
    width: 40%;
    padding-left: 10%;
}
.item  {
    padding: 0;
    margin: 3px;
}
.size {
    flex: 2;
    border-left: none;
    flex-direction: column;
    margin-right: 10px;
}
.size > div {
    height: 30px;
    /* margin: 6px; */
}
.message {
    flex:8;
}
.downTable {
    width: 100%;
}


.Input >>> .ivu-input {
    border: none !important;
}

.downTable {
    margin-top: 90px;
}

.tableBox {
    width: 100%;
    box-sizing: border-box;
    height: 170px;
    overflow: auto;
    padding-right: 10px;
}

.tableBox > div {
    box-sizing: border-box;
}
.inputBox {
    width: 100px;
    border: solid gray 1px;
}
.inputBox > input {
    width: 100%;
    border: none;
    outline: none;
    
}
.serial {
    width: 100px;
    border: solid gray 1px;
    text-align: center;
    background: #F3F3F3;
}
.base {
    border-top: solid gray 1px;
    margin-top: 80px;
    padding-top: 9px;
    
}

.tableTop > div {
    border: solid gray 1px;
    width: 100px;
    text-align: center;
}
.click {
    margin:0 5px;
}
</style>
<template>
<div>
    <div class="header sp al">
        <div></div>
        <div class="center"></div>
        <div class="view">
            <Dropdown @on-click="choose">
                <span class="span" href="javascript:void(0)">
                    下拉菜单
                    <Icon type="ios-arrow-down"></Icon>
                </span>
                <DropdownMenu slot="list">
                    <DropdownItem name='out'>退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
    <div class="parent">
        <div class="child">
            <div class="addButton">
                <div class="add ju" @click="showDrawer">
                    <div>小包运单</div>
                    <div class="al">
                        <img class="logoAdd" src="../../assets/img/add.png" alt="">
                    </div>
                </div>
            </div>
            <Drawer title="小包运单" :closable="false" v-model="value" width=1500>
                <div class="drawer">
                    <div>   
                        <div>
                            <Form :rules="rule" ref="classify"  :model='classify'>
                                <FormItem class="item" label='客户单号'  :label-width='width'>
                                    <Input type='text' v-model="classify.client_reference"/>
                                </FormItem>
                                <FormItem class="item" label="服务类型"  :label-width='width' prop='services'>
                                     <Select v-model="nothing">
                                         <!-- <Option v-for="(item) in classify.services" :key="item.serve" :value="item.serve"></Option> -->
                                        <Option v-for="(item,i) in classify.services" :key='i' :value="item.code">{{item.name}}</Option>
                                     </Select>
                                </FormItem>
                                <FormItem class="item" label='收件人'  :label-width='width' prop='recipients'>
                                    <Input type='text' v-model="classify.recipients"/>
                                </FormItem>
                                <FormItem class="item" label='公司'  :label-width='width'>
                                    <Input type="text" v-model="classify.company"/>
                                </FormItem>
                                <FormItem class="item" label='地址一'  :label-width='width'>
                                    <Input type='text' v-model="classify.address_1"/>
                                </FormItem>
                                <FormItem class="item" label='地址二'  :label-width='width'>
                                    <Input type="text" v-model="classify.address_2"/>
                                </FormItem>
                                <Form inline>
                                    <FormItem class="item" label='城市/州/邮编' :label-width='width' >
                                        <Input type="text" v-model="classify.city" placeholder="城市" style="width:140px;"/>
                                    </FormItem>
                                    <FormItem class="item" >
                                        <Input type='text' v-model="classify.state" placeholder="州" style="width:140px;"/>
                                    </FormItem>
                                    <FormItem class="item" style="margin-left:103px">
                                        <Input type='text' v-model="classify.postcode"  placeholder="邮编" style="width:140px;"/>
                                    </FormItem>
                                </Form>
                                <FormItem class="item" label='国家' :label-width='width'>
                                    <Select style="width:100px" v-model="country">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </FormItem>
                                <FormItem class="item" label='电话' :label-width='width'> 
                                    <Input type='text' placeholder="电话" v-model="classify.mobile"/>
                                </FormItem>
                                <FormItem class="item" label='邮箱' :label-width='width'> 
                                    <Input type='text' v-model="classify.email" placeholder="邮箱"/>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Form>
                                <FormItem class="item" label='发件人' :label-width='width'>
                                    <Input  type='text' placeholder="" v-model="classify.send_name" />
                                </FormItem>
                                <FormItem class="item" label='店铺' :label-width='width'>
                                    <Input  type='text' placeholder="店铺"  v-model='classify.store_id' />
                                </FormItem>
                                <FormItem class="item" label='参考号一' :label-width='width'>
                                    <Input  type='text' placeholder="参考号一"/>
                                </FormItem>
                                <FormItem class="item" label='参考号二' :label-width='width'>
                                    <Input  type='text' placeholder="参考号二"/>
                                </FormItem>
                                <FormItem class="item" label='申报币种' :label-width='width'>
                                    <Input  type='text' placeholder="申报币种"/>
                                </FormItem>
                                <FormItem class="item" label='备注' :label-width='width'>
                                    <Input  type='text' v-model="remark" placeholder="备注"/>
                                </FormItem>
                                <FormItem class="item" label='物品属性' :label-width='width'>
                                    <CheckboxGroup v-model="categories">
                                        <Checkbox label="magnetic ">带磁</Checkbox>
                                        <Checkbox label="danger ">危险品</Checkbox>
                                        <Checkbox label="elec">带电</Checkbox>
                                        <Checkbox label="liquid">液体</Checkbox>
                                        <Checkbox label='powder'>粉末</Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
                <div class="downTable">
                    <div style="display:flex;">
                        <div class="size sp">
                            <h3>重量尺寸</h3>
                            <div style="height:20px"></div>
                            <div v-for="(item,i) in Size" :key='i' class="ju al">
                                <span>{{item.title}}</span>
                                <input style="width:90px;height:100%" type="text" v-model="item.content">
                            </div>
                        </div>
                        <div class="message">
                            <h3>申报信息</h3>
                            <div style="height:30px"></div>
                            <div class="tableBox">
                                <div style="display:flex" class="tableTop">
                                    <div v-for="(item,i) in type" :key="i">{{item}}</div>
                                </div>
                                <div  v-for="(item,i) in object.declarations" :key="i" style="display:flex;">
                                    <div class="serial">{{i}}</div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.sku"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.name_zn"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.name_en"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.unit_value"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.qty"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.material"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.usage"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.brand"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.model"/>
                                    </div>
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.sale_price"/>
                                    </div>
                                    
                                   
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.fnsku"/>
                                    </div>
                                    
                                    
                                   
                                    <div class="inputBox" style="border:solid gray 1px;" >
                                        <input type="text" v-model="item.is_battery"/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                        <div class="base ju">
                            <Button class="click" type="success" @click="login">保存</Button>
                            <Button class="click" @click="cancel">取消</Button>
                        </div>
                </div>
            </Drawer>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            object:{
                'number':'1', //箱号。按 1，2，3...顺序递 增。有 FBA 箱号可以填写 FBA 箱号。必填 
                "client_weight": "2", 
                "client_length": "3", 
                "client_width": "4", 
                "client_height": "5", 
                'declarations': [] 
            },
            cityList: [
                {
                    value:'Canada',
                    label:'Canada'
                }
            ],
            classify:{
                client_reference:'test001',   //客户单号
                store_id:'',
                recipients:'阿凡达',
                company:'wahaha llc',
                address_1:'2580 CORPORATE PLACE',
                address_2:'SUITE#F107',
                city:'MONTEREY PARK',
                state:'CA',
                email:'971307875@163.com',
                postcode:'91754',
                mobile:'13046130130',


                send_name:'hugh',
                send_mobile: "13692929292",
                send_address: "发件地址",
                services: [
                    {name:'测试小包',code:'B2C'},
                ],


            },
            nothing:'B2C',   //服务类型
            country: "Canada",    //国家
            remark: "",//备注
            rule:{
                services:[
                    {required:true,trigger:'blur',message:'1'}
                ],
                recipients:[
                    {required:true,trigger:'blur',message:'2'}
                ]
            },


            border:200,
            value:false,
            width:100,
            categories:[],
            Size:[
                {title:'重量',content:'1'},
                {title:'长度',content:'2'},
                {title:'宽度',content:'3'},
                {title:'高度',content:'4'}
            ],
                
            
            type: {
                none:'',
                commodity:'商品SKU',
                chineseName:'中文名字',
                englishName:'英文名字',
                plice:'申报单价',
                quantity:'数量',
                texture:'材质',
                useTo:'用途',
                link:'销售链接',
                weight:'产品重量',
                coding:'海关编码',
                electrify:'产品带电',
                bear:'产品带磁'
            }
        }
    },
    created () {
        for (let i=0;i<15;i++) {
            this.object.declarations.push(
                {
                "sku": "1232131", 
                "name_zh": "123213",
                "name_en": "123213",
                "unit_value": 11,  //申报单价
                "qty": 1, 
                "material": "1231",  //材质
                "usage": "123",   //用途
                "brand": "brand",
                "model": "modal",      // 型号
                "sale_price": 0,
                "sale_url": "url",
                "asin": "asin", 
                "fnsku": "fnsku", 
                "weight": 0,
                "size": "100",
                "photo_url": "12321",
                "hscode": '12321',      // 海关编码
                "duty_rate": 0,
                "photos": "123",
                "is_battery": 0
                }
            )
        }
        this.getOrder() 
        // this.showDrawer()
    },
    methods: {
        getOrder () {
            this.$axios({
                url: "api/v4/shipment/info",
                method:"POST",
                data:{
                    validation:{
                        access_token: window.token
                    },
                    shipment:{
                        // shipment_id: "10000038"
                        shipment_id: "/"
                    }
                }
            }).then(res => {
                console.log(res)
            })
        },
        choose (e) {
            console.log(666,e)
        },
        showDrawer () {
            this.value = true
            this.$axios({
                url: "api/v4/shipment/get_services",
                method:"POST",
                data:{
                    validation:{
                        access_token:window.token
                    },
                    services: {
                        type:"all"
                    }
                }
            }).then(res => {
                console.log(res)
                if (res.data.status == 1) {
                    this.classify.services = res.data.data.services
                }
            })
        },
        cancel () {
            this.value = false
        },
        login () {
            let parcels = [
                {
                    'number':'1', //箱号。按 1，2，3...顺序递 增。有 FBA 箱号可以填写 FBA 箱号。必填 
                    "client_weight": "2", 
                    "client_length": "3", 
                    "client_width": "4", 
                    "client_height": "5", 
                    'declarations': this.object.declarations
                }
            ]
            this.$axios({
                url:'api/v4/shipment/create',
                method:'POST',

                data: {
                    'validation': {
                        "access_token":window.token
                    },
                    "shipment": {
                        "service":this.nothing,
                        "store_id":this.classify.store_id,
                        "client_reference":this.classify.client_reference,
                        "parcel_ciunt":2,
                        // "export_scc":1,
                        // "import_scc":0,
                        'attrs':[],
                        "vat_number":'',
                        "to_address": {
                            'name':this.classify.client_reference,
                            'company':this.classify.company,
                            'tel':"",
                            'mobile':this.classify.mobile,
                            'address_1':this.classify.address_1,
                            'address_2':this.classify.address_2,
                            'address_3':'',
                            'city':this.classify.city,
                            'state':this.classify.state,
                            'state_code':'CA',
                            'country':'US',
                            'postcode':this.classify.postcode,
                            'email':''
                        },
                        'from_address': {
                            'name':this.classify.sendname,
                            'company':'wahaha llc',
                            'tel':this.classify.send_mobile,
                            'mobile':this.classify.send_mobile,
                            'address_1':this.classify.send_address,
                            "address_2": "",
                            "address_3": "", 
                            "city": "发件城市", 
                            "state": "CA", 
                            "state_code": "CA", 
                            "country": "US", 
                            "postcode": "91754", 
                            "email": "" 
                        },
                        parcels:parcels,
                        // 'parcels': [
                            // {
                            //     'number':'1', //箱号。按 1，2，3...顺序递 增。有 FBA 箱号可以填写 FBA 箱号。必填 
                            //     "client_weight": "2", 
                            //     "client_length": "3", 
                            //     "client_width": "4", 
                            //     "client_height": "5", 
                            //     'declarations': [{
                            //         "sku": "testsku", 
                            //         "name_zh": "zhongwenming",
                            //         "name_en": "yingwenming",
                            //         "unit_value": 11, 
                            //         "qty": 1, 
                            //         "material": "glass",
                            //         "usage": "play",
                            //         "brand": "",
                            //         "model": "",
                            //         "sale_price": 0,
                            //         "sale_url": "",
                            //         "asin": "", 
                            //         "fnsku": "fnsku", 
                            //         "weight": 0,
                            //         "size": "",
                            //         "photo_url": "",
                            //         "hscode": 1234567890, 
                            //         "duty_rate": 0,
                            //         "photos": "",
                            //         "is_battery": 0 
                            //     }]
                            // },
                        // ],
                        'remark':this.remark
                    },
                    
                }
            }).then(res => {
                console.log(res)
                this.$Message.warning(res.data.info)
            })
        }
    }
}
</script>

