<template>
<div class="layout">
      <Layout :style="{minHeight:'100vh'}">
        <Layout >
            <Sider class="sider"  >
                <Menu active-name="1-2" theme="dark" width="auto" >
                <MenuItem name="1-1" to="/option">
                    <Icon type="md-heart-outline" size="16" />
                    <span >自选</span>
                </MenuItem>
                <MenuItem name="1-2" to="/quotes">
                    <Icon type="logo-bitcoin" size="16" />
                    <span>行情</span>
                </MenuItem>
                <MenuItem name="1-3">
                    <Icon type="logo-bitcoin" size="16" />
                    <span>市场</span>
                </MenuItem>
                  <MenuItem name="1-4">
                    <Icon type="md-swap" size="16" />
                    <span>交易</span>
                </MenuItem>
                  <MenuItem name="1-5">
                    <Icon type="ios-card-outline" size="16" />
                    <span>账户</span>
                </MenuItem>
                  <MenuItem name="1-6" to="/login">
                    <Icon type="ios-apps-outline"  size="16"/>
                    <span>{{ss}}</span>
                </MenuItem>
            </Menu>
            </Sider>
            <Content>
                <router-view></router-view>
            </Content>
        </Layout>
        <div class="footer" >   
            <Row type="flex" align="middle">
                <Col span="2" push="1"> <div ><Icon type="ios-wifi-outline"  color='green' size="20"/> </div> </Col>
            </Row>     

        </div>
    </Layout>
</div>

</template>

<script>
import {test} from '@/api/api';
  export default {
    name: 'landing-page',
      data () {
            return {
                ss:'1'
            }
        },
      computed: {
      
      },
    created(){
        this.test()
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
       async test(){
           try {
               const res = await test()
               console.log(res);
               this.ss = res.data.msg
           } catch (error) {
               this.ss = 'ss'
           }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .layout {
        .footer{
            height: 24px;
            background-color: #d6d6d6;
        }
    }
</style>

<style>
  .layout .ivu-layout-sider{
      max-width: 60px !important;
      min-width: 60px !important;
  }
</style>
