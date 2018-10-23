<template>
  <div class="option">
      <Tabs value="name1">
        <TabPane label="自选" name="name1">
              <Table width="800" border :columns="columns2" :data="data"></Table>
        </TabPane>
        <TabPane label="短线" name="name2">
            短线
        </TabPane>
        <TabPane label="长线" name="name3">智能分组二</TabPane>
    </Tabs>
  </div>
</template>

<script>
import {getExchangeInfo} from '@/api/api';
import { timingSafeEqual } from 'crypto';

export default {
  name:'Option',
    data () {
            return {
                columns2: [
                    {
                        title: '币对',
                        key: 'symbol',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    }
                ],
                data: [
                ]
            }
        },
        created(){
            this.initData()
        },
        methods:{
            async initData(){
                try {
                    const res = await getExchangeInfo()
                    if(res.status === 200){
                        this.data = res.data.symbols
                    } 
                } catch (error) {
                    
                }
            }
        }
    }

</script>

<style>
.option .ivu-tabs-bar{
    margin-bottom: 0px;
}
</style>


