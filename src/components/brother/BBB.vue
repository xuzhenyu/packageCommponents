<template>
  <div>
    <div>{{ addTodo }}，你好世界，我是B组件</div>
  </div>
</template>

<script>
export default{
        data(){
              return{
                  addTodo:""
              }
        },
        created() {
            this.$bus.on('add-todo', (val) => {
              this.addTodo = val
            });
        },
}
</script>