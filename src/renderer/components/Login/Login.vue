<template>
<div class="login"  >
  <div class="login-form">
      <Row type="flex" justify="center" align="middle">
        <Col><Icon type="md-analytics"  color="#ebac0e" size="39"/></Col>
        <Col>
         <span style="color:#ebac0e; font-size:24px;line-height:30px;">土拨鼠</span>
        </Col>       
      </Row>
       <div  class="title" >
         <span>登陆</span>
        </div>
       <Form ref="formCustom" :model="formCustom" :rules="ruleValidate"  class="formStyle" align="center" >
        <FormItem  prop="email" >
            <Input   v-model="formCustom.email" placeholder="账户"></Input>
        </FormItem>
        <FormItem  prop="password" align="center">
            <Input type="password"  v-model="formCustom.password"  placeholder="密码"></Input>
        </FormItem>
       
        <FormItem align="center">
            <Button long  class="btn-style" @click="actionLogin" >登录</Button> 
            <Button long  class="btn-style-two" @click="actionLogin" style="margin-top:10px;">访客浏览</Button>
        </FormItem>
        <FormItem>
        <Row style="color:#6d6d72;">
        <Col span="12" align="left"> <a style="color:#6d6d72;" >忘记密码</a></Col>
        <Col  span="12" align="right"><a style="color:#6d6d72;" >注册</a></Col>
        </Row>
        </FormItem>
    </Form>
  </div>
</div>
</div>
</template>

<script>
import {getCountry} from '@/api/api';

export default {
  name: 'Login',
  data () {
    return {
      aa:'',
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
 async  created () {

  },
  methods: {
   async actionLogin(){
//      this.$electron.ipcRenderer.send('login-success','glasss')
      try {
        const res = await getCountry()
        if(res.status === 200){
          console.log(res);
        }
      } catch (error) {
          console.log(res);
      }
    }
  }
}
//
</script>

<style lang="scss" scoped >
.login{
  padding: 40px;
  background: #0d0f16;
  height: 450px;
  .login-form{
    text-align: center;
    background: #0d0f16;
  }
  .title{
    margin-top:20px;
    font-size: 14px;
    padding-bottom: 20px;
    color:#fff;
  }
   .btn-style{
    background-color: #ebac0e;
    border-color: #ebac0e;
    color:black;
    height: 40px;
}
 .btn-style-two{
    background-color: #20273f;
    border-color: #20273f;
    color:#9fa1a8;
    height: 40px;
}
}

</style>
<style>
.login .ivu-input{
  background-color:#0d0f16;
  height: 40px;

}

</style>
