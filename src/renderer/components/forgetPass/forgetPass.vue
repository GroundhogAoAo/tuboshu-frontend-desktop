<template>
  <div class="forget-pass">
    <div class="forget-bg">
      <div class="forget-form">
         <div  class="title" >
         <span> <Icon type="ios-arrow-back" />重置登录密码</span>
        </div>
        <p class="subtitle">
          为了您的资金安全，重置登录密码后24小时禁止提币
        </p>
        <Form ref="forgetPass" :model="forgetPass" :rules="ruleValidate"  class="formStyle" align="center" >
        <FormItem  prop="account"  label="账户">
            <Input    placeholder="账户" v-model="forgetPass.account"></Input>
        </FormItem>
        <FormItem align="center" class="btn">
            <Button type="primary" long  @click="handleSubmit" >提交</Button>
        </FormItem>
    </Form>
      </div>
    </div>
  </div>
</template>

<script>
import {initGtion} from 'Utils/verCode'
import {resetPass} from 'Api/api'
import secModal from 'Commons/secondVerModal/Modal'
export default {
  name: 'forgetPass',
  data () {
    return {
      gtResult: {},
      forgetPass: {
        account: ''
      },
      ruleValidate: {
        email: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    currentGtState () {
      return this.$store.getters.getCurrentGtResult
    }
  },
  watch: {
    currentGtState: function (val) {
      if (val) {
        this.gtResult = val // 极验参数赋值给实列对象
        this.$store.dispatch('changeGtCheck', false)
        this.doForgetPass()
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.forgetPass.validate(async (valid) => {
        if (valid) {
          this.initGt()
        } else {
          this.$Notice.warning({
            title: '请完善信息'
          })
        }
      })
    },
    initGt () { // 极验
      initGtion(this)
    },
    async doForgetPass () {
      try {
        const flag = this.forgetPass.account.includes('@')
        const pstData = {
          challenge: this.gtResult.geetest_challenge,
          seccode: this.gtResult.geetest_seccode,
          validate: this.gtResult.geetest_validate,
          uri: (flag ? 'mail:' : 'tel:') + this.forgetPass.account
        }
        const res = await resetPass(pstData)
        if (res.status === 200) {
          this.$Notice.success({
            title: '成功'
          })
        }
      } catch (error) {
        if (error.status === 401) {
          this.$Modal.confirm({
            render: h => {
              return h(secModal, {
                props: {
                  that: this,
                  type: 'forget_pwd',
                  errData: error.data
                }
              })
            }
          })
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .forget-pass{
    height: 890px;
    border:1px solid #fff; // why
    background: #f7f7f7;
    .forget-bg{
    margin: 20px;
    background: #fff;
    height: 850px;
    // border:1px solid red ;
    position: relative;
      .forget-form{
      width: 450px;
      // border:1px solid red ;
      height: 500px;
      padding: 70px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      .title{
        width:450px;
        height:24px;
        font-size:18px;
        font-family:Segoe UI;
        font-weight:bold;
        line-height:20px;
        color:rgba(77,79,92,1);
        opacity:1;
      }
      .subtitle{
        width:300px;
        height:16px;
        font-size:12px;
        font-family:Segoe UI;
        font-weight:400;
        line-height:20px;
        color:rgba(77,79,92,1);
        opacity:1;
        padding: 20px 0 0 20px;
      }
      .formStyle{
        margin-top: 80px;
        .btn{
          margin-top:80px;
        }
      }
      }
    }
  }
</style>
