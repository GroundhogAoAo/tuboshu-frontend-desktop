<template>
  <div>
    这是行情页面
    <Button type="primary" @click="open">ssss</Button>
  </div>
</template>

<script>
import {moduleName} from '@/api/api';
export default {
  name:'Quotes',
  data(){
    return{}
  },
  methods:{
    open:function(){
      // this.$electron.remote.dialog.showMessageBox({
      //   title:'wukai',
      //   message:'WWWWW',
      //   detail:`Version `
      // })
      // this.$electron.remote.shell.beep()
    }
  }

}
</script>

<style>

</style>
