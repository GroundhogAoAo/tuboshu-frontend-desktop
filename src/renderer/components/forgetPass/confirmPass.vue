<template>
  <div class="confirm-pass">
    <div class="confirm-bg">
      <div class="confirm-form">
         <div  class="title" >
         <span> <Icon type="ios-arrow-back" />重置登录密码</span>
        </div>
        <p class="subtitle">
          为了您的资金安全，重置登录密码后24小时禁止提币
        </p>
        <Form ref="formCustom" :model="formCustom" :rules="ruleValidate"  class="formStyle" align="center" >
        <FormItem  prop="email"  label="新登录密码">
            <Input    placeholder="请输入新登录密码"></Input>
        </FormItem>
         <FormItem  prop="email"  label="确认登录密码">
            <Input    placeholder="请输入新登录密码"></Input>
        </FormItem>
        <FormItem align="center" class="btn">
            <Button type="primary" long  >提交</Button>
        </FormItem>
    </Form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'confirmPass',
  data () {
    return {
      formCustom: {

      },
      ruleValidate: {
        email: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .confirm-pass{
    height: 890px;
    border:1px solid #fff; // why
    background: #f7f7f7;
    .confirm-bg{
    margin: 20px;
    background: #fff;
    height: 850px;
    // border:1px solid red ;
    position: relative;
      .confirm-form{
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
