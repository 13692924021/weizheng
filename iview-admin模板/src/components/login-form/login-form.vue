<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="輸入管理員帳戶名稱" @on-keyup='enter'>
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="輸入管理員帳戶密碼" @on-keyup='enter'>
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" style="background:#1a153e" long>登入</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '必須輸入管理員帳戶', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '必須輸入密碼', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    enter (e) {
      if (e.keyCode == 13) {
        // this.handleSubmit()         //会重复调用
      }
    },
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // if(this.form.userName === 'Anson Ng' && this.form.userName === '123456'){
            this.$emit('on-success-valid', {
              userName: this.form.userName,
              password: this.form.password
            })
          // }else{
          //   this.showMsg('用户名或密码不正确')
          // }
          
        }
      })
    }
  }
}
</script>
