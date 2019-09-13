<template>
             <el-col :span="6">
               <el-form-item :label="labelData" class="flex-20 "  :prop="propData">
                  <el-input  :value="currentValue" @input="handleInput" ></el-input>
               </el-form-item>
              </el-col>
</template>

<script>
export default {
    name:'vx-input',
    props: {
         name: '',
         propData:'',
         value: '',
         label:{
          type: String,
            default: ''
         },
         disabled:{
           type:Boolean,
           default:false
         },
         width:{
              type: Number,
              default: 80
         },
         keyCode:{ type: String, default: "codeName" }
    },
    
    data(){
        return{
          currentValue: this.value,
          propData:this.name,
          labelData:this.label
        }
    },
    watch:{
      value(val){ //将value同步到innerValue
      //console.log(arguments);
      console.log('val=>'+val);
        this.currentValue = val;
      }
    },
    mounted(){
      console.log('value=>'+this.value);
      console.log('currentValue=>'+this.currentValue);
      console.log(this.keyCode);
      console.log(this.propData);
    },
    methods:{
    handleInput(currentValue) {
      // console.log('value=>'+currentValue);
      // console.log('currentValue=>'+this.currentValue);
       this.$emit('input',currentValue); //触发 input 事件，并传入新值
    }
    }
}
</script>
