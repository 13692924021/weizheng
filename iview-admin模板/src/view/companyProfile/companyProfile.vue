<style scoped lang="less">
.primaryBtn {
    padding: 5px 20px;
    background: #3A6366;
    color: #FFF;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
.flex3 {
    flex: 3;
}
.height3em {
    min-height: 3em;

}
.top3em {
    padding-top: 1em;
}
.eye {
    cursor: pointer;
}
.stepIcon {
    width: 20%;
    position: relative;
}
.stepAct {
    opacity: 1 !important;
}
.kpi {
    border: solid #CCC 1px;
    position: relative;
    box-shadow: 1px 1px 2px #666;
    border-radius: 2px;
    margin: 20px 0;
    padding: 1em;
    flex-wrap:wrap;
    >div {
        // width: 50%;
        // border: solid red 1px;
    }
}
.delBtn {
    width: 30px;
    height: 30px;
    background: #E50000;
    border-radius: 50%;
    position: absolute;
    top: -15px;
    right: -15px;
    cursor: pointer;
    >div {
        width: 60%;
        height: 10%;
        background:#FFF;
    }
}

.smallText1 {
    color: #00366E;
}
.borderB {
    border-bottom: solid 1px #00366E;

}
.grid1 {
    display:grid;
    grid-template-columns:1fr 40% 1fr 1fr;
    >div {
        padding: 1em 0;
        text-align:center;
    }
}
.grid2 {
    display:grid;
    grid-template-columns:20% 1fr 1fr 20%;
    >div {
        padding: 1em 0;
        text-align:center;
    }
}
.addFormWrap {
    display: grid;
    grid-template-columns: 100px 1fr;
    >div:first-child {
        text-align: right;
        padding-right: 30px;    
        padding-top:6px;
    }
}
.gWrap {
    .ivu-icon {
        // border: solid;
        transform: translateY(-2px) translateX(5px);
    }

}
.dir {
    width: 70%;
    position: absolute;
    top: 5px;
    left: 80%;
}
.blueBor {
    border: solid #0C539C 2px;
    padding: 2em;
    margin-bottom: 2em;
    position: relative;
}
.threeBoxWrap {
    >div {
        width: 31%;
        // border: solid red 1px;
    }
}
  .abso {
        position: absolute;
        width: 100%;
        opacity: 0;
        z-index: 0;
        display: none;
  }

  .stepShow{
    animation: go_in 0.6s;
    opacity: 1;
    z-index: 20;
    position: absolute;
    display: block !important;;
}
 @keyframes go_in
    {
        0% {opacity: 0; transform: scale(1);}
        100%{opacity: 1; transform: scale(1);}

    }
</style>

<template>
    <div class="gWrap">
        <!-- 公司档案table -->
        <div v-show="type==1">
            <div class="sb" style="margin-bottom: 15px;">
                <div class="sinpBox">
                    <Select style="width: 200px;margin-right: 10px" :placeholder="$t('searchType')" v-model="currentSType">
                        <Option v-for="(item,i) in searchType" :key="i" :value="item.key">{{item.name}}</Option>
                    </Select>
                    <Input type="text" style="width: 200px;margin-right: 10px" v-model="keyword" clearable @on-clear="okSearch" />
                    <Button type="info" @click="okSearch">{{$t('search')}}</Button>
                </div>
                <div class="al">
                    <div class="primaryBtn size16 ju al op userselect" @click="createProfile">+ {{$t("addPro")}}</div>
                </div>
                
            </div>
            <myTable style="font-size:12px;" :columns="columns" :list="list" @clickRow="clickRow" :loading="loading">
                <template slot="status" slot-scope="{row}">
                    <span v-if="row.status == 1" style="color: #D8AA5B;">蒐集資料中</span>
                    <span v-if="row.status == 2" style="color: #00366E;">資料蒐集完成</span>
                    <span v-if="row.status == 3" style="color: #D8AA5B;">處理中</span>
                    <span v-if="row.status == 4" style="color: green;">報告已完成</span>
                    <span v-if="row.status == 5" style="color: red;">資料需要檢查</span>
                </template>

                <template slot="btn" slot-scope="{row}">
                    <div @click.stop.prevent="" class="al" style="justify-content:flex-end;width: 150px;">
                        <Button type="info" size="small" style="margin-right:3px;" v-if="row.status==4" @click="downLoad(row)">
                            <a style="color:#FFF;" :href="baseURL + 'pdfdown/?id=' + row.uuid " target="_blank">{{$t( 'download')}}</a>
                        </Button>
                        <Button type="info" disabled size="small" style="margin-right:3px;" v-else >
                            {{$t( 'download')}}
                        </Button>
                        <!-- <Button type="info" size="small" style="margin-right:3px;" v-else-if="row.status==2"> {{$t( 'createReport')}}</Button>
                        <Button type="info" disabled size="small" style="margin-right:3px;" v-else-if="row.status==1"> {{$t( 'download')}}</Button> -->
                        <Button type="error" size="small" @click="del(row)">  {{$t( 'delete')}}</Button>
                    </div>
                </template>
            </myTable>
        </div>
        

        <!-- 新增子公司 -->
        <Modal :title="$t('add') +' ' + $t('childCompany')" v-model="showAdd" :width="500" @on-ok="okAddTree" :loading="loading">
            <!-- <div class="addFormWrap">
                <div>{{$t('select')}}: </div>
                <div> <Tree :data="[list]" @on-select-change="changeParent"></Tree> </div>
            </div> -->
            <Form :model="addForm" ref="addForm" :rules="rules" :label-width="120">
                <FormItem :label="$t('allName')" prop="name">
                    <Input type="text" style="width:250px" v-model="addForm.name" />
                </FormItem>

                <FormItem :label="$t('description')" prop="description">
                    <Input type="text" style="width:250px" v-model="addForm.description" />
                </FormItem>
            </Form>

            <div slot="footer">
                <div style="width:100" class="sb">
                    <!-- <div class="redBtn">刪除</div> -->
                    <div></div>
                    <div class="al">
                        <label for="upChild" @change="upLoad($event,'info')">
                            <input type="file" id="upChild" v-show="false" /> 
                            <div  class="blueBtn">{{$t('uploadFile')}}</div>
                        </label>
                        <div class="greenBtn" style="margin-left:5px;" @click="okAddTree">{{$t('confirm')}}</div>
                        
                    </div>
                </div>
            </div>
            
        </Modal>
        <!-- 新增运营点 -->
        <Modal :title="$t('create') + ' ' + $t('oper')" v-model="showOper" :width="500" @on-ok="okAddOper" :loading="loading">
            <Form :model="addForm2" ref="addForm2" :rules="rules" :label-width="120">
                <FormItem :label="$t('childCompany')" prop="childIndex">
                    <Select style="width: 250px;" v-model="addForm2.childIndex">
                        <Option v-for="(item,i) in childCompany" :key="i" :value="i">{{item.name}}</Option>
                    </Select>
                </FormItem>

                <FormItem label="CIGS" prop="cigs_id">
                    <Select style="width: 250px;" v-model="addForm2.cigs_id">
                        <Option v-for="(item,i) in CIGS" :key="i" :value="item.id">{{item.name}}</Option>
                    </Select>
                </FormItem>

                <FormItem :label="$t('allName')" prop="name">
                    <Input type="text" style="width:250px" v-model="addForm2.name" />
                </FormItem>

                <FormItem :label="$t('location')" prop="location">
                    <Input type="text" style="width:250px" v-model="addForm2.location" />
                </FormItem>
            </Form>
            <div slot="footer">
                <div style="width:100" class="sb">
                    <!-- <div class="redBtn">刪除</div> -->
                    <div></div>
                    <div class="al">
                        <label for="upOper" @change="upLoad($event,'info')">
                            <input type="file" id="upOper" v-show="false" /> 
                            <div  class="blueBtn">{{$t('uploadFile')}}</div>
                        </label>
                        <div class="greenBtn" style="margin-left:5px;" @click="okAddOper">{{$t('confirm')}}</div>
                        <!-- <div class="blueBtn">輸入管理端資料</div> -->
                    </div>
                </div>
            </div>
        </Modal>

        <!-- 編輯子公司 -->
        <Modal :title="$t('edit') +' ' + $t('childCompany')" v-model="childEdit" :width="500" @on-ok="okEditChild" :loading="loading">
            <Form :model="editForm" ref="editForm" :rules="rules" :label-width="120">
                <FormItem :label="$t('allName')" prop="name">
                    <Input type="text" style="width:250px" v-model="editForm.name" />
                </FormItem>

                <FormItem  :label="$t('description')" prop="description">
                    <Input type="text" style="width:250px" v-model="editForm.description" />
                </FormItem>
            </Form>
            <div slot="footer">
                <div style="width:100" class="sb">
                    <div class="redBtn" @click="delChild">{{$t('delete')}}{{$t('childCompany')}}</div>
                    <div class="al">
                        <div class="greenBtn" style="margin-right:5px;" @click="okAddTree">{{$t('confirm')}}</div>
                        <!-- <div class="blueBtn">輸入管理端資料</div> -->
                    </div>
                </div>
            </div>
        </Modal>

        <!-- 編輯运营点 -->
        <Modal :title="$t('edit') + ' ' + $t('oper')" v-model="operEdit" :width="500" @on-ok="okEditOper" :loading="loading">
            <Form :model="editForm2" ref="editForm2" :rules="rules" :label-width="120">
                <FormItem  :label="$t('childCompany')" prop="child_company_uuid">
                    <Select style="width: 250px;" v-model="editForm2.child_company_uuid">
                        <Option v-for="(item,i) in childCompany" :key="i" :value="item.uuid">{{item.name}}</Option>
                    </Select>
                </FormItem>

                <FormItem label="CIGC" prop="cigs_id">
                    <Select style="width: 250px;" v-model="editForm2.cigs_id">
                        <Option v-for="(item,i) in CIGS" :key="i" :value="item.id">{{item.name}}</Option>
                    </Select>
                </FormItem>

                <FormItem  :label="$t('allName')" prop="name">
                    <Input type="text" style="width:250px" v-model="editForm2.name" />
                </FormItem>

                <FormItem  :label="$t('location')" prop="location">
                    <Input type="text" style="width:250px" v-model="editForm2.location" />
                </FormItem>
            </Form>

            <div slot="footer">
                <div style="width:100" class="sb">
                    <div class="redBtn" @click="delOper">{{$t('delete')}}{{$t('oper')}}</div>
                    <div class="al">
                        <div class="greenBtn" style="margin-right:5px;" @click="okEditOper">{{$t('confirm')}}</div>
                        <div class="blueBtn" @click="toInfoPage">{{$t('enterPointInfo')}}</div> 
                    </div>
                </div>
            </div>
            
        </Modal>

        <!-- 一个公司档案详细信息 -->
        <div v-show="type==2">
            <div class="borderBox1">
                <h3 class="boxTitle rela al">
                    {{$t('groupProfileInfoAdmin')}}
                </h3>
                <br>
                
                <p style="background-color:#D4E9CA">此檔案應由母公司(Level 1)填寫 (參考右圖)。

                檔案內含有4個表格，為「合規必填 」，即客戶必須填寫該表。

                帶有「必填」的欄是客戶必須提供的資料，除非企業決定不披露該項目。

                如企業決定不披露有關項目必須提供原因。
                有關企業重要議題的指標是應該披露的。

                子公司的專員(Level 2)應在另一份檔案或系統內提供其子公司的具體排放及營運數據。</p><br/>
                <div class="ju">
                    <div class="flex3">
                        <div class="height3em al">
                            <span>{{$t('proCname')}}： </span>
                            <div style="flex:10"> 
                                <Input type="text" v-if="edit" v-model="detail.name" style="width:80%;" size="small" />
                                <span v-else>{{detail.name ? detail.name : 'Nothing'}} </span>
                                
                                <Icon type="md-create" size="15" class="eye" @click="edit=!edit" v-if="!edit" />
                                <Icon type="md-checkmark-circle-outline" color="green" v-else size="15" class="eye" @click="PUTPro" />
                            </div>
                        </div>

                        <div class="height3em al">
                            <span>{{$t('proEname')}}： </span>
                            <div style="flex:10"> 
                                <Input type="text" v-if="edit1" v-model="detail.name_en" style="width:80%;" size="small" />
                                <span v-else>{{detail.name_en ? detail.name_en : 'Nothing'}} </span>
                                
                                <Icon type="md-create" size="15" class="eye" @click="edit1=!edit1" v-if="!edit1" />
                                <Icon type="md-checkmark-circle-outline" color="green" v-else size="15" class="eye" @click="PUTPro" />
                            </div>
                        </div>

                        <div class="height3em al">
                            <span>{{$t('year')}}： </span>
                            <div style="flex:10"> 
                                <Input type="text" v-if="edit2" v-model="detail.year" style="width:83%;" size="small" />
                                <span v-else>{{detail.year ? detail.year : 'Nothing'}} </span>
                                
                                <Icon type="md-create" size="15" class="eye" @click="edit2=!edit2" v-if="!edit2" />
                                <Icon type="md-checkmark-circle-outline" color="green" v-else size="15" class="eye" @click="PUTPro" />
                            </div>
                        </div>

                        <div class="height3em al">
                            <span>{{$t('CIGS')}}： </span>
                            <div style="flex:10"> 
                                <Select v-model="detail.cigs_id" v-if="edit3" size="small" style="width:80%;">
                                    <Option v-for="(item,i) in CIGS" :key="i" :value="item.id"> {{item.name}}</Option>
                                </Select>
                                <span v-else>{{detail.cigs ? detail.cigs : 'Nothing'}} </span>
                                
                                <Icon type="md-create" size="15" class="eye" @click="edit3=!edit3" v-if="!edit3" />
                                <Icon type="md-checkmark-circle-outline" color="green" v-else size="15" class="eye" @click="PUTPro" />
                            </div>
                        </div>
                    </div>
                    <div class="flex3">
                        <div class="height3em sb">
                            <span >{{$t('remark')}}： </span>
                            <div style="flex:10"> 
                                <textarea type="text" v-if="edit4" v-model="detail.remark" style="width:83%;" size="small" rows="3" ></textarea>
                                <span v-else>{{detail.remark ? detail.remark : 'Nothing'}} </span>
                                
                                <Icon type="md-create" size="15" class="eye" @click="edit4=!edit4" v-if="!edit4" />
                                <Icon type="md-checkmark-circle-outline" color="green" v-else size="15" class="eye" @click="PUTPro" />
                            </div>
                        </div>

                        <div class="height3em sb">
                            <span >{{$t('createdAt')}}： </span>
                            <div style="flex:10"> 
                                <span >{{detail.createAt ? new Date(detail.createAt).toLocaleDateString() : 'Nothing'}} </span>
                            </div>
                        </div>

                        <div class="height3em sb">
                            <span >{{$t('updateAt')}}： </span>
                            <div style="flex:10"> 
                                <span >{{detail.updateAt ? new Date(detail.updateAt).toLocaleDateString() : 'Nothing'}} </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex3"> 
                        <br><br><br><br><br><br>
                        <div class="sb">
                            <div></div><Button type="default" @click="confirmData"><div style="width:140px;">{{$t("confirmData")}}</div></Button>
                        </div>
                        <br/>
                        <div class="sb">
                            <div></div>
                            <Button type="info" @click="changeType(3)">
                                <div style="min-width:140px;"><Icon type="md-create"  style="margin-right: 5px"/> {{$t("toForm")}}</div>
                            </Button>
                        </div>
                        <br>
                        <div class="sb">
                            <div></div><Button type="error"><div style="width:140px;" @click="del(detail)">{{$t("delete")}}</div></Button>
                        </div>
                        <br>
                        <div class="sb">
                            <div></div><Button type="default"><div style="width:140px;" @click="changeType(1)">{{$t("back")}}</div></Button>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="borderBox1" style="min-height:400px">
                <h3 class="boxTitle">{{$t('csdm')}}</h3>
                <div class="sb">
                    <div></div>
                    <div>
                        <Button type="info" @click="addTree" style="margin-right: 10px;">{{$t("create")}}{{$t("childCompany")}}</Button>
                        <Button type="info" @click="addOper">{{$t("create")}}{{$t("oper")}}</Button>
                        
                    </div>
                </div>
                <br>
                <div class="ju" v-if="treeData.label">
                    <vue2-org-tree name="data"
                        :data="treeData"
                        :horizontal="false"
                        :collapsable="false"
                        :label-class-name="'aaa'"
                        @on-node-click="onNodeClick"
                        :render-content="renderContent" />
                </div>
                <div class="ju" v-else>{{$t('noData')}}</div>
                
            </div>
        </div>
        
        <!-- 创建公司档案 -->
        <div v-show="type==3">
            <div class="sb" style="width: 100%;">
                <div @click="changeStep(1)" :class="['stepIcon']">
                    <div class="ju">
                        <svg class="cur" v-if="step>=1" width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#00549E"/>
                        </svg>
                        <svg class="cur" v-else  width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#85C7C3"/>
                        </svg>

                    </div><br>
                    <div class="ju bold cur">{{$t('cInfo')}}</div>
                    <svg v-if="step>=2" class="dir" width="429" height="16" viewBox="0 0 429 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M428.707 8.70711C429.098 8.31658 429.098 7.68342 428.707 7.29289L422.343 0.928932C421.953 0.538408 421.319 0.538408 420.929 0.928932C420.538 1.31946 420.538 1.95262 420.929 2.34315L426.586 8L420.929 13.6569C420.538 14.0474 420.538 14.6805 420.929 15.0711C421.319 15.4616 421.953 15.4616 422.343 15.0711L428.707 8.70711ZM0 9H428V7H0V9Z" fill="#00549E"/>
                    </svg>
                    <svg v-else class="dir" width="429" height="16" viewBox="0 0 429 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M428.707 8.70711C429.098 8.31658 429.098 7.68342 428.707 7.29289L422.343 0.928932C421.953 0.538408 421.319 0.538408 420.929 0.928932C420.538 1.31946 420.538 1.95262 420.929 2.34315L426.586 8L420.929 13.6569C420.538 14.0474 420.538 14.6805 420.929 15.0711C421.319 15.4616 421.953 15.4616 422.343 15.0711L428.707 8.70711ZM0 9H428V7H0V9Z" fill="#93C5C2"/>
                    </svg>
                </div>

                <div @click="changeStep(2)" :class="['stepIcon']">
                    <div class="ju">
                        <svg class="cur" v-if="step>=2" width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#00549E"/>
                        </svg>
                        <svg class="cur" v-else  width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#85C7C3"/>
                        </svg>

                    </div><br>
                    <div class="ju bold cur">{{$t('StakeholderParticipation')}}</div>
                    <svg v-if="step>=3" class="dir" width="429" height="16" viewBox="0 0 429 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M428.707 8.70711C429.098 8.31658 429.098 7.68342 428.707 7.29289L422.343 0.928932C421.953 0.538408 421.319 0.538408 420.929 0.928932C420.538 1.31946 420.538 1.95262 420.929 2.34315L426.586 8L420.929 13.6569C420.538 14.0474 420.538 14.6805 420.929 15.0711C421.319 15.4616 421.953 15.4616 422.343 15.0711L428.707 8.70711ZM0 9H428V7H0V9Z" fill="#00549E"/>
                    </svg>
                    <svg v-else class="dir" width="429" height="16" viewBox="0 0 429 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M428.707 8.70711C429.098 8.31658 429.098 7.68342 428.707 7.29289L422.343 0.928932C421.953 0.538408 421.319 0.538408 420.929 0.928932C420.538 1.31946 420.538 1.95262 420.929 2.34315L426.586 8L420.929 13.6569C420.538 14.0474 420.538 14.6805 420.929 15.0711C421.319 15.4616 421.953 15.4616 422.343 15.0711L428.707 8.70711ZM0 9H428V7H0V9Z" fill="#93C5C2"/>
                    </svg>
                </div>

                <div @click="changeStep(3)" :class="['stepIcon']">
                    <div class="ju">
                        <svg class="cur" v-if="step>=3"  width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#00549E"/>
                        </svg>
                        <svg class="cur" v-else  width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#85C7C3"/>
                        </svg>

                    </div><br>
                    <div class="ju bold cur">{{$t('AssessmentOfKeyIssues')}}</div>
                    <svg v-if="step>=4" class="dir" width="429" height="16" viewBox="0 0 429 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M428.707 8.70711C429.098 8.31658 429.098 7.68342 428.707 7.29289L422.343 0.928932C421.953 0.538408 421.319 0.538408 420.929 0.928932C420.538 1.31946 420.538 1.95262 420.929 2.34315L426.586 8L420.929 13.6569C420.538 14.0474 420.538 14.6805 420.929 15.0711C421.319 15.4616 421.953 15.4616 422.343 15.0711L428.707 8.70711ZM0 9H428V7H0V9Z" fill="#00549E"/>
                    </svg>
                    <svg v-else class="dir" width="429" height="16" viewBox="0 0 429 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M428.707 8.70711C429.098 8.31658 429.098 7.68342 428.707 7.29289L422.343 0.928932C421.953 0.538408 421.319 0.538408 420.929 0.928932C420.538 1.31946 420.538 1.95262 420.929 2.34315L426.586 8L420.929 13.6569C420.538 14.0474 420.538 14.6805 420.929 15.0711C421.319 15.4616 421.953 15.4616 422.343 15.0711L428.707 8.70711ZM0 9H428V7H0V9Z" fill="#93C5C2"/>
                    </svg>
                </div>

                <div @click="changeStep(4)" :class="['stepIcon']">
                    <div class="ju">
                        <svg class="cur" v-if="step>=4"  width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#00549E"/>
                        </svg>
                        <svg class="cur" v-else  width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#85C7C3"/>
                        </svg>

                    </div><br>
                    <div class="ju bold cur">{{$t('PolicyDescription')}}</div>
                </div>

                
                <!-- <div @click="changeStep(2)" :class="['stepIcon ju al',{stepAct:step==2}]">2.{{$t('StakeholderParticipation')}}</div>
                <div @click="changeStep(3)" :class="['stepIcon ju al',{stepAct:step==3}]">3.{{$t('AssessmentOfKeyIssues')}}</div>
                <div @click="changeStep(4)" :class="['stepIcon ju al',{stepAct:step==4}]">4.{{$t('PolicyDescription')}}</div> -->
            </div>
            <br>
            <div class="rela">
                <!-- 第一步 -->
                <div :class="['borderBox2 abso', { stepShow: step==1}]" v-show="step==1 || true">
                    <div class="sb">
                        <h3 class="boxTitle al sb"> {{$t('groupProfileInfoAdmin')}} </h3>
                        <label for="upPro1" @change="upLoad($event,'corporateInfo')">
                            <input type="file" id="upPro1" v-show="false" /> 
                            <div  class="blueBtn">{{$t('uploadFile')}}</div>
                        </label>
                    </div>
                    
                    <br>
                    <div class="al">
                        <h3>{{$t('mgsCIGS')}}：</h3>
                        <Select style="width: 200px" placeholder="GICS" v-model="cigsId">
                            <Option v-for="(item,i) in CIGS" :key="i" :value="item.id">{{item.name}}</Option>
                        </Select>
                        <Msg :msg="msg1"></Msg>
                    </div> 
                    <br>
                    <div class="al">
                        <h3>{{$t('totel_employee')}}：</h3>
                        <Input type="number" v-model="form1.total_employee" style="width:200px;" />
                    </div> 
                    <!-- 业务覆盖范围 -->
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('business_coverage')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <VueEditor v-model="form1.business_coverage"></VueEditor>
                    <!-- 主要业务 -->
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('major_business')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <VueEditor v-model="form1.major_business"></VueEditor>
                    <!-- 趋势 -->
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('trend')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <VueEditor v-model="form1.trend"></VueEditor>

                    <!-- 销售描述 -->
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('sales_description')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <VueEditor v-model="form1.sales_description"></VueEditor>
                    <!-- 会长 -->
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('chairman_word')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <VueEditor v-model="form1.chairman_word"></VueEditor>
                    <!-- 董事会 -->
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('board_of_director')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <VueEditor v-model="form1.board_of_director"></VueEditor>
                    <!-- esg结构 
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('esg_structure')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <div id="editor7"></div>-->
                    <!-- esg结构信息 -->
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('esg_structure_info')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <VueEditor v-model="form1.esg_structure_info"></VueEditor>
                    <!--esg环境策略 !-->
                    <br> <br>
                    <div class="al">
                        <h3>{{$t('esg_management_policy')}}:</h3>
                        <Msg></Msg>
                    </div><br>
                    <VueEditor v-model="form1.esg_management_policy"></VueEditor>

                    <br> <br>
                    <div class="al">
                        <h3>{{$t('kpi_target')}}:</h3>
                        <Msg></Msg>
                    </div>
                    <div class="kpiWrap">
                        <div v-for="(item,i) in form1.kpi_target" :key="i" class="kpi al sb">
                            <div class="al" style="width: 22%;">
                                <div>{{$t('KPIName')}}： </div>
                                <Input type="text" v-model="item.name" style="width:60%;" size="small" />
                            </div>
                            <div class="al" style="width: 15%">
                                <div>{{$t('theBenchmarkYear')}}： </div>
                                <Select style="width: 50%;" size="small" v-model="item.year">
                                    <Option v-for="(item,i) in yearList" :key="i" :value="item">{{item}}</Option>
                                </Select>
                            </div>

                            <div class="al" style="width: 30%">
                                <div>{{$t('emission')}}： </div>
                                <Input type="number" v-model="item.emission" style="width:30%" size="small" />
                                <Select  style="width:30%;" size="small" v-model="item.fuel_id">
                                    <Option v-for="(item,i) in fuel" :key="i" :value="item.id">{{item.name}}({{item.unit}})</Option>
                                </Select>
                            </div>
                            <div class="al" style="width: 22%;">
                                <div>{{$t('theBenchmarkYearPercent')}}： </div>
                                <Input type="number" v-model="item.percent" style="width:60%;" size="small" />
                            </div>
                            <div class="delBtn ju al" @click="delKPI(i)"><div></div></div>
                        </div>
                        <br>
                        <div class="sb">
                            <div></div>
                            <Button type="info"  @click="addKPI">
                                <div style="width: 100px;">{{$t('addKpiT')}}</div>
                            </Button>
                        </div>
                    </div>
                    <br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeType(2)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save1(false)">{{$t("save")}}</div>
                            <div class="primaryBtn btnMargin" @click="save1(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>

                </div>
                <!-- 第二步 -->
                <div :class="['borderBox2 abso', { stepShow: step==2}]"  v-show="step==2 || true">
                    <div class="sb">
                        <h3 class="boxTitle al sb"> {{$t('spidm')}} </h3>
                        <label for="upPro2" @change="upLoad($event,'stakeholder','upload/info2')">
                            <input type="file" id="upPro2" v-show="false" /> 
                            <div  class="blueBtn">{{$t('uploadFile')}}</div>
                        </label>
                    </div>
                    <br>

                    <div v-for="(item,i) in form2" :key="i" class="blueBor">
                        <div class="delBtn ju al" @click="delMan(i)"><div></div></div>

                        <div class="al">
                            <h3>{{$t('shareholders')}}：</h3>
                            <Input type="text" style="width:200px;" v-model="item.man" :placeholder="$t('enterSh')" />
                            <Msg></Msg>
                        </div>
                        <br>
                        <div class="sb threeBoxWrap">
                            <div>
                                <div class="al">
                                    <h3>{{$t('communication_channel')}}：</h3>
                                    <Msg :msg="[]"></Msg>
                                </div><br>
                                
                                <VueEditor v-model="item.communication_channel"></VueEditor>
                            </div> 
                            
                            <div>
                                <div class="al">
                                    <h3>{{$t('expectations_demands')}}：</h3>
                                    <Msg :msg="[]"></Msg>
                                </div> <br>
                                <VueEditor v-model="item.expectations_demands"></VueEditor>
                            </div>

                            <div>
                                <div class="al">
                                    <h3>{{$t('response')}}：</h3>
                                    <Msg :msg="[]"></Msg>
                                </div> <br>
                                <VueEditor v-model="item.response"></VueEditor>
                            </div>
                            
                            
                            
                        </div>
                        

                    </div>
                    <br>
                    <div class="sb">
                        <div></div>
                        <div class="blueBtn" style="margin-right: 5px" @click="addMan">{{$t('addSh')}}</div>
                    </div>

                    <br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(1)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save2(false)">{{$t("save")}}</div>
                            <div class="primaryBtn btnMargin" @click="save2(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>

                </div>

                <!-- 第三步 -->
                <div :class="['borderBox2 abso', { stepShow: step==3}]"  v-if="step==3 || true">
                    <div class="sb">
                        <h3 class="boxTitle al sb"> {{$t('iadm')}} </h3>
                        <label for="upPro3" @change="upLoad($event,'evaluation','upload/info2')">
                            <input type="file" id="upPro3" v-show="false" /> 
                            <div  class="blueBtn">{{$t('uploadFile')}}</div>
                        </label>
                    </div>
                    <br>

                    <div v-for="(item,i) in assess" :key="i" >
                        <div>
                            <div class="blueTitle ju al">{{item.title}}</div>
                        </div>
                        <div class="blueBorder">
                            <div v-for="(key,j) in item.lay" :key="j">
                                <div class="smallText1">{{key.title}}</div>
                                <!-- <br> -->
                                <div class="grid1 bold borderB">
                                    <div>项目</div>
                                    <div>一般披露及关键绩效指标</div>
                                    <div>内部评估分数</div>
                                    <div>外部评估分数</div>
                                </div>
                                <div class="dataWrap">
                                    <div class="grid1" v-for="(row,i) in key.data" :key="i">
                                        <div>{{row.project}}</div>
                                        <div style="text-align:left;">{{row.text}}</div>
                                        <div>
                                            <select size="small" style="width: 60%;padding: 0.5em" v-model="row.inside">
                                                <option :value="1">1</option>
                                                <option :value="2">2</option>
                                                <option :value="3">3</option>
                                                <option :value="4">4</option>
                                                <option :value="5">5</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select size="small" style="width: 60%;padding: 0.5em" v-model="row.outside">
                                                <option :value="1">1</option>
                                                <option :value="2">2</option>
                                                <option :value="3">3</option>
                                                <option :value="4">4</option>
                                                <option :value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <br><br>
                            </div>
                            
                        </div>
                        <br><br>
                    </div>
                    



                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(2)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save3(false)">{{$t("save")}}</div>
                            <div class="primaryBtn btnMargin" @click="save3(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>



                </div>

                <!-- 第四步 -->
                <div :class="['borderBox2 abso', { stepShow: step==4}]"  v-show="step==4 || true">
                    <div class="sb">
                        <h3 class="boxTitle al sb"> {{$t('pddm')}} </h3>
                        <label for="upPro4" @change="upLoad($event,'policy','upload/info2')">
                            <input type="file" id="upPro4" v-show="false" /> 
                            <div  class="blueBtn">{{$t('uploadFile')}}</div>
                        </label>
                    </div>
                    <br>

                    <div v-for="(item,i) in policy" :key="i">
                        <h2>{{item.title}}</h2>
                        <br>
                        <div v-for="(key,j) in item.item" :key="j">
                            <div>
                                <div class="blueTitle ju al">{{key.title}}</div>
                            </div>
                            <div class="blueBorder">
                                <div class="grid2 bold borderB">
                                    <div>問題</div>
                                    <div>政策</div>
                                    <div>執行實例</div>
                                    <div>不披露</div>
                                </div>

                                <div>
                                    <div class="grid2" v-for="(row,k) in key.data" :key="k">
                                        <div>{{row.q}}</div>
                                        <div>
                                            <textarea v-if="!row.val" v-model="row.policy" style="width:90%;padding: 0.8em;" rows="5"></textarea>
                                            <div v-else>{{row.val}}</div>
                                        </div>
                                        <div>
                                            <textarea v-if="!row.val" v-model="row.example" style="width:90%;padding: 0.8em;" rows="5"></textarea>
                                            <div v-else>{{row.val}}</div>
                                        </div>
                                        <div>
                                            <select v-model="row.val">
                                                <option value="" selected>不披露原因</option>
                                                <option value="不重要">不重要</option>
                                                <option value="保密限制">保密限制</option>
                                                <option value="特定的法律禁止事項">特定的法律禁止事項</option>
                                                <option value="沒有相關資料">沒有相關資料</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br><br>
                        </div>
                        
                    </div>
                    


                    
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(3)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save4(false)">{{$t("save")}}</div>
                            <div class="primaryBtn btnMargin" @click="save4(true)">{{$t("saveAndBack")}}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        
        <div v-show="re"></div>
    </div>
</template>

<script>
import policy from "./policy.js"
import assess from "./assess.js"
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'

export default {
    data () {
        return {
            baseURL:"",
            editor1: {},
            editor2: {},
            editor3: {},
            editor4: {},
            editor5: {},
            editor6: {},
            editor7: {},
            editor8: {},
            editor9: {},
            editor10: {},
            editor11: {},
            editor12: {},
            treeData: {
                // id: 1,
                // label: '母公司',
                // children: [
                //     {
                //         id: 2,
                //         label: '子公司一',
                //         children: [
                //             {
                //                 id: 5,
                //                 label: '辦公室'
                //             }, 
                //             {
                //                 id: 6,
                //                 label: '門市'
                //             },
                //             {
                //                 id: 9,
                //                 label: '工場'
                //             },
                //         ]
                //     },
                //     {
                //         id: 3,
                //         label: '子公司2',
                //         children: [
                //             {
                //                 id: 7,
                //                 label: 'Sales 1'
                //             }, 
                //             {
                //                 id: 8,
                //                 label: 'Sales 2'
                //             }
                //         ]
                //     },
                //     {
                //         id: 4,
                //         label: '子公司3'
                //     },
                // ]
            },
        
            columns: [
                {
                    title: "ID",
                    key: "id",
                },
                {
                    title: "Daname_cn",
                    key: "name",
                },
                {
                    title: "Daname_en",
                    key: "name_en",
                },
                {
                    title: "updateAt",
                    key: "updateAt",
                    time: true,
                },
                {
                    title: "CIGS",
                    key: "cigs",
                },
                {
                    title: "remark",
                    key: "remark",
                },
                {
                    title: "status",
                    key: "status",
                    slot:"status"
                },
                {
                    title: "year",
                    key: "year"
                },
                /*{
                    title: "level",
                    key: "level"
                },*/
                
                {
                    title: "action",
                    slot:"btn",
                    noSearch:true,
                    width:"150%"
                }
                
            ],
            list: [],
            rules: {
                name: [
                    { required: true, message: " ", trigger: "blur" }
                ],
                child_company_uuid:[
                    { required: true, message: " " }
                ],
                description: [
                    { required: true, message: " ", trigger: "blur" }
                ],
                password2: [
                    { required: true, message: " ", trigger: "blur" }
                ],
                location: [
                    { required: true, message: " ", trigger: "blur" }
                ],
                childIndex: [
                    { required: true, message: " " }
                ],
                cigs_id: [
                    { required: true, message: " " }
                ],
            },
            re: false,
            showAdd: false,
            addForm: {
                name: "",description:""
            },
            addForm2: {
                name: "",location:"",childIndex:"", cigs_id:""
            },
            editForm: {
                name: "",description:""
            },
            editForm2: {
                name: "",location:"",child_company_uuid:"", cigs_id:"",company_uuid:""
            },
            child_company_uuid:"",
            currentTree: {},
            childEdit: false,
            operEdit: false,
            type: 1,   //1显示table , 2 显示 档案详情, 3 显示新增档案
            detail: {},
            currentSType: "",
            allData: [],
            searchType: [],
            keyword:"",
            edit: false,edit1: false,edit2: false,edit3: false,edit4: false,
            showOper:false,
            step: 1,   //創建檔案步驟
            msg1: ["1.該頁面顯示公司的基本資料"],   //公司基本資料管理的提示
            accountInfo:{},  
            load: false,
            CIGS:[],
            fuel: [],
            yearList: [],
            cigsId:"",
            form1: {
                business_coverage: "", //業務覆蓋範圍
                "major_business":"",   //主要业务
                "trend":"",         //趋势
                "total_employee":"",   //总人数
                "sales_description":"",  //销售描述
                "chairman_word":"",          //会长
                "board_of_director":"",       //董事会
                "esg_structure":"{['abc']}",    //esg结构
                "esg_structure_info":"",        //esg信息
                "esg_management_policy":"",    //esg环境管理政策
                "kpi_target":[{  //kpi目标
                    name:"",
                    year:"",
                    emission:"",
                    fuel_id:"",
                    percent:""
                }]      
            },
            form2:[],
            form4: {
                data: [
                    {   
                        question:"廢氣及溫室氣體排放的管理政策及執行實例",
                        policy:"",
                        implementation_example:""
                    },
                    {   
                        question:"向水及土地排的管理政策及執行實例",
                        policy:"",
                        implementation_example:""
                    },
                ]
            },
            loading: true,
            childCompany:[],    // 所有子公司
            operList: [],       //所有運營點
            loading:false,
            //重要議題評估
            assess:[],
            policy: [],
            mans: {},   //存放持分者 editor
        }
    },
    watch: {
        step (val) {
            document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
            if (val == 1) {
                this.getOneInfo()
            }
            if (val == 2) {
                this.getTwoInfo()
            }
            if (val == 3) {
                this.getThree()
            }
            if (val == 4) {
                this.getFour()
            }
        },
        '$store.state.app.local' () {
            this.searchType = []
            this.searchType.push({name: this.$t('id'), key: "id" })
            this.searchType.push({name: this.$t('allName'), key: "name" })
            this.searchType.push({name: this.$t('name_en'), key: "name_en" })
            this.searchType.push({name: this.$t('CIGS'), key: "cigs" })
            this.searchType.push({name: this.$t('status'), key: "status" })
            this.searchType.push({name: this.$t('year'), key: "year" })
            this.searchType.push({name: this.$t('level'), key: "level" })
        },
        type (val) {
            if (val == 1) {
                this.getProfile()
            }
        },
    },
    activated () {
        let accountInfo = localStorage.getItem("accountInfo")
        if (accountInfo) {
            this. accountInfo = JSON.parse(accountInfo)
        }
        this.getCIGS()
        this.getFuel()
        // this.getProfile()
        this.searchType.push({name: this.$t('id'), key: "id" })
        this.searchType.push({name: this.$t('allName'), key: "name" })
        this.searchType.push({name: this.$t('name_en'), key: "name_en" })
        this.searchType.push({name: this.$t('CIGS'), key: "cigs" })
        this.searchType.push({name: this.$t('status'), key: "status" })
        this.searchType.push({name: this.$t('year'), key: "year" })
        this.searchType.push({name: this.$t('level'), key: "level" })
        this.assess = JSON.parse(JSON.stringify(assess))
        this.policy = JSON.parse(JSON.stringify(policy))
    },
    mounted () {
        this.baseURL = window.baseURL2
        // this.createEditor()
        let y = new Date().getFullYear()
        for(let i=0;i<20;i++) {
            this.yearList.push(y)
            y--
        }

        this.form2 = []
        this.addMan()
    },
    methods:{
        downLoad (row) {
            // window.open(this.baseURL + 'pdfdown/?id=' + row.uuid)
            window.open(this.baseURL + 'reportPDF/?id=' + row.uuid)
        },
        upLoad (e,act,url) {
            let action = "corporateInfo"
            if (this.step == 2) {
                action = "stakeholder"
            } else if (this.step == 3) {
                action = "evaluation"
            } else if (this.step == 4) {
                action = "policy"
            }
            let link = "upload/info"
            if (url) { link = url }
            let f = (e.target.files[0])
            let Form = new FormData()
            Form.append("file", f)
            Form.append("action", action)
            this.$axios({
                url: window.baseURL.replace("user","") + link,
                data: Form,
                method:"POST"
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.$Message.success(this.$t('upSuccess'))
                    
                    if (this.type == 2) {
                        this.showAdd = false
                        this.showOper = false
                        this.getTree()
                    } else if (this.type == 3) {
                        if (this.step == 1) {
                            this.getOneInfo()
                        } else if (this.step == 2) {
                            this.getTwoInfo()
                        } else if (this.step == 3) {
                            this.getThree()
                        } else if (this.step == 4) {
                            this.getFour()
                        }
                    }
                } else {
                    this.$Message.warning(this.$t('upFail'))
                }
                
            }).catch(e => {
                this.$Message.error(this.$t('ErrMsg'))
                console.log(e)
            })
            e.target.value = ""
        },
        confirmData () {
            let that= this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureCon"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/complete",
                        method:"PUT",
                        data: {
                            "uuid":that.detail.uuid,
                            "status":"2"
                        }
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.data.msg)
                        }
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //增加持分者
        addMan (item) {
            let that = this
            if (item) {
                this.form2.push({
                    communication_channel:item.communication_channel,
                    expectations_demands:item.expectations_demands,
                    response:item.response,
                    man:item.man,
                })
            } else {
                this.form2.push({
                    communication_channel:"",
                    expectations_demands:"",
                    response:"",
                    man:"",
                })
            }
            
            // let i= this.form2.length-1
            // this.$nextTick(() => {
            //     document.getElementById("communication_channel" + i).innerHTML = ""
            //     document.getElementById("expectations_demands" + i).innerHTML = ""
            //     document.getElementById("response" + i).innerHTML = ""

            //     this.mans['communication_channel' + i] = new Editor(`#communication_channel${i}`)
            //     this.mans['communication_channel' + i].customConfig.onchange = (html) => { that.form2[i].communication_channel = html }
            //     this.mans['communication_channel' + i].create()

            //     this.mans['expectations_demands' + i] = new Editor(`#expectations_demands${i}`)
            //     this.mans['expectations_demands' + i].customConfig.onchange = (html) => { that.form2[i].expectations_demands = html }
            //     this.mans['expectations_demands' + i].create()

            //     this.mans['response' + i] = new Editor(`#response${i}`)
            //     this.mans['response' + i].customConfig.onchange = (html) => { that.form2[i].response = html }
            //     this.mans['response' + i].create()

            //     if (item) {
            //         this.mans['communication_channel' + i].txt.html(item.communication_channel)
            //         this.mans['expectations_demands' + i].txt.html(item.expectations_demands)
            //         this.mans['response' + i].txt.html(item.response)
            //     }
            // })
        },
        //刪除持份者
        delMan (i) {
            this.form2.splice(i,1)
            this.mans["communication_channel" + i] = null
            this.mans["expectations_demands" + i] = null
            this.mans["response" + i] = null
        },
        //預覽第四部的數據
        getFour () {
            this.$axios({
                url: "basicInfo/policy?profileId=" + this.detail.uuid
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    if (res.data.data.policy) {
                        if (res.data.data.policy[0]) {
                            // this.policy = JSON.parse(res.data.data.policy[0])
                            let policy= res.data.data.policy[0]
                            let Implementation_example = res.data.data.Implementation_example[0]
                            console.log(Implementation_example,res.data.data)
                            this.policy.forEach(item => {
                                item.item.forEach(data => {
                                    data.data.forEach(list => {
                                        policy.forEach((obj,i) => {
                                            if (list.key == obj.key) {
                                                list.policy = obj.value
                                                list.val = obj.val
                                                list.example = Implementation_example[i].value
                                            }
                                            // console.log(obj,list)
                                        })
                                    })
                                })
                            })
                        } else {
                            this.policy = JSON.parse(JSON.stringify(policy))
                        }
                    } else {
                        this.policy = JSON.parse(JSON.stringify(policy))
                    }
                   
                }
            })
        },
        //預覽第三部的數據
        getThree () {
            this.$axios({
                url:"basicInfo/evaluation?profileId=" + this.detail.uuid
            }).then(res => {
                console.log("three",res)
                if (res.data.code == 200) {
                    if (res.data.data.Internal_evaluation) {
                        if (res.data.data.Internal_evaluation[0]) {
                            // this.assess = JSON.parse(res.data.data.Internal_evaluation[0])
                            let Internal_evaluation = res.data.data.Internal_evaluation[0]
                            let external_evaluation = res.data.data.external_evaluation[0]
                            this.assess.forEach(item => {
                                item.lay.forEach(lay => {
                                    lay.data.forEach(list => {
                                        Internal_evaluation.forEach((obj,i) => {
                                            if (obj.key == list.key) {
                                                list.inside = obj.value
                                                list.outside = external_evaluation[i].value
                                            }
                                        })
                                    })
                                })
                            })

                        } else {
                            this.assess = JSON.parse(JSON.stringify(assess))
                        }
                    } else {
                        this.assess = JSON.parse(JSON.stringify(assess))
                    }
                   
                }
            })
        },
        //预览第二步的数据
        getTwoInfo () {
            this.$axios({
                url: "basicInfo/stakeholder?profileId=" + this.detail.uuid
            }).then(res => {
                console.log("two",res)
                if (res.data.code == 200) {
                    if (res.data.data.communication_channel) {
                        if (res.data.data.communication_channel[0]) {
                            let communication_channel = res.data.data.communication_channel[0]
                            let expectations_demands = res.data.data.expectations_demands[0]
                            let response = res.data.data.response
                            let arr = []
                            communication_channel.forEach((item,i) => {
                                arr.push({
                                    communication_channel: item.value,
                                    expectations_demands: expectations_demands[i].value,
                                    response: response[i].value,
                                    man: item.name,
                                })
                            })
                            // console.log(arr)
                            this.form2 = []
                            arr.forEach((item,i) =>{
                                this.addMan(item)
                            })
                        } else {
                            this.form2 = []
                            this.addMan()
                        }
                    } else {
                        this.form2 = []
                        this.addMan()
                    }
                   
                }
            })
        },
        //预览第一步的数据
        getOneInfo () {
            this.$axios({
                url: "basicInfo/corporateInfo?profileId=" + this.detail.uuid
            }).then(res => {
                console.log("one",res)
                if (res.data.code == 200) {
                    let info = res.data.data
                    this.cigsId = info.cigs_id
                    this.form1.business_coverage = info.business_coverage
                    this.form1.major_business = info.major_business
                    this.form1.trend = info.trend
                    this.form1.total_employee = info.total_employee
                    this.form1.sales_description = info.sales_description
                    this.form1.chairman_word = info.chairman_word
                    this.form1.board_of_director = info.board_of_director
                    this.form1.esg_structure = info.esg_structure
                    this.form1.esg_structure_info = info.esg_structure_info
                    // console.log(info.kpi_target)
                    if (info.kpi_target){
                        this.form1.kpi_target = JSON.parse(info.kpi_target)
                        // this.form1.kpi_target = JSON.parse(this.form1.kpi_target)
                    } else {
                        this.form1.kpi_target = []
                    }
                    this.editor1.txt.html(this.form1.business_coverage)
                    this.editor2.txt.html(this.form1.major_business)
                    this.editor3.txt.html(this.form1.trend)
                    this.editor4.txt.html(this.form1.sales_description)
                    this.editor5.txt.html(this.form1.chairman_word)
                    this.editor6.txt.html(this.form1.board_of_director)
                    this.editor7.txt.html(this.form1.esg_structure)
                    this.editor8.txt.html(this.form1.esg_structure_info)
                    this.editor9.txt.html(this.form1.esg_management_policy)
                }
            })
        },
        toInfoPage () {
            this.operEdit = false
            this.$router.push({
                path: "/operationpoint",
                query: {
                    uuid: this.currentTree.uuid
                }
            })
        },
        okEditOper () {
            let that = this
            let data = {
                uuid: this.currentTree.uuid,
                company_uuid: this.accountInfo.user_detail.company_uuid,
                child_company_uuid: this.editForm2.company_uuid,
                company_profile_uuid: this.currentTree.company_profile_uuid,
                cigs_id: this.editForm2.cigs_id*1,
                name: this.editForm2.name,
                location: this.editForm2.location
            }
            console.log(data)
            this.$refs.editForm2.validate(boo => {
                if (boo) {
                    that.$axios({
                        url: "operationpoint",
                        method:"PUT",
                        data
                    }).then(res => {
                        console.log("operationpoint",res)
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t("saved"))
                            that.operEdit = false
                            that.getTree()
                        } else {
                            that.$Message.warning("error")
                        }
                    }).catch(e => {
                        console.log(e)
                        that.$Message.error("error")
                    })
                }
                this.hideLoading()
            })
        },
        //編輯子公司
        okEditChild () {
            let that = this
            let data = {
                uuid: that.editForm.uuid,
                name: that.editForm.name,
                description: that.editForm.description,
                company_profile_uuid:that.detail.uuid
            }
            console.log(data)
            // let 
            this.$refs.editForm.validate(boo => {
                
                if (boo) {
                    that.$axios({
                        url: "childCompany",
                        method:"PUT",
                        data
                    }).then(res => {
                        console.log("child Company",res)
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t("saved"))
                            that.childEdit = false
                            that.getTree()
                        } else {
                            that.$Message.warning("error")
                        }
                    }).catch(e => {
                        console.log(e)
                        that.$Message.error("error")
                    })
                }
                this.hideLoading()
            })
        },
        //創建營業點
        okAddOper () {
            let that = this
            let data = {
                company_uuid: this.accountInfo.user_detail.company_uuid,
                company_profile_uuid: this.detail.uuid,
                child_company_uuid: this.childCompany[this.addForm2.childIndex*1].uuid,
                cigs_id: this.addForm2.cigs_id*1,
                name: this.addForm2.name,
                location: this.addForm2.location
            }
            this.$refs.addForm2.validate(boo => {
                if (boo) {
                    that.$axios({
                        url: "operationpoint",
                        method:"POST",
                        data
                    }).then(res => {
                        console.log("operationpoint",res)
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t("success"))
                            that.showOper = false
                            that.getTree()
                            this.addForm2.name = ""
                            this.addForm2.company_uuid = ""
                            this.addForm2.cigs_id = ""
                            this.addForm2.company_profile_uuid = ""
                            this.addForm2.location = ""
                            this.addForm2.child_company_uuid = ""
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                    }).catch(e => {
                        console.log(e)
                        that.$Message.error("error")
                    })
                }
                this.hideLoading()
            })
        },
        //創建子公司
        okAddTree () {
            let that = this
            let data = {
                name: that.addForm.name,
                description: that.addForm.description,
                company_profile_uuid:that.detail.uuid
            }
            console.log(data)
            // let 
            this.$refs.addForm.validate(boo => {
                
                if (boo) {
                    that.$axios({
                        url: "childCompany",
                        method:"POST",
                        data
                    }).then(res => {
                        console.log("child Company",res)
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t("success"))
                            that.showAdd = false
                            that.getTree()
                            this.addForm.name = ""
                            this.addForm.description = ""
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                    }).catch(e => {
                        console.log(e)
                        that.$Message.error("error")
                    })
                }
                this.hideLoading()
            })
        },
        //獲取子公司,運營點,然後做成tree結構
        getTree() {
            this.$axios({
                url:"profile",
                method:"GET",
                params:{
                    uuid: this.detail.uuid,
                    companyId: this.accountInfo.user_detail.id
                }
            }).then(res => {
                // console.log(res)
                if (res.data.code == 200) {
                    // res.data.data.org_tree = res.data.data.org_tree.replace(/[']/g,'"')
                    // res.data.data.org_tree = JSON.parse(res.data.data.org_tree)
                    res.data.data.label = res.data.data.name
                    this.detail = res.data.data
                    // this.treeData = this.detail.org_tree
                    this.treeData = {
                        id: res.data.data.id,
                        label: res.data.data.name,
                        children: []
                    }
                    console.log(this.detail,this.treeData)

                    this.$axios({
                        url: "childCompany",
                        params: {
                            companyId: this.detail.uuid
                        }
                    }).then(child => {
                        // console.log(child)
                        if (child.data.code == 200) {
                            this.childCompany = child.data.data
                            this.treeData.children = this.childCompany
                            this.treeData.children.forEach(c => {
                                c.label = c.name
                                c.type = "child"
                                // c.children = []
                                
                                this.$axios({
                                    url: "operationpoint",
                                    params: {
                                        childId: c.uuid,
                                    }
                                }).then(oper => {
                                    // console.log(oper)
                                    if (oper.data.code == 200) {
                                        // console.log(c,oper.data.data)
                                        oper.data.data.forEach(o => {
                                            o.label = o.name
                                            o.type = "oper"
                                        })
                                        this.operList = oper.data.data
                                        c.children = oper.data.data
                                        setTimeout(() => {
                                            this.treeData = JSON.parse(JSON.stringify(this.treeData))

                                        },200)
                                        this.re = !this.re
                                    } else {
                                        this.operList = []
                                        c.children = []
                                    }
                                })
                            })

                            

                        } else {
                            this.childCompany = []
                            this.treeData.children = []
                        }
                    })


                } else {
                    this.detail = {}
                }
            })
        },
        save4 (boo) {
            let policy = []
            let implementation_example = []
            this.policy.forEach(item => {
                item.item.forEach(data => {
                    data.data.forEach(list => {
                        policy.push({
                            key: list.key,
                            value: list.policy,
                            val: list.val
                        })
                        implementation_example.push({
                            key: list.key,
                            value: list.example,
                            val: list.val
                        })
                    })
                })
            })

            let data = {
                "profile_uuid":this.detail.uuid,
                "policy":policy,
                "implementation_example":implementation_example
            }
            this.load = true
            this.$axios({
                url:"basicInfo/policy",
                method:"PUT",
                data
            }).then(res => {
                console.log(res)
                this.load = false
                if (res.data.code == 200) {
                    this.$Message.success(this.$t('saved'))
                    if (boo) {
                        this.changeStep(1)
                        this.changeType(1)
                    }
                } else {
                    this.$Message.warning(res.data.msg)
                }
                this.getFour()
            }).catch(e => {
                console.log(e)
                this.load = false
                this.$Message.error(this.$t('ErrMsg'))
            })
        },
        save3 (boo) {
            // let bo = this.assess.every(item => {
            //     let a = item.lay.every(ceng => {
            //         let cBoo = ceng.data.every(d => {
            //             console.log(d)
            //             return d.inside != 0 && d.outside != 0
            //         })
            //         console.log(cBoo)
            //         return cBoo
            //     })
            //     console.log(a)
            //     return a
            // })
            // if (bo) {
            //     //每一項都選擇了
            // } else {
            //     // 未全部選擇

            // }


            let Internal_evaluation = []
            let external_evaluation = []

            this.assess.forEach(item => {
                item.lay.forEach(lay => {
                    lay.data.forEach(list => {
                        Internal_evaluation.push({
                            key: list.key,
                            value: list.inside
                        })
                        external_evaluation.push({
                            key: list.key,
                            value: list.outside
                        })
                    })
                })
            })
            // console.log(Internal_evaluation,external_evaluation)



            let data = {
                "profile_uuid":this.detail.uuid,
                // "Internal_evaluation":JSON.stringify(Internal_evaluation),
                // "external_evaluation":JSON.stringify(external_evaluation),
                "Internal_evaluation":Internal_evaluation,
                "external_evaluation":external_evaluation
            }
            // console.log(data)



            this.load = true
            this.$axios({
                url:"basicInfo/evaluation",
                method:"PUT",
                data
            }).then(res => {
                console.log(res)
                this.load = false
                if (res.data.code == 200) {
                    this.$Message.success(this.$t('saved'))
                    if (boo) { this.step = 4 }
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
                this.getThree()
            }).catch(e => {
                console.log(e)
                this.load = false
                this.$Message.error(this.$t('ErrMsg'))
            })
            
        },
        save2 (boo) {
            let communication_channel = []
            let expectations_demands = []
            let response = []
            this.form2.forEach(item => {
                communication_channel.push({
                    name: item.man,
                    value: item.communication_channel
                })
                expectations_demands.push({
                    name: item.man,
                    value: item.expectations_demands
                })
                response.push({
                    name: item.man,
                    value: item.response
                })
            })


            let data = {
                "profile_uuid":this.detail.uuid,
                communication_channel,
                expectations_demands,
                response
            }
            console.log(data)
            this.load = true
            this.$axios({
                url:"basicInfo/stakeholder",
                method:"PUT",
                data
            }).then(res => {
                console.log(res)
                this.load = false
                if (res.data.code == 200) {
                    this.$Message.success(this.$t('saved'))
                    if (boo) { this.step = 3 }
                    else {
                        this.getTwoInfo()
                    }
                } else {
                    this.$Message.warning(res.data.msg)
                }
            }).catch(e => {
                this.load = false
                this.$Message.error(this.$t('ErrMsg'))
            })
            
        },
        PUTPro () {
            this.edit = false
            this.edit1 = false
            this.edit2 = false
            this.edit3 = false
            this.edit4 = false
            this.$axios({
                url: "profile",
                data:{
                    "uuid":this.detail.uuid,
                    "name": this.detail.name,
                    "name_en": this.detail.name_en,
                    "org_tree": this.detail.org_tree,
                    "year": Number(this.detail.year),
                    "cigs_id" : Number(this.detail.cigs_id),
                    "remark": this.detail.remark
                },
                method:"PUT"
            }).then(res => {
                console.log(res)
                this.$Message.success(this.$t("saved"))
                this.getProfile()
            })
        },
        changeStep (step) {
            this.step = step
        },
        //第一步點擊保存
        save1 (boo) {
            // this.$Message.success(this.$t('success'))
            let data = {
                "profile_uuid":this.detail.uuid,
                "cigs_id": Number(this.cigsId),
                "business_coverage": this.form1.business_coverage,
                "major_business":this.form1.major_business,
                "trend":this.form1.trend,
                "total_employee":this.form1.total_employee,
                "sales_description":this.form1.sales_description,
                "chairman_word":this.form1.chairman_word,
                "board_of_director":this.form1.board_of_director,
                "esg_structure":JSON.stringify(this.treeData),            // "{['abc']}"
                "esg_structure_info":this.form1.esg_structure_info,
                "esg_management_policy":this.form1.esg_management_policy,
                "kpi_target":JSON.stringify(this.form1.kpi_target )                    //"{['abc']}"
            }
            console.log(data,Boolean(boo))
            this.load = true
            this.$axios({
                url:"basicInfo/corporateInfo",
                method:"PUT",
                data
            }).then(res => {
                console.log(res)
                this.load = false
                if (res.data.code == 200) {
                    this.$Message.success(this.$t('saved'))
                    // this.$Message.error("success")
                    this.getOneInfo()
                    if (boo) { this.step = 2 }
                } else {
                    // this.$Message.warning(res.data.msg)
                }
            }).catch(e => {
                console.log(e)
                this.load = false
                this.$Message.error(this.$t('ErrMsg'))
            })
        },
        addTree () {
            this.showAdd = true
        },
        addOper () {
            this.showOper = true
        },
        renderContent(h, data) {
            return data.label;
        },
        //刪除運營點
        delOper () {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint?id=" + that.currentTree.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                            that.operEdit = false
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.getTree()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //刪除子公司
        delChild ( ) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "childCompany?uuid=" + that.currentTree.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                            that.childEdit = false
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.getTree()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //点击tree节点
        onNodeClick (e,data) {
            console.log(data)
            this.currentTree = data
            if (data.type == "child") {
                this.childEdit = true
                this.editForm.name = data.name
                this.editForm.uuid = data.uuid
                this.editForm.description = data.description
            } else if (data.type == "oper") {
                this.operEdit = true
                this.editForm2.company_uuid = data.company_uuid
                this.editForm2.child_company_uuid = data.child_company_uuid
                this.child_company_uuid = data.child_company_uuid
                this.editForm2.cigs_id = data.cigs_id
                this.editForm2.name = data.name
                this.editForm2.location = data.location
            }
            
        },
        //點擊表格
        clickRow (item) {
            console.log(item)
            item.label = item.name
            this.detail = JSON.parse(JSON.stringify(item))
            this.type = 2
            // if (typeof this.detail.org_tree == "string") {
            //     let tree = this.detail.org_tree.replace(/[']/g,'"')
            //     this.treeData = JSON.parse(tree)
            // } else {
            //     this.treeData = this.detail.org_tree
            // }
            
            // this.treeData.children.forEach(c => {
            //     c.label = c.name
            //     c.type = "child"
            //     if (c.children) {
            //         c.children.forEach(o => {
            //             o.label = o.name
            //             o.type = "oper"
            //         })
            //     }
            // })
            // this.treeData = JSON.parse(JSON.stringify(this.treeData))
            this.getTree()
            this.getOneInfo()
        },
        del (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "profile?uuid=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                            that.type = 1
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.getProfile()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //過濾
        okSearch () {
            if (this.currentSType) {
                this.list= this.allData.filter(item => {
                    if (String(item[this.currentSType]).includes(this.keyword)) {
                        return true
                    }
                })
            }
        },
        createProfile () {
            this.$axios({
                url: "profile",
                method:"POST",
                data: {
                    uuid: this.accountInfo.user_detail.company_uuid
                }
            }).then(res => {
                console.log("create",res)
                this.$Message.success(this.$t("success"))
                this.getProfile()
            })
        },
        getProfile () {
            this.$axios({
                url: "profile",
                method:"GET",
                params: {
                    // uuid:"d3635639-2eba-477c-b41e-1890fd217aef",
                    companyId: this.accountInfo.user_detail.company_uuid
                }
            }).then(res => {
                console.log("GET",res)
                if (res.data.code == 200) {
                    res.data.data.forEach(item => {
                        // if (item.org_tree) {
                            // console.log(item.org_tree)
                            // item.org_tree = JSON.parse(item.org_tree)
                        // }
                        this.CIGS.forEach(c => {
                            if (item.cigs_id == c.id) {
                                item.cigs = c.name
                            }
                        })
                        if (this.detail.uuid == item.uuid) {
                            this.detail = item
                        }
                    })
                    this.allData = this.list = res.data.data
                } else {
                    this.list = []
                }
                this.loading = false
            }).catch(e => {
                this.loading = false
                console.log(e)
            })
        },
        delKPI (i) {
            this.form1.kpi_target.splice(i,1)
        },
        //新增kPI目标
        addKPI () {
            this.form1.kpi_target.push({
                name:"",
                year:"",
                emission:"",
                fuel_id:"",
                percent:""
            })
        },
        getFuel () {
            this.$axios({
                url: "fuel",
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.fuel = res.data.data
                } else {
                    this.fuel = []
                }
            }).catch(e => {
                console.log(e)
            })
            
        },
        createEditor () {
            let that = this
            this.editor1 = new Editor(`#editor1`)
            this.editor1.customConfig.onchange = (html) => { that.form1.business_coverage = html }
            this.editor1.create()

            this.editor2 = new Editor(`#editor2`)
            this.editor2.customConfig.onchange = (html) => { that.form1.major_business = html }
            this.editor2.create()

            this.editor3 = new Editor(`#editor3`)
            this.editor3.customConfig.onchange = (html) => { that.form1.trend = html }
            this.editor3.create()

            this.editor4 = new Editor(`#editor4`)
            this.editor4.customConfig.onchange = (html) => { that.form1.sales_description = html }
            this.editor4.create()

            this.editor5 = new Editor(`#editor5`)
            this.editor5.customConfig.onchange = (html) => { that.form1.chairman_word = html }
            this.editor5.create()

            this.editor6 = new Editor(`#editor6`)
            this.editor6.customConfig.onchange = (html) => { that.form1.board_of_director = html }
            this.editor6.create()

            this.editor7 = new Editor(`#editor7`)
            this.editor7.customConfig.onchange = (html) => { that.form1.esg_structure = html }
            this.editor7.create()

            this.editor8 = new Editor(`#editor8`)
            this.editor8.customConfig.onchange = (html) => { that.form1.esg_structure_info = html }
            this.editor8.create()

            this.editor9 = new Editor(`#editor9`)
            this.editor9.customConfig.onchange = (html) => { that.form1.esg_management_policy = html }
            this.editor9.create()

            // this.editor10 = new Editor(`#editor10`)
            // this.editor10.customConfig.onchange = (html) => { that.form2.communication_channel = html }
            // this.editor10.create()

            // this.editor11 = new Editor(`#editor11`)
            // this.editor11.customConfig.onchange = (html) => { that.form2.expectations_demands = html }
            // this.editor11.create()

            // this.editor12 = new Editor(`#editor12`)
            // this.editor12.customConfig.onchange = (html) => { that.form2.response = html }
            // this.editor12.create()
        },
        hideLoading () {
            this.loading = false
            this.$nextTick(() => {
                this.loading = true
            })
        },
        getCIGS () {
            this.loading = true
            this.$axios({
                url: "cigsCategory",
            }).then(res => {
                console.log("CIGS",res)
                if (res.data.code == 200) {
                    this.CIGS = res.data.data
                } else {
                    this.CIGS = []
                }
                this.getProfile()
            }).catch(e => {
                console.log(e)
                this.loading = false
            })
        },
        changeType (type) {
            this.step = 1
            this.type = type
        },
        
    }
}
</script>

