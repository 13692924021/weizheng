<style lang="less" scoped>
.stepIcon {
    width: 28%;
    position: relative;
    left:-5%;
}
.dir {
    width: 60%;
    position: absolute;
    top: 5px;
    left: 70%;
}
.navWrap {
    width: 90%;
    // border: solid red 1px;
    position: relative;
    margin: auto;
    height:90px;
    overflow: hidden;
    >div {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        transition: 0.2s;
        // border: solid green 1px;
        white-space: nowrap;
        >div {
            display: inline-block;
            // border: solid green 1px;
        }
    }
}
.navLeft {
    display: block;
    width: 1px !important;
    height: 1px;
    border: solid transparent 15px ;
    border-right: solid 15px #00366E !important;
    margin-top: 10px;
    cursor: pointer;
}
.navRight {
    display: block;
    width: 1px !important;
    height: 1px;
    border: solid transparent 15px ;
    border-left: solid 15px #00366E !important;
    margin-top: 10px;
    cursor: pointer;
}
.navText {
    // border: solid red 1px;
    max-width: 50%;
    margin: auto;
    height: 50px;
    white-space: pre-wrap;
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    // vertical-align: center;
}

  .abs {
        position: absolute;
        width: 100%;
        opacity: 0;
        z-index: 0;
  }

  .stepShow{
    animation: go_in 0.6s;
    opacity: 1;
    z-index: 20;
    position: absolute;
}
 @keyframes go_in
    {
        0% {opacity: 0; transform: scale(1);}
        100%{opacity: 1; transform: scale(1);}

    }

</style>

<template>
    <div>
        <!-- nav -->
        <div class="sb">
            <span class="navLeft" @click="scrollNav('left')" ref="left"></span>
            <div class="sb navWrap" ref="navWrap">
                <div :style="{ left: navLeft + 'px' }" >
                    <div :class="['stepIcon']" v-for="(item,i) in navList" :key="i" :ref="'nav' + i">
                        <div class="ju">
                            <svg class="cur" @click="changeStep(i)" v-if="step>=i" width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#00549E"/>
                            </svg>
                            <svg class="cur" @click="changeStep(i)" v-else  width="25" height="25" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.0402 58.1705C12.9402 58.0305 -0.0597931 45.0005 0.000206859 29.0605C0.0602069 13.0405 13.1902 -0.0895401 29.0902 0.000459939C45.4202 0.0904599 58.2102 13.2905 58.1602 29.1505C58.1002 45.4505 44.8702 58.1505 29.0402 58.1705ZM37.1802 22.5805C35.3202 22.4205 33.5102 22.2405 31.6902 22.1205C28.2902 21.9105 24.9102 22.1305 21.5402 22.5605C21.1002 22.6205 20.9502 22.8005 20.8902 23.2505C20.4902 26.4505 20.4502 29.6505 20.6702 32.8605C20.7302 33.7405 20.8702 34.6105 20.9802 35.5205C24.5302 36.0305 28.0402 36.2605 31.5602 36.0605C33.1502 35.9705 34.7302 35.8205 36.3102 35.6505C36.6602 35.6105 37.1602 35.7305 37.2502 35.0805C37.7702 30.9605 37.7702 26.8605 37.1802 22.5805ZM35.8602 41.5305C31.3102 41.5305 26.8402 41.5305 22.3302 41.5305C22.4702 41.9605 22.6202 42.4505 22.8102 42.9305C23.7502 45.3005 24.8002 47.6005 26.8202 49.2805C28.3902 50.5905 29.8702 50.5805 31.4002 49.2405C33.7802 47.1705 34.8802 44.3605 35.8602 41.5305ZM22.3002 16.6405C26.8702 16.6405 31.3302 16.6405 35.9002 16.6405C35.4702 15.5905 35.0702 14.4705 34.5702 13.3905C33.7802 11.6705 32.8102 10.0605 31.3102 8.85046C29.8002 7.62046 28.3402 7.64046 26.8402 8.87046C25.2902 10.1505 24.3002 11.8305 23.4802 13.6305C23.0302 14.6305 22.6702 15.6805 22.3002 16.6405ZM19.5602 50.2305C19.5602 50.1805 19.5802 50.1205 19.5602 50.0905C17.7702 47.1505 16.5902 43.9705 15.7502 40.6405C15.6802 40.3705 15.3202 40.1005 15.0302 39.9905C13.1302 39.2705 11.2102 38.6205 9.32021 37.8905C8.61021 37.6105 7.95021 37.1805 7.23021 36.8005C7.87021 41.2505 15.2402 49.2505 19.5602 50.2305ZM50.9802 36.8505C48.4302 38.3105 45.7202 39.2805 42.9202 40.0705C42.7002 40.1305 42.4802 40.4805 42.4202 40.7405C41.5802 43.9605 40.4902 47.0705 38.7302 49.9105C38.6702 50.0105 38.6702 50.1405 38.6202 50.3705C44.6202 47.4805 48.7402 43.0505 50.9802 36.8505ZM19.4702 7.96046C15.3002 8.86046 8.08021 16.6605 7.22021 21.3005C7.27021 21.3105 7.33021 21.3305 7.36021 21.3105C9.83021 19.8505 12.4902 18.8805 15.2402 18.1005C15.4602 18.0405 15.6902 17.7005 15.7702 17.4505C16.2102 16.0905 16.5202 14.6805 17.0502 13.3505C17.7802 11.5105 18.6702 9.72046 19.4702 7.96046ZM51.0602 21.2705C48.7102 15.1005 44.5902 10.6505 38.6202 7.81046C38.6002 7.97046 38.5802 8.02046 38.6002 8.06046C40.4302 11.0205 41.6002 14.2305 42.4402 17.5905C42.5002 17.8205 42.8102 18.0705 43.0602 18.1605C43.8902 18.4605 44.7802 18.6305 45.6002 18.9505C47.4102 19.6805 49.1902 20.4705 51.0602 21.2705ZM14.5502 24.0805C13.1802 24.7205 11.8502 25.2605 10.6002 25.9405C9.83021 26.3605 9.12021 26.9305 8.50021 27.5405C7.42021 28.6105 7.41021 29.5105 8.47021 30.5805C9.13021 31.2405 9.88021 31.8405 10.6902 32.2805C11.9202 32.9505 13.2402 33.4705 14.5402 34.0705C14.5502 30.6705 14.5502 27.4705 14.5502 24.0805ZM43.6302 24.1905C43.6302 27.4705 43.6302 30.6905 43.6302 33.9905C45.8902 33.1805 48.1202 32.3205 49.8002 30.5005C50.7402 29.4805 50.7302 28.6605 49.7502 27.6205C48.0802 25.8305 45.8802 24.9605 43.6302 24.1905Z" fill="#85C7C3"/>
                            </svg>

                        </div><br>
                        <div class="bold cur navText" @click="changeStep(i)">{{item.name}}</div>
                        <svg v-show="i<navList.length-1" v-if="step>=i+1" class="dir" width="429" height="16" viewBox="0 0 429 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M428.707 8.70711C429.098 8.31658 429.098 7.68342 428.707 7.29289L422.343 0.928932C421.953 0.538408 421.319 0.538408 420.929 0.928932C420.538 1.31946 420.538 1.95262 420.929 2.34315L426.586 8L420.929 13.6569C420.538 14.0474 420.538 14.6805 420.929 15.0711C421.319 15.4616 421.953 15.4616 422.343 15.0711L428.707 8.70711ZM0 9H428V7H0V9Z" fill="#00549E"/>
                        </svg>
                        <svg  v-show="i<navList.length-1" v-else class="dir" width="429" height="16" viewBox="0 0 429 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M428.707 8.70711C429.098 8.31658 429.098 7.68342 428.707 7.29289L422.343 0.928932C421.953 0.538408 421.319 0.538408 420.929 0.928932C420.538 1.31946 420.538 1.95262 420.929 2.34315L426.586 8L420.929 13.6569C420.538 14.0474 420.538 14.6805 420.929 15.0711C421.319 15.4616 421.953 15.4616 422.343 15.0711L428.707 8.70711ZM0 9H428V7H0V9Z" fill="#93C5C2"/>
                        </svg>
                    </div>
                </div>
            </div>
            <span class="navRight" @click="scrollNav('right')" ref="right"></span>
        </div>
        <div  class="rela">

            <!-- 第一步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==0}]" v-if="step==0 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('fcaot')}}
                    </h3>
                    <label for="up0" @change="upLoad($event,'addFuelConsumption')">
                        <input type="file" id="up0" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause0" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause0" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('Fueluse')}}<Msg :msg="['燃料用途']"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('Fueltype')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('Fuelconsumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list0" :key="i">
                                    <td>
                                        <input v-if="!cause0" type="text" @change="put0(i)" style="width:80%" size="small" v-model="item.usage" :placeholder="$t('Fueluse')" />
                                        <span v-else>{{cause0}}</span>
                                    </td>
                                    <td>
                                        <select v-if="!cause0" v-model="item.type" :placeholder="$t('Fueltype')" size="small" style="width: 80%;" @change="put0(i)">
                                            <option value="0" selected disabled>{{$t('Fueltype')}}</option>
                                            <option v-for="(item,i) in fuel" :key="i" :value="item.id">{{item.name}}</option>
                                        </select>
                                        <span v-else>{{cause0}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause0" type="text" v-model="item.consumption" @change="put0(i)" style="width:80%" size="small" :placeholder="$t('Fuelconsumption')" />
                                        <span v-else>{{cause0}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause0" type="text" v-model="item.remark" @change="put0(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                        <span v-else>{{cause0}}</span>
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del0(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list0.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post0">+ {{$t('cFuelConsumptionRecord')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause0}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons0"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="lastPage">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save0(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save0(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第二步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==1}]" v-if="step==1 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('fcaot2')}}
                    </h3>
                    <label for="up1" @change="upLoad($event,'addFuelConsumptionMobile')">
                        <input type="file" id="up1" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause1" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause1">
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('vehicle_id')}}<Msg :msg="['vehicle_id']"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('cc')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('weight')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('emission_standard')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('miles')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('fuel_id')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('annual_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list1" :key="i">
                                    <td>
                                        <select v-model="item.vehicle_id" v-if="!cause1" @change="put1(i)">
                                            <option value="0" selected disabled>{{$t("vehicle_id")}}</option>
                                            <option v-for="(item,i) in vehicle" :key="i" :value="item.id">{{item.name}}</option>
                                        </select>
                                        <!-- <input v-if="!cause1" type="text" v-model="item.vehicle_id" @change="put1(i)" :placeholder="$t('vehicle_id')" style="width:80%" size="small"  /> -->
                                        <span v-else>{{cause1}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause1" type="text" v-model="item.cc" @change="put1(i)" :placeholder="$t('cc')" style="width:80%" size="small"  />
                                        <span v-else>{{cause1}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause1" type="text" v-model="item.weight" @change="put1(i)" :placeholder="$t('weight')" style="width:80%" size="small"  />
                                        <span v-else>{{cause1}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause1" type="text" v-model="item.emission_standard" @change="put1(i)" :placeholder="$t('emission_standard')" style="width:80%" size="small"  />
                                        <span v-else>{{cause1}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause1" type="text" v-model="item.miles" @change="put1(i)" :placeholder="$t('miles')" style="width:80%" size="small"  />
                                        <span v-else>{{cause1}}</span>
                                    </td>
                                    <td>
                                        <select v-model="item.fuel_id" v-if="!cause1" @change="put1(i)">
                                            <option :value="0" selected disabled>{{$t("fuel_id")}}</option>
                                            <option v-for="(item,i) in fuel" :key="i" :value="item.id">{{item.name}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input v-if="!cause1" type="text" v-model="item.annual_consumption" @change="put1(i)" :placeholder="$t('annual_consumption')" style="width:80%" size="small"  />
                                        <span v-else>{{cause1}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause1" type="text" v-model="item.remark" @change="put1(i)" :placeholder="$t('remark')" style="width:80%" size="small"  />
                                        <span v-else>{{cause1}}</span>
                                    </td>
                                    <td><Button size="small" type="error" @click="del1(item)">{{$t('delete')}}</Button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list1.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post1">+ {{$t('cFuelConsumptionRecord')}}</div>
                        </div>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause1}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons1"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="step=0">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save1(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save1(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第三步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==2}]" v-if="step==2 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('refrigerantStock')}}
                    </h3>
                    <label for="up2" @change="upLoad($event,'addRefrigerantConsumption')">
                        <input type="file" id="up2" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause2" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause2" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('refrigerant_id')}}<Msg ></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('start_stock')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('end_stock')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('purchase')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('environmentally_friendly_disposal')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list2" :key="i">

                                    <td>
                                        <select v-if="!cause2" v-model="item.refrigerant_id" :placeholder="$t('refrigerant_id')" size="small" style="width: 80%;" @change="put2(i)">
                                            <option value="0" selected disabled>{{$t('refrigerant_id')}}</option>
                                            <option v-for="(item,i) in refri" :key="i" :value="item.id">{{item.refrigerant_type}}</option>
                                        </select>
                                        <span v-else>{{cause2}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause2" type="text" @change="put2(i)" style="width:80%" size="small" v-model="item.start_stock" :placeholder="$t('start_stock')" />
                                        <span v-else>{{cause2}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause2" type="text" v-model="item.end_stock" @change="put2(i)" style="width:80%" size="small" :placeholder="$t('end_stock')" />
                                        <span v-else>{{cause2}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause2" type="text" v-model="item.purchase" @change="put2(i)" style="width:80%" size="small" :placeholder="$t('purchase')" />
                                        <span v-else>{{cause2}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause2" type="text" v-model="item.environmentally_friendly_disposal" @change="put2(i)" style="width:80%" size="small" :placeholder="$t('environmentally_friendly_disposal')" />
                                        <span v-else>{{cause2}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause2" type="text" v-model="item.remark" @change="put2(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                        <span v-else>{{cause2}}</span>
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del2(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list2.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post2">+ {{ $t('cRefrigerantStock')}}</div>
                        </div>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause2}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons2"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="step=1">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save2(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save2(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第四步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==3}]" v-if="step==3 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('elcStock')}}
                    </h3>
                    <label for="up3" @change="upLoad($event,'addElectricConsumption')">
                        <input type="file" id="up3" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause3" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause3">
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('grid_id')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('total_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('commercial_consumption_percent')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('industrial_consumption_percent')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('electricity_sold')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list3" :key="i">
                                    <td>
                                        <select v-if="!cause3" v-model="item.grid_id" :placeholder="$t('grid_id')" size="small" style="width: 80%;" @change="put3(i)">
                                            <option value="0" selected disabled>{{$t('grid_id')}}</option>
                                            <option v-for="(item,i) in electricGrid" :key="i" :value="item.id">{{item.name}}</option>
                                        </select>
                                        <span v-else>{{cause3}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause3" type="text" v-model="item.total_consumption" @change="put3(i)" style="width:80%" size="small" :placeholder="$t('total_consumption')" />
                                        <span v-else>{{cause3}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause3" type="text" v-model="item.commercial_consumption_percent" @change="put3(i)" style="width:80%" size="small" :placeholder="$t('commercial_consumption_percent')" />
                                        <span v-else>{{cause3}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause3" type="text" v-model="item.industrial_consumption_percent" @change="put3(i)" style="width:80%" size="small" :placeholder="$t('industrial_consumption_percent')" />
                                        <span v-else>{{cause3}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause3" type="text" v-model="item.electricity_sold" @change="put3(i)" style="width:80%" size="small" :placeholder="$t('electricity_sold')" />
                                        <span v-else>{{cause3}}</span>
                                    </td>
                                    <td>
                                        <input v-if="!cause3" type="text" v-model="item.remark" @change="put3(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                        <span v-else>{{cause3}}</span>
                                    </td>

                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del3(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list3.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post3">+ {{$t('cElcStock')}}</div>
                        </div>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause3}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons3"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="step=2">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save3(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save3(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>
            </div>
            <!-- 第五步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==4}]" v-if="step==4 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('reaneu')}}
                    </h3>
                    <label for="up4" @change="upLoad($event,'addRenewableEnergyConsumption')">
                        <input type="file" id="up4" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause4" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause4" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('energy_id')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('total_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('commercial_consumption_percent')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('industrial_consumption_percent')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list4" :key="i">
                                    <td>
                                        <select v-model="item.energy_id" :placeholder="$t('energy_id')" size="small" style="width: 80%;" @change="put4(i)">
                                            <option value="0" selected disabled>{{$t('energy_id')}}</option>
                                            <option v-for="(item,i) in renewableEnergy" :key="i" :value="item.id">{{item.name}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.total_consumption" @change="put4(i)" style="width:80%" size="small" :placeholder="$t('total_consumption')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.commercial_consumption_percent" @change="put4(i)" style="width:80%" size="small" :placeholder="$t('commercial_consumption_percent')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.industrial_consumption_percent" @change="put4(i)" style="width:80%" size="small" :placeholder="$t('industrial_consumption_percent')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.remark" @change="put4(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del4(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list4.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post4">+ {{$t('creaneu')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause4}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons4"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(3)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save4(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save4(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第六步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==5}]" v-if="step==5 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('waterC')}}
                    </h3>
                    <label for="up5" @change="upLoad($event,'addWaterDischargeConsumption')">
                        <input type="file" id="up5" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause5" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause5" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('wtotal_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('water_commercial_consumption_percent')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('water_industrial_consumption_percent')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list5" :key="i">
                                    <td>
                                        <input type="text" v-model="item.total_consumption" @change="put5(i)" style="width:80%" size="small" :placeholder="$t('wtotal_consumption')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.commercial_consumption_percent" @change="put5(i)" style="width:80%" size="small" :placeholder="$t('water_commercial_consumption_percent')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.industrial_consumption_percent" @change="put5(i)" style="width:80%" size="small" :placeholder="$t('water_industrial_consumption_percent')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.remark" @change="put5(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del5(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list5.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post5">+ {{$t('cwater')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause5}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons5"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(4)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save5(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save5(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第七步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==6}]" v-if="step==6 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('quwe')}}
                    </h3>
                    <label for="up6" @change="upLoad($event,'addSewageDischarge')">
                        <input type="file" id="up6" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause6" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause6" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('swtotal_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('harmful')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('innocuity')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list6" :key="i">
                                    <td>
                                        <input type="text" v-model="item.total_consumption" @change="put6(i)" style="width:80%" size="small" :placeholder="$t('swtotal_consumption')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.commercial_consumption_percent" @change="put6(i)" style="width:80%" size="small" :placeholder="$t('harmful')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.industrial_consumption_percent" @change="put6(i)" style="width:80%" size="small" :placeholder="$t('innocuity')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.remark" @change="put6(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del6(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list6.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post6">+ {{$t('cswater')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause6}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons6"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(5)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save6(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save6(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第八步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==7}]" v-if="step==7 || true"> 
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('pc')}}
                    </h3>
                    <label for="up7" @change="upLoad($event,'addPaperConsumption')">
                        <input type="file" id="up7" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause7" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause7" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('paper_start_stock')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('inventory_increase_amount')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('recycled_amount')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('paper_end_stock')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list7" :key="i">
                                    <td>
                                        <input type="text" v-model="item.start_stock" @change="put7(i)" style="width:80%" size="small" :placeholder="$t('paper_start_stock')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.inventory_increase_amount" @change="put7(i)" style="width:80%" size="small" :placeholder="$t('inventory_increase_amount')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.recycled_amount" @change="put7(i)" style="width:80%" size="small" :placeholder="$t('recycled_amount')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.end_stock" @change="put7(i)" style="width:80%" size="small" :placeholder="$t('paper_end_stock')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.remark" @change="put7(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del7(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list7.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post7">+ {{$t('cPaper')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause7}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons7"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(6)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save7(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save7(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第九步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==8}]" v-if="step==8 || true"> 
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('ti')}}
                    </h3>
                    <label for="up8" @change="upLoad($event,'addPlaneTicket')">
                        <input type="file" id="up8" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause8" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause8" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('departure_airport_id')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('destination_airport_id')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('plane_model_id')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('economy_class')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('business_class')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('first_class')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('is_return')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list8" :key="i">
                                    <td>
                                        <!-- <input type="text" v-model="item.departure_airport_id" @change="put8(i)" style="width:80%" size="small" :placeholder="$t('departure_airport_id')" /> -->
                                        <select v-model="item.departure_airport_id" @change="put8(i)" style="width:80%">
                                            <option value="0" selected disabled>{{$t('departure_airport_id')}}</option>
                                            <option v-for="(item,i) in airport_coordinates" :key="i" :value="item.id">{{item.name}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select v-model="item.destination_airport_id" @change="put8(i)" style="width:80%">
                                            <option value="0" selected disabled>{{$t('destination_airport_id')}}</option>
                                            <option v-for="(item,i) in airport_coordinates" :key="i" :value="item.id">{{item.name}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select v-model="item.plane_model_id" @change="put8(i)" style="width:80%;min-width:80px;">
                                            <option value="0" selected disabled>{{$t('plane_model_id')}}</option>
                                            <option v-for="(item,i) in airplaneType" :key="i" :value="item.id">{{item.aircraft}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.economy_class" @change="put8(i)" style="width:80%" size="small" :placeholder="$t('economy_class')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.business_class" @change="put8(i)" style="width:80%" size="small" :placeholder="$t('business_class')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.first_class" @change="put8(i)" style="width:80%" size="small" :placeholder="$t('first_class')" />
                                    </td>
                                    <td>
                                        <RadioGroup v-model="item.is_return" @on-change="put8(i)">
                                            <Radio label="是">
                                                <span>是</span>
                                            </Radio>
                                            <Radio label="否">
                                                <span>否</span>
                                            </Radio>
                                        </RadioGroup>
                                    </td>


                                    <td>
                                        <input  type="text" v-model="item.remark" @change="put8(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del8(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list8.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post8">+ {{$t('cAir')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause8}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons8"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(7)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save8(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save8(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==9}]" v-if="step==9 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('pq')}}
                    </h3>
                    <label for="up9" @change="upLoad($event,'addPackaging')">
                        <input type="file" id="up9" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause9" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause9" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('paper_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('plastic_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('metal_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('other_materials_consumption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list9" :key="i">
                                    <td>
                                        <input type="text" v-model="item.paper_consumption" @change="put9(i)" style="width:80%" size="small" :placeholder="$t('paper_consumption')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.plastic_consumption" @change="put9(i)" style="width:80%" size="small" :placeholder="$t('plastic_consumption')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.metal_consumption" @change="put9(i)" style="width:80%" size="small" :placeholder="$t('metal_consumption')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.other_materials_consumption" @change="put9(i)" style="width:80%" size="small" :placeholder="$t('other_materials_consumption')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.remark" @change="put9(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del9(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list9.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post9">+ {{$t('cPq')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause9}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons9"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(8)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save9(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save9(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十一步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==10}]" v-if="step==10 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('ws')}}
                    </h3>
                    <label for="up10" @change="upLoad($event,'addWaste')">
                        <input type="file" id="up10" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause10" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause10" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('allName')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('emission')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list10" :key="i">
                                    <td>
                                        <input type="text" v-model="item.name" @change="put10(i)" style="width:80%" size="small" :placeholder="$t('allName')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.emission" @change="put10(i)" style="width:80%" size="small" :placeholder="$t('emission')" />
                                    </td>
                                    <td>
                                        <input  type="text" v-model="item.remark" @change="put10(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del10(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list10.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post10">+ {{$t('cWs')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause10}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons10"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(9)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save10(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save10(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十二步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==11}]" v-if="step==11 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('soad')}}
                    </h3>
                    <label for="up11" @change="upLoad($event,'addEmployee')">
                        <input type="file" id="up11" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause11" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause11" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('staff_name')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('staff_code')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('position')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('department')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('category')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('gender')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('age')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('entry_date')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('resignation_date')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('education')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('training_hours')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>

                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list11" :key="i">
                                    <td>
                                        <input type="text" v-model="item.name" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('staff_name')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.staff_code" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('staff_code')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.position" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('position')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.department" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('department')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.category" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('category')" />
                                    </td>
                                    <td>
                                        <!-- <input type="text" v-model="item.gender" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('gender')" /> -->
                                        <RadioGroup v-model="item.gender" @on-change="put11(i)">
                                            <Radio label="男">男</Radio>
                                            <Radio label="女">女</Radio>
                                        </RadioGroup>
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.age" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('age')" />
                                    </td>
                                    <td>
                                        <!-- <input type="text" v-model="item.entry_date" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('entry_date')" /> -->
                                        <DatePicker :value="item.entry_date" size="small" @on-change="entryDate($event,i)" style="width:100px"></DatePicker>
                                    </td>
                                    <td>
                                        <!-- <input type="text" v-model="item.resignation_date" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('resignation_date')" /> -->
                                        <DatePicker :value="item.resignation_date" size="small" @on-change="resignationDate($event,i)" style="width:100px"></DatePicker>
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.education" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('education')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.training_hours" @change="put11(i)" style="width:80%" size="small" :placeholder="$t('training_hours')" />
                                    </td>

                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del11(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list11.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post11">+ {{$t('cSoad')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause11}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons11"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(10)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save11(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save11(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十三步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==12}]" v-if="step==12 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('death')}}
                    </h3>
                    <label for="up12" @change="upLoad($event,'addEmployeeDeathRates')">
                        <input type="file" id="up12" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause12" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause12" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('deaths_reporting_period')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('deaths_before_reporting_period')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('deaths_yearBefore_reporting_period')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('injuries')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>

                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list12" :key="i">
                                    <td>
                                        <input type="text" v-model="item.deaths_reporting_period" @change="put12(i)" style="width:80%" size="small" :placeholder="$t('deaths_reporting_period')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.deaths_before_reporting_period" @change="put12(i)" style="width:80%" size="small" :placeholder="$t('deaths_before_reporting_period')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.deaths_yearBefore_reporting_period" @change="put12(i)" style="width:80%" size="small" :placeholder="$t('deaths_yearBefore_reporting_period')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.injuries" @change="put12(i)" style="width:80%" size="small" :placeholder="$t('injuries')" />
                                    </td>


                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del12(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list12.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post12">+ {{$t('cDeath')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause12}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons12"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(11)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save12(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save12(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十四步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==13}]" v-if="step==13 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('provider')}}
                    </h3>
                    <label for="up13" @change="upLoad($event,'addSupplier')">
                        <input type="file" id="up13" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause13" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause13" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('proName')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('cigs_id')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('pLocation')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('cost')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('is_principles')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>

                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list13" :key="i">
                                    <td>
                                        <input type="text" v-model="item.name" @change="put13(i)" style="width:80%" size="small" :placeholder="$t('proName')" />
                                    </td>
                                    <td>
                                        <!-- <input type="text" v-model="item.cigs_id" @change="put13(i)" style="width:80%" size="small" :placeholder="$t('cigs_id')" /> -->
                                        <select v-model="item.cigs_id" @change="put13(i)" style="width:80%">
                                            <option value="0" selected disabled>{{$t('cigs_id')}}</option>
                                            <option v-for="(item,i) in CIGS" :key="i" :value="item.id">{{item.name}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.location" @change="put13(i)" style="width:80%" size="small" :placeholder="$t('pLocation')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.cost" @change="put13(i)" style="width:80%" size="small" :placeholder="$t('cost')" />
                                    </td>
                                    
                                    <td>
                                        <!-- <input type="text" v-model="item.is_principles" @change="put13(i)" style="width:80%" size="small" :placeholder="$t('is_principles')" /> -->
                                        <RadioGroup v-model="item.is_principles" @on-change="put13(i)">
                                            <Radio label="有"></Radio>
                                            <Radio label="無"></Radio>
                                        </RadioGroup>
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.remark" @change="put13(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>


                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del13(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list13.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post13">+ {{$t('cPro')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause13}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons13"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(12)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save13(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save13(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十五步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==14}]" v-if="step==14 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('PS')}}
                    </h3>
                    <label for="up14" @change="upLoad($event,'addProductSafety')">
                        <input type="file" id="up14" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause14" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause14" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('product_category')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('products_sold_qty')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('returned_purchase_qty')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list14" :key="i">
                                    <td>
                                        <input type="text" v-model="item.product_category" @change="put14(i)" style="width:80%" size="small" :placeholder="$t('product_category')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.products_sold_qty" @change="put14(i)" style="width:80%" size="small" :placeholder="$t('products_sold_qty')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.returned_purchase_qty" @change="put14(i)" style="width:80%" size="small" :placeholder="$t('returned_purchase_qty')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.remark" @change="put14(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>


                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del14(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list14.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post14">+ {{$t('cPS')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause14}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons14"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(13)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save14(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save14(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十六步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==15}]" v-if="step==15 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('complaint')}}
                    </h3>
                    <label for="up15" @change="upLoad($event,'addComplaint')">
                        <input type="file" id="up15" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause15" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause15" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('complaints_received')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('average_response_time')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('average_processing_time')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('processing_success_rate')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list15" :key="i">
                                    <td>
                                        <input type="text" v-model="item.complaints_received" @change="put15(i)" style="width:80%" size="small" :placeholder="$t('complaints_received')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.average_response_time" @change="put15(i)" style="width:80%" size="small" :placeholder="$t('average_response_time')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.average_processing_time" @change="put15(i)" style="width:80%" size="small" :placeholder="$t('average_processing_time')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.processing_success_rate" @change="put15(i)" style="width:80%" size="small" :placeholder="$t('processing_success_rate')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.remark" @change="put15(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>

                                    

                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del15(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list15.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post15">+ {{$t('cComplaint')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause15}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons15"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(14)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save15(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save15(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十七步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==16}]" v-if="step==16 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('corruption')}}
                    </h3>
                    <label for="up16" @change="upLoad($event,'addCorruption')">
                        <input type="file" id="up16" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause16" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause16" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('staff_rank')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('money_laundering')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('money_laundering_amount')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('money_laundary_litigation_result')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('confirmed_corruption')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('confirmed_corruption_amount')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('confirmed_corruption_litigation_result')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list16" :key="i">
                                    <td>
                                        <input type="text" v-model="item.staff_rank" @change="put16(i)" style="width:80%" size="small" :placeholder="$t('staff_rank')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.money_laundering" @change="put16(i)" style="width:80%" size="small" :placeholder="$t('money_laundering')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.money_laundering_amount" @change="put16(i)" style="width:80%" size="small" :placeholder="$t('money_laundering_amount')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.money_laundary_litigation_result" @change="put16(i)" style="width:80%" size="small" :placeholder="$t('money_laundary_litigation_result')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.confirmed_corruption" @change="put16(i)" style="width:80%" size="small" :placeholder="$t('confirmed_corruption')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.confirmed_corruption_amount" @change="put16(i)" style="width:80%" size="small" :placeholder="$t('confirmed_corruption_amount')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.confirmed_corruption_litigation_result" @change="put16(i)" style="width:80%" size="small" :placeholder="$t('confirmed_corruption_litigation_result')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.remark" @change="put16(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>


                                    

                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del16(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list16.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post16">+ {{$t('cCorruption')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause16}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons16"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(15)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save16(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save16(true)">{{$t("saveAndNext")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>
            <!-- 第十八步 -->
            <div :class="['borderBox2 abs',{ stepShow: step==17}]" v-if="step==17 || true">
                <div class="sb">
                    <h3 class="boxTitle rela al">
                        {{$t('ci')}}
                    </h3>
                    <label for="up17" @change="upLoad($event,'addCommunityInvestment')">
                        <input type="file" id="up17" v-show="false" /> 
                        <div  class="blueBtn">{{$t('uploadFile')}}</div>
                    </label>
                </div>
                <br>
                <div>
                    <div class="sb">
                        <div class="blueTitle ju al">{{$t("infoTable")}}</div>
                        <div class="sb al">
                            <div style="white-space:nowrap; padding-right:5px;">{{$t('Reasonsfornotdisclosinginformation')}}: </div>
                            <select v-model="cause17" style="width:150px;" size="small">
                                <option value="" selected>{{$t('Reasonsfornotdisclosinginformation')}}</option>
                                <option :value="$t('unimportance')">{{$t('unimportance')}}</option>
                                <option :value="$t('ConfidentialityRestrictions')">{{$t('ConfidentialityRestrictions')}}</option>
                                <option :value="$t('SpecificMattersProhibitedByLaw')">{{$t('SpecificMattersProhibitedByLaw')}}</option>
                                <option :value="$t('NoRelevantInformation')">{{$t('NoRelevantInformation')}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="blueBorder" v-if="!cause17" >
                        <br><br>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('date')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('cLocation')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('event_name')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('nature')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('contribution_category')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('active_days')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('participating_qty')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('expense')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('activities')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('remark')}}<Msg :msg="[]"></Msg>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="ju alignLeft">
                                            {{$t('action')}}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in list17" :key="i">
                                    <td>
                                        <DatePicker :value="item.date" size="small" style="width:130px;" @on-change="changeInvDate($event,i)"></DatePicker>
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.location" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('cLocation')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.event_name" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('event_name')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.nature" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('nature')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.contribution_category" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('contribution_category')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.active_days" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('active_days')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.participating_qty" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('participating_qty')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.expense" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('expense')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.activities" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('activities')" />
                                    </td>
                                    <td>
                                        <input type="text" v-model="item.remark" @change="put17(i)" style="width:80%" size="small" :placeholder="$t('remark')" />
                                    </td>
                                    
                                    <td>
                                        <!-- <Button size="small" type="info" style="margin-right:5px;">{{$t('edit')}}</Button> -->
                                        <Button size="small" type="error" @click="del17(item)">{{$t('delete')}}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="ju" v-if="list17.length == 0"><br><br>{{$t("noData")}}</div>
                        <br><br>
                        <div class="ju">
                            <div class="blueBtn" style="padding: 5px 50px" @click="post17">+ {{$t('cCi')}}</div>
                        </div>
                        <br><br>
                    </div>
                    <div class="blueBorder" v-else>
                        <table class="priTable ">
                            <thead>
                                <tr class="trline">
                                    <td>{{$t('bupilu')}}</td>
                                    <td>{{$t('xxyy')}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div style="min-width: 250px;">{{cause17}}</div></td>
                                    <td>
                                        <textarea cols="70" rows="5" v-model="reasons17"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br><br><br>
                    <div class="sb">
                        <div></div>
                        <div class="al">
                            <div class="darkBtn btnMargin" @click="changeStep(16)">{{$t("back")}}</div>
                            <div class="blueBtn btnMargin" @click="save17(false)">{{$t("save")}}</div>
                            <div class="greenBtn btnMargin" @click="save17(true)">{{$t("sAb")}}</div>
                        </div>
                    </div>
                    <br><br><br>
                </div>


            </div>

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            load1: false,
            load2: false,
            cause0: "",cause1: "",cause2: "",cause3: "",cause4: "",cause5: "",cause6: "",cause7: "",cause8: "",cause9: "",cause10: "",cause11: "",cause12: "",cause13: "",cause14: "",cause15: "",cause16: "",cause17: "",
            reasons0:"",reasons1:"",reasons2:"",reasons3:"",reasons4:"",reasons5:"",reasons6:"",reasons7:"",reasons8:"",reasons9:"",reasons10:"",reasons11:"",reasons12:"",reasons13:"",reasons14:"",reasons15:"",reasons16:"",reasons17:"",
            step:0,
            navLeft: 0,
            navList: [],
            uuid:"e9c5e76a-27c6-11eb-8f29-fa163edcd8f8", //運營點uuid
            mainuuid:"",   //主表uuid
            list0: [],list1: [],list2: [],list3: [],list4: [],list5: [],list6: [],list7: [],list8: [],list9: [],list10: [],list11: [],list12: [],list13: [],list14: [],list15: [],list16: [],list17: [],
            refri: [],   //制冷剂
            fuel: [],    //燃料類型
            vehicle: [],   //汽車類型
            airplaneType: [],  //飛機型號 (很多)
            electricGrid:[],   // 電網
            renewableEnergy: [],   //能源种类
            airport_coordinates: [],  //机场信息
            CIGS:[],             //供应商类型
        }
    },
    beforeRouteEnter (ro, from, next) {
        try {
            document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
        } catch {}
        
        next()
    },
    activated () {
        this.uuid = this.$route.query.uuid
        this.resetData()
        this.get0()
        this.getRefri()
        this.getFuel()
        this.getVehicle()
        this.getAirplaneType()
        this.getElectricGrid()
        this.getRenewableEnergy()
        this.getAirport_coordinates()
        this.getCIGS()
    },
    watch: {
        step (val) {
            try {
                setTimeout(() => {
                    this['get' + val]()
                },300)
               
            } catch {
                console.log('123')
            }

            document.getElementsByClassName("content-wrapper")[0].scrollTop = 0
            if (this.step % 4 == 0) {
                let nav = this.$refs.nav0[0].offsetWidth
                this.navLeft = -nav*val
            }
        },
        '$store.state.app.local': {
            handler () {
                this.navList = [
                    { name: this.$t('fcaot') },
                    { name: this.$t('fcaot2') },
                    { name: this.$t('refrigerantStock') },
                    { name: this.$t('elcStock') },
                    { name: this.$t('reaneu') },
                    { name: this.$t('waterC') },
                    { name: this.$t('quwe') },
                    { name: this.$t('pc') },
                    { name: this.$t('ti') },
                    { name: this.$t('pq') },
                    { name: this.$t('ws') },
                    { name: this.$t('soad') },
                    { name: this.$t('death') },
                    { name: this.$t('provider') },
                    { name: this.$t('PS') },
                    { name: this.$t('complaint') },
                    { name: this.$t('corruption') },
                    { name: this.$t('ci') },
                ]
            },
            immediate:true
        }
    },
    methods:{
        upLoad (e,action) {
            let f = (e.target.files[0])
            let Form = new FormData()
            Form.append("file", f)
            Form.append("action", action)
            Form.append("id", this.mainuuid)
            this.$axios({
                url: window.baseURL.replace("user","") + "upload/operationpoint",
                data: Form,
                method:"POST"
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.$Message.success(this.$t('upSuccess'))
                    if (this.step == 0) { this.get0() }
                    else if (this.step == 1) { this.get1() }
                    else if (this.step == 2) { this.get2() }
                    else if (this.step == 3) { this.get3() }
                    else if (this.step == 4) { this.get4() }
                    else if (this.step == 5) { this.get5() }
                    else if (this.step == 6) { this.get6() }
                    else if (this.step == 7) { this.get7() }
                    else if (this.step == 8) { this.get8() }
                    else if (this.step == 9) { this.get9() }
                    else if (this.step == 10) { this.get10() }
                    else if (this.step == 11) { this.get11() }
                    else if (this.step == 12) { this.get12() }
                    else if (this.step == 13) { this.get13() }
                    else if (this.step == 14) { this.get14() }
                    else if (this.step == 15) { this.get15() }
                    else if (this.step == 16) { this.get16() }
                    else if (this.step == 17) { this.get17() }
                    else if (this.step == 18) { this.get18() }
                } else {
                    this.$Message.warning(this.$t('upFail'))
                }
                
            }).catch(e => {
                this.$Message.error(this.$t('ErrMsg'))
                console.log(e)
            })
            e.target.value = ""
        },
        resetData () {
            this.step = 0
            this.navLeft = 0
            this.cause0 = "";this.reasons0 = "";this.list0 = []
            this.cause2 = "";this.reasons2 = "";this.list2 = []
            this.cause3 = "";this.reasons3 = "";this.list3 = []
            this.cause4 = "";this.reasons4 = "";this.list4 = []
            this.cause5 = "";this.reasons5 = "";this.list5 = []
            this.cause6 = "";this.reasons6 = "";this.list6 = []
            this.cause7 = "";this.reasons7 = "";this.list7 = []
            this.cause8 = "";this.reasons8 = "";this.list8 = []
            this.cause9 = "";this.reasons9 = "";this.list9 = []
            this.cause10 = "";this.reasons10 = "";this.list10 = []
            this.cause11 = "";this.reasons12 = "";this.list13 = []
            this.cause14 = "";this.reasons15 = "";this.list15 = []
            this.cause16 = "";this.reasons16 = "";this.list16 = []
            this.cause17 = "";this.reasons17 = "";this.list17 = []
        },
        //第十八步           (投資資料)
        changeInvDate (e,i) {
            this.list17[i].date = e
            this.put17(i)
        },
        get17 () {
            this.$axios({
                url: "operationpoint/communityInvestment?id=" + this.uuid
            }).then(res => {
                console.log("17",res)
                if (res.data.code == 200) {
                    this.list17 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause17 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons17 = res.data.data.remark
                } else {
                    this.list17 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post17 () {
            this.$axios({
                url: "operationpoint/communityInvestment",
                method:"POST",
                data: {
                    "opci_uuid":this.mainuuid,
                    "date":"",
                    "location":"",
                    "event_name":"",
                    "nature":"",
                    "contribution_category":"",
                    "active_days":0,
                    "participating_qty":0,
                    "expense":0,
                    "activities":"",
                    "remark":""
                }
            }).then(res => {
                console.log(17,res)
                this.get17()
            }).catch(e => {
                console.log(e)
            })
        },
        put17 (i) {
            this.$axios({
                url: "operationpoint/communityInvestment",
                method:"PUT",
                data: {
                    "uuid":this.list17[i].uuid,
                    "date":this.list17[i].date,
                    "location":this.list17[i].location,
                    "event_name":this.list17[i].event_name,
                    "nature":this.list17[i].nature,
                    "contribution_category":this.list17[i].contribution_category,
                    "active_days":this.list17[i].active_days * 1,
                    "participating_qty":this.list17[i].participating_qty *1,
                    "expense":this.list17[i].expense * 1,
                    "activities":this.list17[i].activities,
                    "remark":this.list17[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get17()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del17 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/communityInvestment?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get17()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第十七步      (貪污資料)
        get16 () {
            this.$axios({
                url: "operationpoint/corruption?id=" + this.uuid
            }).then(res => {
                console.log("16",res)
                if (res.data.code == 200) {
                    this.list16 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause16 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons16 = res.data.data.remark
                } else {
                    this.list16 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post16 () {
            this.$axios({
                url: "operationpoint/corruption",
                method:"POST",
                data: {
                    "opcr_uuid":this.mainuuid,
                    "staff_rank":"",
                    "money_laundering":"",
                    "money_laundering_amount":0,
                    "money_laundary_litigation_result":"",
                    "confirmed_corruption":"",
                    "confirmed_corruption_amount":0,
                    "confirmed_corruption_litigation_result":"",
                    "remark":""
                }
            }).then(res => {
                console.log(16,res)
                this.get16()
            }).catch(e => {
                console.log(e)
            })
        },
        put16 (i) {
            this.$axios({
                url: "operationpoint/corruption",
                method:"PUT",
                data: {
                    "uuid":this.list16[i].uuid,
                    "staff_rank":this.list16[i].staff_rank,
                    "money_laundering":this.list16[i].money_laundering,
                    "money_laundering_amount":this.list16[i].money_laundering_amount * 1,
                    "money_laundary_litigation_result":this.list16[i].money_laundary_litigation_result,
                    "confirmed_corruption":this.list16[i].confirmed_corruption,
                    "confirmed_corruption_amount":this.list16[i].confirmed_corruption_amount * 1,
                    "confirmed_corruption_litigation_result":this.list16[i].confirmed_corruption_litigation_result,
                    "remark":this.list16[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get16()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del16 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/corruption?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get16()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第十六步    (投訴處理)
        get15 () {
            this.$axios({
                url: "operationpoint/complaint?id=" + this.uuid
            }).then(res => {
                console.log("15",res)
                if (res.data.code == 200) {
                    this.list15 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause15 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons15 = res.data.data.remark
                } else {
                    this.list15 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post15 () {
            this.$axios({
                url: "operationpoint/complaint",
                method:"POST",
                data: {
                    "opc_uuid":this.mainuuid,
                    "complaints_received":0,
                    "average_response_time":0,
                    "average_processing_time":0,
                    "processing_success_rate":0,
                    "remark":""
                }
            }).then(res => {
                console.log(15,res)
                this.get15()
            }).catch(e => {
                console.log(e)
            })
        },
        put15 (i) {
            this.$axios({
                url: "operationpoint/complaint",
                method:"PUT",
                data: {
                    "uuid":this.list15[i].uuid,
                    "complaints_received":this.list15[i].complaints_received * 1,
                    "average_response_time":this.list15[i].average_response_time * 1,
                    "average_processing_time":this.list15[i].average_processing_time * 1,
                    "processing_success_rate":this.list15[i].processing_success_rate * 1,
                    "remark":this.list15[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get15()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del15 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/complaint?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get15()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第十五步      (產品安全)
        get14 () {
            this.$axios({
                url: "operationpoint/productSafety?id=" + this.uuid
            }).then(res => {
                console.log("14",res)
                if (res.data.code == 200) {
                    this.list14 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause14 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons14 = res.data.data.remark
                } else {
                    this.list14 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post14 () {
            this.$axios({
                url: "operationpoint/productSafety",
                method:"POST",
                data: {
                    "opps_uuid":this.mainuuid,
                    "product_category":"",
                    "products_sold_qty":0,
                    "returned_purchase_qty":0,
                    "remark":""
                }
            }).then(res => {
                console.log(14,res)
                this.get14()
            }).catch(e => {
                console.log(e)
            })
        },
        put14 (i) {
            this.$axios({
                url: "operationpoint/productSafety",
                method:"PUT",
                data: {
                    "uuid":this.list14[i].uuid,
                    "product_category":this.list14[i].product_category,
                    "products_sold_qty":this.list14[i].products_sold_qty * 1,
                    "returned_purchase_qty":this.list14[i].returned_purchase_qty * 1,
                    "remark":this.list14[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get14()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del14 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/productSafety?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get14()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第十四步     (供應商咨詢)
        get13 () {
            this.$axios({
                url: "operationpoint/supplier?id=" + this.uuid
            }).then(res => {
                console.log("13",res)
                if (res.data.code == 200) {
                    this.list13 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause13 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons13 = res.data.data.remark
                } else {
                    this.list13 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post13 () {
            this.$axios({
                url: "operationpoint/supplier",
                method:"POST",
                data: {
                    "ops_uuid":this.mainuuid,
                    "name": "",
                    "cigs_id":0,
                    "location":"",
                    "cost":0,
                    "is_principles":"有",
                    "remark":""
                }
            }).then(res => {
                console.log(13,res)
                this.get13()
            }).catch(e => {
                console.log(e)
            })
        },
        put13 (i) {
            this.$axios({
                url: "operationpoint/supplier",
                method:"PUT",
                data: {
                    "uuid":this.list13[i].uuid,
                    "name":this.list13[i].name,
                    "cigs_id":this.list13[i].cigs_id *1,
                    "location":this.list13[i].location,
                    "cost":this.list13[i].cost * 1,
                    "is_principles":this.list13[i].is_principles,
                    "remark":this.list13[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get13()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del13 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/supplier?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get13()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第十三步    (死亡率工傷率)
        get12 () {
            this.$axios({
                url: "operationpoint/employeeDeathRates?id=" + this.uuid
            }).then(res => {
                console.log("10",res)
                if (res.data.code == 200) {
                    this.list12 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause12 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons12 = res.data.data.remark
                } else {
                    this.list12 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post12 () {
            this.$axios({
                url: "operationpoint/employeeDeathRates",
                method:"POST",
                data: {
                    "opped_uuid":this.mainuuid,
                    "deaths_reporting_period":0,
                    "deaths_before_reporting_period":0,
                    "deaths_yearBefore_reporting_period":0,
                    "injuries":0
                }
            }).then(res => {
                console.log(12,res)
                this.get12()
            }).catch(e => {
                console.log(e)
            })
        },
        put12 (i) {
            this.$axios({
                url: "operationpoint/employeeDeathRates",
                method:"PUT",
                data: {
                    "uuid":this.list12[i].uuid,
                    "deaths_reporting_period":this.list12[i].deaths_reporting_period * 1,
                    "deaths_before_reporting_period": this.list12[i].deaths_before_reporting_period *1,
                    "deaths_yearBefore_reporting_period": this.list12[i].deaths_yearBefore_reporting_period * 1,
                    "injuries":this.list12[i].injuries * 1
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get12()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del12 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/employeeDeathRates?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get12()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第十二步   (在職員工資料)
        get11 () {
            this.$axios({
                url: "operationpoint/employee?id=" + this.uuid
            }).then(res => {
                console.log("10",res)
                if (res.data.code == 200) {
                    this.list11 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause11 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons11 = res.data.data.remark
                } else {
                    this.list11 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post11 () {
            this.$axios({
                url: "operationpoint/employee",
                method:"POST",
                data: {
                    "ope_uuid":this.mainuuid,
                    "staff_code":"",
                    "name":"",
                    "position":"",
                    "department":"",
                    "category":"",
                    "gender":"男",
                    "age":0,
                    "entry_date":"",
                    "resignation_date":"",
                    "education":"",
                    "training_hours": 0
                }
            }).then(res => {
                console.log(11,res)
                this.get11()
            }).catch(e => {
                console.log(e)
            })
        },
        put11 (i) {
            this.$axios({
                url: "operationpoint/employee",
                method:"PUT",
                data: {
                    "uuid":this.list11[i].uuid,
                    "staff_code":this.list11[i].staff_code,
                    "name":this.list11[i].name,
                    "position":this.list11[i].position,
                    "department":this.list11[i].department,
                    "category":this.list11[i].category,
                    "gender":this.list11[i].gender,
                    "age":this.list11[i].age * 1,
                    "entry_date":this.list11[i].entry_date,
                    "resignation_date":this.list11[i].resignation_date,
                    "education":this.list11[i].education,
                    "training_hours":this.list11[i].training_hours * 1
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get11()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        entryDate (e,i) {
            this.list11[i].entry_date = e
            this.put11(i)
        },
        resignationDate (e,i) {
            this.list11[i].resignation_date = e
            this.put11(i)
        },
        del11 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/employee?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get11()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第十一步  (廢物統計)
        get10 () {
            this.$axios({
                url: "operationpoint/waste?id=" + this.uuid
            }).then(res => {
                console.log("10",res)
                if (res.data.code == 200) {
                    this.list10 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause10 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons10 = res.data.data.remark
                } else {
                    this.list10 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post10 () {
            this.$axios({
                url: "operationpoint/waste",
                method:"POST",
                data: {
                    name: "",
                    "opw_uuid":this.mainuuid,
                    "emission":0,
                    "remark":""
                }
            }).then(res => {
                console.log(10,res)
                this.get10()
            }).catch(e => {
                console.log(e)
            })
        },
        put10 (i) {
            this.$axios({
                url: "operationpoint/waste",
                method:"PUT",
                data: {
                    "uuid":this.list10[i].uuid,
                    "emission":this.list10[i].emission * 1,
                    "remark":this.list10[i].remark,
                    "name":this.list10[i].name,
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get10()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del10 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/waste?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get10()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第十步   (包裝物料)
        get9 () {
            this.$axios({
                url: "operationpoint/packaging?id=" + this.uuid
            }).then(res => {
                console.log("8",res)
                if (res.data.code == 200) {
                    this.list9 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause9 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons9 = res.data.data.remark
                } else {
                    this.list9 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post9 () {
            this.$axios({
                url: "operationpoint/packaging",
                method:"POST",
                data: {
                    "oppmc_uuid":this.mainuuid,
                    "paper_consumption":0,
                    "plastic_consumption":0,
                    "metal_consumption":0,
                    "other_materials_consumption":0,
                    "remark":""
                }
            }).then(res => {
                console.log(9,res)
                this.get9()
            }).catch(e => {
                console.log(e)
            })
        },
        put9 (i) {
            this.$axios({
                url: "operationpoint/packaging",
                method:"PUT",
                data: {
                    "uuid":this.list9[i].uuid,
                    "paper_consumption":this.list9[i].paper_consumption * 1,
                    "plastic_consumption":this.list9[i].plastic_consumption *1,
                    "metal_consumption":this.list9[i].metal_consumption * 1,
                    "other_materials_consumption":this.list9[i].other_materials_consumption *1,
                    "remark":this.list9[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get9()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del9 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/packaging?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get9()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        // 第九步    (機票資訊)
        get8 () {
            this.$axios({
                url: "operationpoint/planeTicket?id=" + this.uuid
            }).then(res => {
                console.log("8",res)
                if (res.data.code == 200) {
                    this.list8 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause8 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons8 = res.data.data.remark
                } else {
                    this.list8 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post8 () {
            this.$axios({
                url: "operationpoint/planeTicket",
                method:"POST",
                data: {
                    "oppti_uuid":this.mainuuid,
                    "departure_airport_id":0,
                    "destination_airport_id":0,
                    "plane_model_id":0,
                    "economy_class":0,
                    "business_class":0,
                    "first_class":0,
                    "is_return":"Y",
                    "remark":""
                }
            }).then(res => {
                console.log(8,res)
                this.get8()
            }).catch(e => {
                console.log(e)
            })
        },
        put8 (i) {
            this.$axios({
                url: "operationpoint/planeTicket",
                method:"PUT",
                data: {
                    "uuid":this.list8[i].uuid,
                    "departure_airport_id":this.list8[i].departure_airport_id * 1,
                    "destination_airport_id":this.list8[i].destination_airport_id * 1,
                    "plane_model_id":this.list8[i].plane_model_id * 1,
                    "economy_class":this.list8[i].economy_class * 1,
                    "business_class":this.list8[i].business_class * 1,
                    "first_class":this.list8[i].first_class * 1,
                    "is_return":this.list8[i].is_return,
                    "remark":this.list8[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get8()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del8 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/planeTicket?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get8()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第八步    (纸张消耗量)
        get7 () {
            this.$axios({
                url: "operationpoint/paperConsumption?id=" + this.uuid
            }).then(res => {
                console.log("7",res)
                if (res.data.code == 200) {
                    this.list7 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause7 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons7 = res.data.data.remark
                } else {
                    this.list7 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        put7 (i) {
            this.$axios({
                url: "operationpoint/paperConsumption",
                method:"PUT",
                data: {
                    "uuid":this.list7[i].uuid,
                    "start_stock":this.list7[i].start_stock * 1,
                    "inventory_increase_amount":this.list7[i].inventory_increase_amount * 1,
                    "recycled_amount":this.list7[i].recycled_amount * 1,
                    "end_stock":this.list7[i].end_stock * 1,
                    "remark":this.list7[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get7()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del7 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/paperConsumption?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get7()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        post7 () {
            this.$axios({
                url: "operationpoint/paperConsumption",
                method:"POST",
                data: {
                    "oppc_uuid":this.mainuuid,
                    "start_stock":0,
                    "inventory_increase_amount":0,
                    "recycled_amount":0,
                    "end_stock":0,
                    "remark":""
                }
            }).then(res => {
                console.log(6,res)
                this.get7()
            }).catch(e => {
                console.log(e)
            })
        },
        //第七步     (污水排放量)
        get6 () {
            this.$axios({
                url: "operationpoint/SewageDischarge?id=" + this.uuid
            }).then(res => {
                console.log("6",res)
                if (res.data.code == 200) {
                    this.list6 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause6 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons6 = res.data.data.remark
                } else {
                    this.list6 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post6 () {
            this.$axios({
                url: "operationpoint/SewageDischarge",
                method:"POST",
                data: {
                    "opsdc_uuid":this.mainuuid,
                    "total_consumption":0,
                    "commercial_consumption_percent":0,
                    "industrial_consumption_percent":0,
                    "remark":""
                }
            }).then(res => {
                console.log(6,res)
                this.get6()
            }).catch(e => {
                console.log(e)
            })
        },
        put6 (i) {
            this.$axios({
                url: "operationpoint/SewageDischarge",
                method:"PUT",
                data: {
                    "uuid":this.list6[i].uuid,
                    "total_consumption":this.list6[i].total_consumption * 1,
                    "commercial_consumption_percent":this.list6[i].commercial_consumption_percent * 1,
                    "industrial_consumption_percent":this.list6[i].industrial_consumption_percent * 1,
                    "remark":this.list6[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get6()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del6 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/SewageDischarge?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get6()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第六步       (食用水使用量)
        get5 () {
            this.$axios({
                url: "operationpoint/waterDischarge?id=" + this.uuid
            }).then(res => {
                console.log("5",res)
                if (res.data.code == 200) {
                    this.list5 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause5 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons5 = res.data.data.remark
                } else {
                    this.list5 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post5 () {
            this.$axios({
                url: "operationpoint/waterDischarge",
                method:"POST",
                data: {
                    "opwdc_uuid":this.mainuuid,
                    "total_consumption":0,
                    "commercial_consumption_percent":0,
                    "industrial_consumption_percent":0,
                    "remark":""
                }
            }).then(res => {
                console.log(4,res)
                this.get5()
            }).catch(e => {
                console.log(e)
            })
        },
        put5 (i) {
            this.$axios({
                url: "operationpoint/waterDischarge",
                method:"PUT",
                data: {
                    "uuid":this.list5[i].uuid,
                    "total_consumption":this.list5[i].total_consumption * 1,
                    "commercial_consumption_percent":this.list5[i].commercial_consumption_percent * 1,
                    "industrial_consumption_percent":this.list5[i].industrial_consumption_percent * 1,
                    "remark":this.list5[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get5()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del5 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/waterDischarge?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get5()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        //第五步     (可再生, 核能)
        get4 () {
            this.$axios({
                url: "operationpoint/renewableEnergy?id=" + this.uuid
            }).then(res => {
                console.log("4",res)
                if (res.data.code == 200) {
                    this.list4 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause4 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons4 = res.data.data.remark
                } else {
                    this.list4 = []
                    this.mainuuid = ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post4 () {
            this.$axios({
                url: "operationpoint/renewableEnergy",
                method:"POST",
                data: {
                    "oprec_uuid":this.mainuuid,
                    "energy_id":0,
                    "total_consumption":0,
                    "commercial_consumption_percent":0,
                    "industrial_consumption_percent":0,
                    "remark":""
                }
            }).then(res => {
                console.log(4,res)
                this.get4()
            }).catch(e => {
                console.log(e)
            })
        },
        del4 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/renewableEnergy?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get4()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        put4 (i) {
            this.$axios({
                url: "operationpoint/renewableEnergy",
                method:"PUT",
                data: {
                    "uuid":this.list4[i].uuid,
                    "energy_id":this.list4[i].energy_id * 1,
                    "total_consumption":this.list4[i].total_consumption * 1,
                    "commercial_consumption_percent":this.list4[i].commercial_consumption_percent * 1,
                    "industrial_consumption_percent":this.list4[i].industrial_consumption_percent * 1,
                    "remark":this.list4[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get4()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        //第四步     (电源)
        get3 () {
            this.$axios({
                url: "operationpoint/electricConsumption?id=" + this.uuid
            }).then(res => {
                console.log("3",res)
                if (res.data.code == 200) {
                    this.list3 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause3 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons3 = res.data.data.remark
                } else {
                    this.list3 = []
                    this.mainuuid = ""
                }
            })
        },
        post3 () {
            this.$axios({
                url: 'operationpoint/electricConsumption',
                method:"POST",
                data: {
                    "opec_uuid": this.mainuuid,
                    "grid_id":0,
                    "total_consumption":0,
                    "commercial_consumption_percent":0,
                    "industrial_consumption_percent":0,
                    "electricity_sold":0,
                    "remark":""
                }
            }).then(res => {
                console.log(3,res)
                this.get3()
            }).catch(e => {
                console.log(e)
            })
        },
        put3 (i) {
            this.$axios({
                url: "operationpoint/electricConsumption",
                method:"PUT",
                data: {
                    "uuid":this.list3[i].uuid,
                    "grid_id":this.list3[i].grid_id * 1,
                    "total_consumption":this.list3[i].total_consumption * 1,
                    "commercial_consumption_percent":this.list3[i].commercial_consumption_percent * 1,
                    "industrial_consumption_percent":this.list3[i].industrial_consumption_percent * 1,
                    "electricity_sold":this.list3[i].electricity_sold * 1,
                    "remark":this.list3[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get3()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del3(item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/electricConsumption?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get3()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        // 第三步    (制冷剂)
        put2 (i) {
            this.$axios({
                url: "operationpoint/refrigerantConsumption",
                method:"PUT",
                data: {
                    uuid: this.list2[i].uuid,
                    "refrigerant_id":this.list2[i].refrigerant_id * 1,
                    "start_stock":this.list2[i].start_stock * 1,
                    "end_stock":this.list2[i].end_stock * 1,
                    "purchase":this.list2[i].purchase * 1,
                    "environmentally_friendly_disposal":this.list2[i].environmentally_friendly_disposal * 1,
                    "remark":this.list2[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get2()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        del2 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/refrigerantConsumption?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get2()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        post2 () {
            this.$axios({
                url: 'operationpoint/refrigerantConsumption',
                method:"POST",
                data: {
                    "opr_uuid": this.mainuuid,
                    "refrigerant_id":0,
                    "start_stock":0,
                    "end_stock":0,
                    "purchase":0,
                    "environmentally_friendly_disposal":0,
                    "remark":""
                }
            }).then(res => {
                console.log(res)
                this.get2()
            })
        },
        get2 () {
            this.$axios({
                url: "operationpoint/refrigerantConsumption?id=" + this.uuid
            }).then(res => {
                console.log("2",res)
                if (res.data.code == 200) {
                    this.list2 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause2 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons2 = res.data.data.remark
                } else {
                    this.list2 = []
                    this.mainuuid = ""
                }
            })
        },
        // 第二步        (运营点燃料消耗量 移动源)
        del1 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/fuelConsumptionMobile?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get1()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        put1 (i) {
            this.$axios({
                url: "operationpoint/fuelConsumptionMobile",
                method:"PUT",
                data: {
                    uuid: this.list1[i].uuid,
                    "vehicle_id":this.list1[i].vehicle_id * 1,
                    "cc":this.list1[i].cc * 1,
                    "weight":this.list1[i].weight * 1,
                    "emission_standard":this.list1[i].emission_standard,
                    "miles":this.list1[i].miles * 1,
                    "fuel_id":this.list1[i].fuel_id * 1,
                    "annual_consumption":this.list1[i].annual_consumption * 1,
                    "remark":this.list1[i].  remark,
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get1()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        get1 () {
            this.$axios({
                url: "operationpoint/fuelConsumptionMobile?id=" + this.uuid
            }).then(res => {
                console.log("1",res)
                if (res.data.code == 200) {
                    this.list1 = res.data.detail
                    this.mainuuid = res.data.data.uuid
                    this.cause1 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons1 = res.data.data.remark
                } else {
                    this.list1 = []
                    this.mainuuid = ""
                }
            })
        },
        post1 () {
            this.$axios({
                url: 'operationpoint/fuelConsumptionMobile',
                method:"POST",
                data: {
                    "opfl_uuid": this.mainuuid,
                    "vehicle_id":0,
                    "cc":0,
                    "weight":0,
                    "emission_standard":"",
                    "miles":0,
                    "fuel_id":0,
                    "annual_consumption":0,
                    "remark":""
                }
            }).then(res => {
                console.log(res)
                this.get1()
            })
        },
        //第一步    (运营点燃料消耗量 固定源)
        del0 (item) {
            let that = this
            that.$Modal.confirm({
                title: that.$t("attention"),
                content: that.$t("sureDel"),
                onOk () {
                    that.$axios({
                        url: "operationpoint/fuelConsumption?id=" + item.uuid,
                        method:"DELETE"
                    }).then(res => {
                        if (res.data.code == 200) {
                            that.$Message.success(that.$t('success'))
                        } else {
                            that.$Message.warning(res.data.msg)
                        }
                        that.get0()
                    }).catch(() => {
                        that.$Message.error( that.$t("ErrMsg") )
                    })
                }
            })
        },
        put0 (i) {
            this.$axios({
                url: "operationpoint/fuelConsumption",
                method:"PUT",
                data: {
                    uuid: this.list0[i].uuid,
                    usage: this.list0[i].usage,
                    type_id:this.list0[i].type * 1,
                    consumption:this.list0[i].consumption * 1,
                    remark: this.list0[i].remark
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.get0()
                } else {
                    this.$Message.warning(res.data.data.msg)
                }
            }).catch(e => {
                console.log(e)
            })
        },
        post0 () {
             this.$axios({
                url:"operationpoint/fuelConsumption",
                method:"POST",
                data: {
                    opfl_uuid: this.mainuuid,
                    usage:"",
                    type_id:0,
                    consumption:0,
                    remark: ""
                }
            }).then(res => {
                console.log(res)
                this.get0()
            })
        },
        get0 () {
            this.$axios({
                url: "operationpoint/fuelConsumption?id=" + this.uuid
            }).then(res => {
                console.log("0",res)
                if (res.data.code == 200) {
                    res.data.detail.forEach(item => {
                        item.type = item.type + ""
                    })
                    this.mainuuid = res.data.data.uuid
                    this.list0 = res.data.detail
                    this.cause0 = res.data.data.is_disclosed?res.data.data.is_disclosed:""
                    this.reasons0 = res.data.data.remark
                } else {
                    this.mainuuid = ""
                }
            })
        },
        save0 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 1 }
            this.setDisclose("operationpoint/fuelConsumption/notDisclose",'get0','cause0',"reasons0")
        },
        save1 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 2 }
            this.setDisclose("operationpoint/fuelConsumptionMobile/notDisclose",'get1','cause1',"reasons1")
        },
        save2 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 3 }
            this.setDisclose("operationpoint/refrigerantConsumption/notDisclose",'get2','cause2',"reasons2")
        },
        save3 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 4 }
            // this.$refs.right.click()
            this.setDisclose("operationpoint/electricConsumption/notDisclose",'get3','cause3',"reasons3")
        },
        save4 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 5 }
            this.setDisclose("operationpoint/renewableEnergy/notDisclose",'get4','cause4',"reasons4")
        },
        save5 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 6 }
            this.setDisclose("operationpoint/waterDischarge/notDisclose",'get5','cause5',"reasons5")
        },
        save6 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 7 }
            this.setDisclose("operationpoint/SewageDischarge/notDisclose",'get6','cause6',"reasons6")
        },
        save7 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 8 }
            // this.$refs.right.click()
            this.setDisclose("operationpoint/paperConsumption/notDisclose",'get7','cause7',"reasons7")
        },
        save8 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 9 }
            this.setDisclose("operationpoint/planeTicket/notDisclose",'get8','cause8',"reasons8")
        },
        save9 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 10 }
            this.setDisclose("operationpoint/waste/notDisclose",'get9','cause9',"reasons9")
        },
        save10 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 11 }
            this.setDisclose("operationpoint/packaging/notDisclose",'get10','cause10',"reasons10")
        },
        save11 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 12 }
            this.setDisclose("operationpoint/employee/notDisclose",'get11','cause11',"reasons11")
        },
        save12 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 13 }
            this.setDisclose("operationpoint/employeeDeathRates/notDisclose",'get12','cause12',"reasons12")
        },
        save13 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 14 }
            this.setDisclose("operationpoint/supplier/notDisclose",'get13','cause13',"reasons13")
        },
        save14 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 15 }
            this.setDisclose("operationpoint/productSafety/notDisclose",'get14','cause14',"reasons14")
        },
        save15 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 16 }
            this.setDisclose("operationpoint/complaint/notDisclose",'get15','cause15',"reasons15")
        },
        save16 (boo) {
            this.$Message.success(this.$t('saved'))
            if (boo) { this.step = 17 }
            this.setDisclose("operationpoint/corruption/notDisclose",'get16','cause16',"reasons16")
        },
        save17 (boo) {
            this.$Message.success(this.$t('saved'))
            this.setDisclose("operationpoint/communityInvestment/notDisclose",'get17','cause17',"reasons17")
            if (boo) {
                this.$router.back()
            }
        },
        //修改不披露及其原因
        setDisclose (url, getFn,cause,reason) {
            this.$axios({
                url,
                method:"PUT",
                data: {
                    // uuid: this.mainuuid,
                    uuid: this.uuid,
                    is_disclosed: this[cause],
                    remark: this[reason]
                }
            }).then(res => {
                console.log(res)
                // this[getFn]()
            })
        },
        lastPage () {
            this.$router.back()
        },
        changeStep (i) {
            this.step = i

        },
        scrollNav(dir) {
            let fullWidth = this.$refs.navWrap.offsetWidth


            let nav = this.$refs.nav0[0].offsetWidth
            let long = nav * this.navList.length

            fullWidth = fullWidth*0.84 + nav
            if (dir == "left") {
                //點擊了左邊
                this.navLeft += fullWidth
            } else {
                //點擊了右邊
                // console.log(long, (this.navLeft*-1) - nav*3, nav)
                if (long - (this.navLeft*-1) - nav*3 > 1) {
                    this.navLeft -= fullWidth
                }


            }

            if (this.navLeft > 0) {
                this.navLeft = 0
            }


        },
        getRefri () {
            this.$axios({
                url: "refrigerant",
            }).then(res => {
                // console.log("re",res)
                if (res.data.code == 200) {
                    this.refri = res.data.data
                } else {
                    this.refri = []
                }
            })
        },
        //燃油類型
        getFuel () {
            this.$axios({
                url: "fuel",
            }).then(res => {
                // console.log("re",res)
                if (res.data.code == 200) {
                    this.fuel = res.data.data
                } else {
                    this.fuel = []
                }
            })
        },
        //汽車類型
        getVehicle () {
            this.$axios({
                url: "vehicle",
            }).then(res => {
                // console.log("re",res)
                if (res.data.code == 200) {
                    this.vehicle = res.data.data
                } else {
                    this.vehicle = []
                }
            })
        },
        //飛機型號
        getAirplaneType () {
            this.$axios({
                url: "airplaneType",
            }).then(res => {
                // console.log("re",res)
                if (res.data.code == 200) {
                    this.airplaneType = res.data.data
                } else {
                    this.airplaneType = []
                }
            })
        },
        getElectricGrid () {
            this.$axios({
                url: "electricGrid",
            }).then(res => {
                // console.log("re",res)
                if (res.data.code == 200) {
                    this.electricGrid = res.data.data
                } else {
                    this.electricGrid = []
                }
            })
        },
        getRenewableEnergy () {
            this.$axios({
                url: "renewableEnergy",
            }).then(res => {
                // console.log("re",res)
                if (res.data.code == 200) {
                    this.renewableEnergy = res.data.data
                } else {
                    this.renewableEnergy = []
                }
            })
        },
        getAirport_coordinates () {
            this.$axios({
                url: "airport_coordinates",
            }).then(res => {
                // console.log("re",res)
                if (res.data.code == 200) {
                    this.airport_coordinates = res.data.data
                } else {
                    this.airport_coordinates = []
                }
            })
        },
        getCIGS () {
            this.$axios({
                url: "cigsCategory",
            }).then(res => {
                console.log("CIGS",res)
                if (res.data.code == 200) {
                    this.CIGS = res.data.data
                } else {
                    this.CIGS = []
                }
            }).catch(e => {
                console.log(e)
            })
        },

    },
}
</script>
