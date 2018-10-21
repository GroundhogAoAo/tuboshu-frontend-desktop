<template>
  <div id="app">
    <el-button @click="message" type="success" icon="el-icon-search" round>默认按钮</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'tuboshu-frontend-desktop'
  }
</script>

<style>
  /* CSS */
</style>
