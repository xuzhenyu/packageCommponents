<template>
  <el-select filterable placeholder="请选择" v-model="innerValue" @change="changeHandler" :multiple="multiple" :collapse-tags="true">
    <el-option
      v-for="(item,index) in optionList"
      :key="index"
      :label="item.value"
      :value="item.key">
    </el-option>
  </el-select>
</template>

<script>
import axios from 'axios'
  export default {
    name: "vxSelect",

    data(){
      return{
        optionList: [],
        optionListMap: {},
        innerValue: null, //v-model实现 step3.子组件中不允许直接修改prop数据
        objectValue:{}
      }
    },

    props: {
      url: String,//请求地址
      params:{//查询参数（对象or数组）
        type:[Object, Array],
        default:function(){
          return {}; //默认空对象
        }
      },
      value: [String,Number], //实现v-model，step1.需要绑定value
      keyName: String, //选项value
      valueName: String, //选项label
      path:{ //xx.yy的格式指定从返回结果解析数组的路径
        type: String,
        default: ''
      },
      labelGroup: {//xxx[xx]显示
            type: [Boolean,String],
            default: false
      },
      refresh: { //该值变化会引起 选项刷新 refresh = !refresh
        type:Boolean,
        default: true //默认第一次自动加载，在父组件中指定false则第一次不会加载
      },
      multiple:{ //是否多选，默认发生false
        type: Boolean,
        default: false
      }
    },

    watch:{
      refresh(){ //更新标识观测
        this.getOptionList(); 
      },
      value(val,oldVal){ //将value同步到innerValue
      console.log('new',val)
      console.log('old',oldVal)
        this.innerValue = val;
      }
    },

    methods:{
      //change事件处理
      changeHandler(val){
        console.log('change',val)
        this.$emit('input',val) //实现v-model step2.需要触发input
        this.$emit('change',val,this.objectValue[val]) //将原change事件暴露
      },

      //加载下拉选项列表
      getOptionList(){
        // this.$getApi(this.url, this.params).then(resp => {
          axios.post(this.$api.blog,{},{dataType:'jsonp'}).then(resp => {
            console.log('resp=>',resp)
          const {status, data } = resp;
          if(status === 200){
           let list = data.districts[0].districts
           list.map(item=>{
            //  console.log('item=>',item);
             let itemKey = item.adcode
             let itemValue = item.name
             this.objectValue[itemKey] = item
             this.optionList.push({
               key:itemKey,
               value:this.labelGroup?itemValue+'['+itemKey+']':itemValue
             })
           })
          }
        });
      }
    },

    mounted(){
      if(this.refresh){
        this.getOptionList();
      }
    }
  }
</script>
<!--
  #使用api：

  1.可传属性：
  url:string 下拉列表请求地址
  params:object/array 请求参数
  path:string 提取下拉选项数组的路径，根路径为 data 格式： xxx.yyy.zzz
  key:string 字典码
  value:string 字典值
  refresh:boolean 刷新标识 建议：refresh = !refresh 来刷新列表
  multiple:boolean 是否多选，默认false

  2.可用事件：
  @change 等价于原组件的change事件
  @getOptions(arg1,arg2) 获取下拉选项的以key为键的对象（map）以及数组
    arg1:object 下拉选项的map
    arg2:array 下拉选项数组（值包含key和value属性）
-->
