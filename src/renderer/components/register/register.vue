<template>
 <div class="register"  >
  <div class="register-form">

  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
    }
  },
  methods: {
}
}
</script>

<style lang="scss" scoped >
  .register{
      background: #fff;
      position: relative;
      height: 500px;
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
