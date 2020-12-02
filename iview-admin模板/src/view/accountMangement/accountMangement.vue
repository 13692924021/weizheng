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
</style>

<template>
    <div class="borderBox1"> 
        <h3 class="boxTitle">{{$t('accountMangement')}}</h3>

        <div class="sb top3em">
            <div class="flex4">
                <div class="height3em al">身份： <span style="color:  #0C539C"> {{userType}}</span></div>
           

                <div class="height3em al">
                    <span>账号名称： </span>
                    <div> lwz </div>
                </div>

                <div class="height3em al">
                    <span>密码： </span>
                    <div class="al">
                        <div v-if="editPwd" style="transform: translateY(2px);">**********</div>
                        <Input v-model="pwd" type="text" v-else style="width: 200px;" size="small" />
                        <Icon type="md-create" v-if="editPwd" size="15" class="eye" @click="editPwd=!editPwd" />
                        <Icon type="md-checkmark-circle-outline" color="green" v-else size="15" class="eye" @click="editPwd=!editPwd" />
                    </div>
                </div>

            </div>
            <div class="flex6"> </div>

            
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
                    <div style="width:80px">{{$t('back')}}</div>
                </Button>
                <Button type="info" style="margin-left: 5px;">
                    <div style="width:80px">{{$t('save')}}</div>
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userType:"公司用户",
            editPwd:true,
            pwd:"",
        }   
    },
    created () {

    },
    methods:{
        
    }
}
</script>

