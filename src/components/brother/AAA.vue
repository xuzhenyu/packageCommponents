<template>
        <div>
              <div @click="send">我是A组件</div>
        </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      userName:null,
      newTodoText:''
    }
  },
  methods: {
    send () {
      this.newTodoText = 'hello world'
       this.$bus.emit('add-todo', this.newTodoText );
       
    },
  }
}
</script>