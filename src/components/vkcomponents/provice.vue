<template>
  <el-select v-model="value" placeholder="请选择省份1" @change="selectProvince">
    <el-option
      v-for="item in provice"
      :key="item.proviceCode"
      :label="item.proviceName"
      :value="item.proviceCode">
    </el-option>
  </el-select>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        provice:[],
        value:''
      }
    },
    methods:{  
        initProvince() {
            // const url = '../../../static/json/provice.json';
            //axios.get(url,{params:{}}).then(res => {
            axios.post(this.$api.blog,{},{dataType:'jsonp'}).then(res => {
                const data = res.data;   
                const provice = data.districts[0].districts;             
                for(let item of provice){
                    this.provice.push({
                        proviceName:item.name,
                        proviceCode:item.adcode
                    });
                }
                // if(!result){
                //     //this.$message.error(msg);
                // }
            });
        },
        selectProvince(...args){
            console.log(args);
        }
    },
    mounted(){
        this.initProvince();
    }
  }
</script>
