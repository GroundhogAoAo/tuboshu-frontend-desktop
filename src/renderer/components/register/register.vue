<template>
 <div class="register"  >
  <div class="register-form">
       <div  class="title" >
         <span> 欢迎注册</span>
        </div>
       <Form   class="formStyle" align="center" >
        <FormItem   align="left">
            <Select  v-model="countryCode" style="width:100%">
       <Option v-for="(item ,index) in countryList " :key = "index" :value="item.c">{{item.c}}</Option>
     </Select>
        </FormItem>
         <FormItem  prop="email" align="center">
            <Input   placeholder="邮箱"  v-model="regEmailData.email"></Input>
        </FormItem>
         <FormItem  prop="password" align="center">
            <Row>
             <Col span="18"><Input  placeholder="验证码" v-model="regEmailData.verificationCode"></Input></Col>
             <Col span="6"><Button class="get-code" @click="getVerCode()" v-timecount>获取验证码</Button></Col>
            </Row>
        </FormItem>
        <FormItem  prop="password" align="center">
            <Input  placeholder="密码" type="password" v-model="regEmailData.password"></Input>
        </FormItem>
          <FormItem  align="center"  >
            <Input  placeholder="确认密码" type="password" v-model="regEmailData.passwordAgain"></Input>
        </FormItem>
         <FormItem  align="center"  >
            <Input  placeholder="邀请码(选填)" v-model="regEmailData.promotionCode"></Input>
        </FormItem>
         <FormItem align="left">
          <Checkbox label="Eat">我已阅读并同意</Checkbox>
           <a>服务协议</a>
        </FormItem>
        <FormItem align="center">
            <Button type="primary" long   @click="handleSubmit">注册</Button>
        </FormItem>

    </Form>
  </div>
</div>
</div>
</template>

<script>
import {register, axios} from 'Api/api'
import countryList from 'Assets/js/countryList'
import {sendVerCode, initGtion} from 'Utils/verCode'
export default {
  name: 'register',
  data () {
    return {
      gtResult: {},
      countryCode: '中国大陆',
      countryList: countryList,
      regEmailData: {
        email: '',
        password: '',
        verificationCode: '',
        promotionCode: '',
        passwordAgain: ''
      }
    }
  },
  computed: {
    currentGtState: function () {
      return this.$store.getters.getCurrentGtResult
    }
  },
  watch: {
    currentGtState: function (val) {
      if (val) {
        this.gtResult = val
        this.$store.dispatch('changeGtCheck', false)
        sendVerCode(this, { uri: `mail:${this.regEmailData.email}`,
          useAge: 'register'})
      }
    }
  },
  methods: {
    getVerCode () { // 缺少验证
      initGtion(this)
    },
    async handleSubmit () {
      try {
        let registerData = {
          challenge: this.gtResult.geetest_challenge,
          country: this.countryCode,
          email: this.regEmailData.email,
          password: this.regEmailData.password,
          promotionCode: this.regEmailData.promotionCode,
          seccode: this.gtResult.geetest_seccode,
          validate: this.gtResult.geetest_validate,
          verificationCode: this.regEmailData.verificationCode
        }
        const res = await register(registerData)
        if (res.status === 200) {
          const {data} = res
          localStorage.setItem('token', data.token)
          axios.defaults.headers = { // 修复请求时候还是带着之前的那个token
            'Authentication-Token': data.token,
            'Content-Type': 'application/json'
          }
          await this.$store.dispatch('assignUserInfo')
          this.$router.push('/auth/identity')
          this.$Notice.success({
            title: '注册成功',
            desc: '跳转～'
          })
        }
      } catch (error) {
        console.log(error)
        if (error) {
          this.$Notice.error({
            title: '注册失败',
            desc: error.data.message
          })
        }
      }
    }
  }
}
</script>

<style lang="less" scoped >
  .register{
      background: #fff;
      position: relative;
      height: 890px;
    .register-form{
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
        margin-bottom:100px;
      }
      .formStyle{
        width: 400px;
        margin: 0 auto;
        .get-code{
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        color: rgba(87, 158, 243, 1);
        line-height: 24px;
        border: 0;
        background-color: #fff;
        }
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
.register .ivu-input{
  border-radius: 0px;
  border-top: none;
  border-left: none;
  border-right: none;
}
.register .ivu-input:focus{
  box-shadow: none;
}
.register .ivu-select-selection-focused, .ivu-select-selection:hover {
}
.register .ivu-select-visible .ivu-select-selection {
    /* border-color: #57a3f3; */
    outline: 0;
    box-shadow: none;
}
.register .ivu-select-selection{
  border-radius: 0px;
  border-top:none;
  border-left: none;
  border-right: none;
}
</style>
