<style scoped lang="less">
.flex4 {
    flex:4;
}
.flex6 {
    flex:6;
}
.height3em {
    height: 3em;

}
.top3em {
    padding-top: 1em;
}
.eye {
    cursor: pointer;
    
}
.gWrap {
    .ivu-icon {
        // border: solid;
        transform: translateY(-2px) translateX(5px);
    }
}
</style>

<template>
    <div class="borderBox1 gWrap"> 
        <h3 class="boxTitle">{{$t('groupProfile')}}</h3>

        <div class="sb top3em">
            <div class="flex4">
                <div class="height3em al">APP ID： <span style="color:  #0C539C"> {{company.app_id ? company.app_id : "Nothing"}}</span></div>
                <div class="height3em al">
                    <span>channel_code： </span>
                    <div class="al"> 
                        <div v-if="showCode" style="transform: translateY(3px);">************ </div>
                        <span v-else>{{company.channel_code ? company.channel_code : 'Nothing'}} </span>
                        
                        <Icon v-if="showCode" type="md-eye" size="17" class="eye" style="transform: translateY(0) translateX(5px) !important;" @click="showCode=!showCode" />
                        <Icon v-else type="ios-eye-off" size="17" class="eye" style="transform: translateY(0) translateX(5px) !important;" @click="showCode=!showCode" />
                    </div>
                </div>

                <div class="height3em al">
                    <span>{{$t("parentCompanyName")}}： </span>
                    <div>
                        <span v-if="edit"><b>{{company.company_name}}</b></span>
                        <Input v-model="company.company_name" type="text" v-else style="width: 200px;" size="small" />
                        <!--<Icon type="md-create" v-if="edit" size="15" class="eye" @click="changeEdit('edit')" />
                        <Icon type="md-checkmark-circle-outline" color="green" v-else size="15"  class="eye"  @click="changeEdit('edit')" />!-->
                    </div>
                </div>

                <div class="height3em al">
                    <span>{{$t("phone")}}： </span>
                    <div> 
                        <span v-if="edit1">{{company.mobile}}</span>
                        <Input v-model="company.mobile" type="text" v-else style="width: 200px;" size="small" />
                        <Icon type="md-create" v-if="edit1" size="15" class="eye" @click="edit1=!edit1" />
                        <Icon type="md-checkmark-circle-outline" color="green" v-else size="15" class="eye" @click="edit1=!edit1" />
                    </div>
                </div>

                <div class="height3em al">
                    <span>{{$t('CompanySubscriptionStatus')}}： </span>
                    <div>
                        <div style="color:#3F706D;" v-if="company.status==2">{{$t("act")}}</div>
                        <div style="color:  #0C539C" v-else-if="company.status==1">{{$t("pending")}}</div>
                        <div style="color: #E50000;" v-else-if="company.status==3">{{$t("frozen")}}</div>
                        <div v-else>Nothing</div>
                    </div>
                </div>
            </div>
            <div class="flex6">
                <div class="height3em al">
                    <span>{{$t("companyAddress")}}： </span>
                    <div>
                        <span v-if="edit2">{{company.address}}</span>
                        <Input v-model="company.address" type="text" v-else style="width: 200px;" size="small" />
                        <Icon type="md-create" v-if="edit2" size="15" class="eye" @click="edit2=!edit2" />
                        <Icon type="md-checkmark-circle-outline" color="green" v-else size="15" class="eye" @click="edit2=!edit2" />
                    </div>
                </div>

                <div class="height3em al">
                    <span>{{$t("accountCreationDate")}}： </span>
                    <div> {{company.createAt}} </div>
                </div>

                <div class="height3em al">
                    <span>{{$t("updateCreationDate")}}： </span>
                    <div> {{company.updateAt}} </div>
                </div>

                <div class="height3em al">
                    <span>{{$t("subscriptionExpirationDate")}}： </span>
                    <div style="color: #3F706D;"> {{company.expireAt}} </div>
                </div>
            </div>

            
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="sb">
            <div></div>
            <div>
                <Button type="error">
                    <div style="width:80px">{{$t("back")}}</div>
                </Button>
                <Button type="info" style="margin-left: 5px;">
                    <div style="width:80px" @click="save">{{$t("save")}}</div>
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            appid: "56484154644164",
            showCode:true,
            edit:true,
            edit1:true,
            edit2:true,
            edit3:true,
            company:{
                company_name: "Nothing",
                mobile: "Nothing",
                address: "Nothing",
            }
        }   
    },
    created () {
       this.getData()
    },
    methods:{
        changeEdit (edit) {
            this[edit] = !this[edit]
            console.log(this[edit])
            if (this[edit]) {
                this.save()
            }
            
        },
        save () {
            this.edit = true
            this.edit2 = true
            this.edit1 = true
            this.$axios({
                url:"company",
                method:"PUT",
                data: {
                    "uuid":this.company.uuid,
                    "company_name":this.company.company_name,
                    "type":this.company.type,
                    "mobile":this.company.mobile,
                    "status":this.company.status,
                    "address":this.company.address,
                    "username":this.company.username,
                    "role":this.company.role
                }
            }).then(res => {
                console.log(res)
                this.$Message.success(this.$t("saved"))
                this.getData()  
            })
        },
        getData () {
            let accountInfo = localStorage.getItem("accountInfo")
            // console.log(accountInfo)
            if (accountInfo) {
                accountInfo = JSON.parse(accountInfo)
                this.company = accountInfo.user_company_detail
            }
            this.$axios({
                url: "company?companyId=" + this.company.uuid,
                headers: {
                    Authorization:"JWT " + localStorage.getItem("JWT")
                }
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.company = res.data.data
                    if (this.company.createAt) {
                        console.log(new Date(this.company.createAt))
                        this.company.createAt = new Date(this.company.createAt).toLocaleDateString()
                    }
                    if (this.company.updateAt) {
                        this.company.updateAt = new Date(this.company.updateAt).toLocaleDateString()
                    } else {
                        this.company.updateAt = "No Date Found"
                    }
                    if (this.company.expireAt) {
                        this.company.expireAt = new Date(this.company.expireAt).toLocaleDateString()
                    } else {
                        this.company.expireAt = "No Date Found"
                    }
                }
            })

            
        }
    }
}
</script>

