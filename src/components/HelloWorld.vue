<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    {{ dataRange.startDate }}
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="dataRange.startDate"
        type="date"
        @click="testDate"
        placeholder="选择日期"
        value-format="yyyy-MM-dd">
      </el-date-picker>
      <el-date-picker
        v-model="dataRange.endDate"
        type="date"
        @click="testDate"
        placeholder="选择日期"
        value-format="yyyy-MM-dd">
      </el-date-picker>
    </div>
    <input type="button" value="xxx" @click="testDate">
    <p v-if="ck" @click="ttt">点击展开</p>
    <p v-else  @click="ttt">点击收起</p>
    <p v-show="content">xxxxxxxxxxxxxxxxxxxxxxxxx</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataRange:{
        startDate:null,
        endDate:null
      },
      ck:true,
      content:false
    }
  },
  mounted(){
    //this.testDate();
  },
  methods:{
    testDate(){
      console.log(222);
      console.log(this.dataRange.startDate);
      if(this.dataRange.endDate === null || this.dataRange.startDate === null){
        //alert('请输入初始值');
        this.$message.error('请输入初始值');
      }
    },
    ttt(){
      this.ck =! this.ck;
      this.content =! this.content
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
