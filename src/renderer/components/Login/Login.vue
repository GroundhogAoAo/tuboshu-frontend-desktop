<template>
<div class="login"  >
  <div class="login-form">
       <div  class="title" >
         <span> 欢迎登陆</span>
        </div>
       <Form ref="formCustom" :model="formCustom" :rules="ruleValidate"  class="formStyle" align="center" >
        <FormItem  prop="email" >
            <Input   v-model="formCustom.email" placeholder="账户"></Input>
        </FormItem>
        <FormItem  prop="password" align="center">
            <Input type="password"  v-model="formCustom.password"  placeholder="密码"></Input>
        </FormItem>
          <FormItem   >
            <router-link class="fr" to="forgetpass" > 忘记密码?</router-link >
        </FormItem>
        <FormItem align="center">
            <Button type="primary" long  @click="actionLogin">登录</Button>
        </FormItem>
    </Form>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      formCustom: {
        email: '',
        password: ''
      },
      loginGt: {},
      ruleValidate: {
        email: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {

  },
  watch: {
  },
  created () {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped >
  .login{
      background: #fff;
      position: relative;
      height: 890px;
      // border:10px solid red;
    .login-form{
      .title{
        height:48px;
        font-size:36px;
        font-family:Segoe UI;
        font-weight:400;
        line-height:21px;
        color:rgba(67,66,93,1);
        opacity:1;
        text-align: center;
        margin-top:68px;
        margin-bottom: 200px;
      }
      .formStyle{
        width: 400px;
        margin: 0 auto;
      }
      width:550px;
      height:756px;
      background:rgba(255,255,255,1);
      box-shadow:rgba(47,94,175,0.4) 0px 0px 10px;
      opacity:0.8;
      border-radius:10px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding: 20px;
    }
  }
</style>
<style>
.login .ivu-input{
  border-radius: 0px;
  border-top: none;
  border-left: none;
  border-right: none;
}
.login .ivu-input:focus{
  box-shadow: none;
}
</style>
