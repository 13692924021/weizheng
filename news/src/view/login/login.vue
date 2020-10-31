<style scoped>
.all {
    height: 100vh;
    width: 100%;
    background: url("../../assets/img/timg (3).jpg");
    position: relative;
    background-size:cover ;
}

.absolute {
    width: 400px;
    height: 500px;
    position: absolute;
    z-index: 100;
    border: solid gray 1px;
    left: 280px;
    bottom: 10%;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    flex-direction: column;
}
.top {
    width: 89%;
    margin: auto;
    height: 150px;
    border-bottom: solid #E0E0E0 1px;
}
.center {
    width: 100%;
}

input {
    border: none;
    outline: none;
    width: 89%;
    height: 30px;
}
.login {
    width: 89%;
    margin: auto;
}
.bottom {
    width: 89%;
    border-top: solid #E0E0E0 1px;
    height: 60px;
    margin: auto;
}
.Img {
    width: 17px;
    height: 19px;
}
.regisHeader {
    margin-top: 20px;
    width: 100%;
    height: 40px;
}
h2 {
    text-align: center;
}
.regisBut {
    width: 89%;
    margin: auto;
}
.regisBottom {
    width: 89%;
    border-top: solid gray 1px;
    margin: auto;
    margin-top: 19px;
}
p {
    padding-top: 10px;
}
.Child {
    flex-direction: column;
    height: 100%;
}
.span {
    cursor: pointer;
    color: red;
}
.form {
    width: 89%;
    border: solid gray 1px;
    /* flex-direction: column; */
    margin: auto;
}
.formChild {
    display: flex;
    /* flex-direction: column; */
}
.FormItem {
    margin-bottom: 0;
}
.input {
    font-size: 15px;
    width: 90%;
    margin: auto;
}
.logo {
    width: 200px;
    height: 150px;
    display: flex;
    margin: auto;
}

/* .Input >>> .ivu-input {
    border: none !important;
} */
</style>

<template>
    <div class="all">
        <div class="absolute sp" >
            <div v-if="show" class="Child sp">
                <div class="top">
                    <img class="logo" src="//parcelosfs-sz001.fs.nextsls.com/mostex/2020/10/18/23/5f8c60403aff974d812d2273.png">
                </div>
                <div class="center">
                    <!-- <div class="input al sp">
                        <input type="text" placeholder="用户名">
                        <img class="Img" src="../../assets/img/my.png" alt="">
                    </div>
                    <div class="input al sp">
                        <input type="text" placeholder="密码">
                        <img class="Img" src="../../assets/img/key.png" alt="">
                    </div> -->

                    <Form :rules="rules" :model='information' ref="information">
                        <FormItem prop='number'>
                            <div class="input al sp">
                                <Input class="Input" icon="md-person" type="text" v-model="information.number"/>
                                <!-- <img class="Img" src="../../assets/img/my.png" alt=""> -->
                            </div>
                        </FormItem>
                        <FormItem prop='password'>
                            
                            <div class="input al sp">
                                <Input class="Input" type="text" icon='md-key' v-model="information.password"/>
                                <!-- <img class="Img" src="../../assets/img/key.png" alt=""> -->
                            </div>
                        </FormItem>
                    </Form> 

                    <div class="login sp">
                        <div>
                            <Dropdown>
                                <a style="color:black" href="javascript:void(0)">
                                    下拉菜单
                                    <Icon type="ios-arrow-down"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>驴打滚</DropdownItem>
                                    <DropdownItem>炸酱面</DropdownItem>
                                    <DropdownItem divided>北京烤鸭</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div>
                            <Button type="success" @click="login">登录</Button>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <p style="color:black;">
                        还没有账号?<span class="span"  @click="register">立即注册</span>
                    </p>
                </div>
            </div>

            <div class="" v-else>
                <div class="regis">
                    <div class="regisHeader">
                        <h2 style="color:black;">用户注册</h2>
                    </div>
                    <div class="message">
                        <Form :model='information' :rules='rules'>
                            <FormItem prop='IDNumber'>
                                <div class="input al sp">
                                    <Input class="Input" type="text" icon='md-person' placeholder="请输入用户名" v-model="information.IDNumber"/>
                                    <!-- <img class="Img" src="../../assets/img/my.png" alt=""> -->
                                </div>
                            </FormItem>
                            <FormItem prop='cipher'>
                                <div class="input al sp">
                                    <Input class="Input" type="text" placeholder="请输入密码" icon='md-key' v-model="information.cipher"/>
                                    <!-- <img class="Img" src="../../assets/img/key.png" alt=""> -->
                                </div>
                            </FormItem>
                            <FormItem prop='cipher'>
                                <div class="input al sp">
                                    <Input class="Input" type="text" placeholder="请确认密码" icon='md-key' v-model="information.cipher"/>
                                    <!-- <img class="Img" src="../../assets/img/key.png" alt=""> -->
                                </div>
                            </FormItem>
                            <FormItem prop='message'>
                                <div class="input al sp">
                                    <Input class="Input" type="text" placeholder="联系人" icon='ios-contacts-outline' v-model="information.message"/>
                                    <!-- <img class="Img" src="../../assets/img/message.png" alt=""> -->
                                </div>
                            </FormItem>
                            <FormItem prop='phone'>
                                <div class="input al sp">
                                    <Input class="Input" type="text" placeholder="联系电话/手机" icon='md-call' v-model="information.phone"/>
                                    <!-- <img class="Img" src="../../assets/img/phone.png" alt=""> -->
                                </div>
                            </FormItem>
                            <FormItem prop='mail'>
                                <div class="input al sp">
                                    <Input class="Input" type="text" placeholder="邮箱" icon='md-mail' v-model="information.mail"/>
                                    <!-- <img class="Img" src="../../assets/img/Mail.png" alt=""> -->
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                    <div class="regisBut">
                        <Button type="success">立即注册</Button>
                    </div>
                    <div class="regisBottom">
                        <p style="color:black;">
                            已有账号?<span class="span" @click="toLogin">立即登录</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            value:'',
            show:true,
            information:{
                number:'深圳市八零零供应链管理有限公司',
                password:'123456',
                message:'',
                phone:'',
                mail:'',
                IDNumber:'',
                cipher:''
            },
            rules:{
                number:[
                    { required:true,trigger:'blur',message:'　 请输入用户名' }
                ],
                password:[
                    { required:true,trigger:'blur',message:'　 请输入密码'}
                ],
                message:[
                    { required:true,trigger:'blur',message:'　 请输入联系人'}
                ],
                phone:[
                    { required:true,trigger:'blur',message:'　 请输入电话'}
                ],
                mail:[
                    { required:true,trigger:'blur',message:'　 请输入邮箱'}
                ]
            },
        }
    },
    methods: {
        register () {
            this.show = false
        },
        toLogin () {
            this.show = true
        },
        login () {
            this.$axios({
                url: '/api/wos/login',
                // url: '/api/api/v4/shipment/get_services',
                method:'POST',
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                data: {
                    inajax: "1",
                    username:this.information.number,
                    password: this.information.password
                    // validation: {
                    //     access_token:"123"
                    // },
                    // services:{
                    //     type: "all"
                    // }
                }
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

