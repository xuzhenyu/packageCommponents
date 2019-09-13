<template>
  <div>
    <p v-for="(item,index) in list" :key="index">
      <slot :item1="item">{{ item.name }}</slot>
    </p>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      list:[
        {name:'lily',age:20},
        {name:'tom',age:24},
        {name:'tomi',age:30}
        ]
    }
  },
  methods:{
  },
  mounted(){
  }
}
</script>