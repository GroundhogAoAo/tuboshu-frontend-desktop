<template>
  <div>
    这是行情页面
    <Button type="primary" @click="open">ssss</Button>
  </div>
</template>

<script>
import {moduleName} from '@/api/api';
const {ipcRenderer} = require('electron')

export default {
  name:'Quotes',
  data(){
    return{}
  },
  methods:{
    open:function(){
      // this.$electron.remote.dialog.showOpenDialog({
    
      // })
      // this.$electron.remote.shell.beep()
      ipcRenderer.send('login-success','glasss')
    }
  }

}
</script>

<style>

</style>
