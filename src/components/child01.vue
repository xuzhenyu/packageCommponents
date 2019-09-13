<template>
  <div>
    <h2>child子组件部分</h2>
    <p>{{user}}生活在{{message}}</p>
    <button v-on:click="sendMsgToParent('Jerry','上海')">向父组件传值</button>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  props : ["message","user"],
  data () {
    return {
 
    }
  },
  methods:{
    sendMsgToParent:function (user,val) {
        var data = {
            name:user,
            cityname : val
        };
        this.$emit("listenToChildEvent",data)
    }
  },
  mounted(){
    //this.initProvince();
  }
}
</script>