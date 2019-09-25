
<template>
    <div>
        <h3>我是C组件</h3>
        <!-- <div  @click="send">我是A组件</div>
        <div>{{ addTodo }},我是B组件</div> -->
        <brother-a></brother-a>
        <brother-b></brother-b>
    </div>
</template>>
<script>
import Vue from 'vue';
import VueBus from 'vue-bus';
import brotherA from './AAA'
import brotherB from './BBB'
Vue.use(VueBus);
export default{
    components:{
        brotherA,
        brotherB
    },
    // data () {
    //     return {
    //     userName:null,
    //     newTodoText:'',
    //     addTodo:""
    //     }
    // },
    // methods: {
    //     send () {
    //         console.log(123)
    //     this.newTodoText = 'hello world'
    //     this.$bus.emit('add-todo', this.newTodoText );        
    //     },
    // },
    // created() {
    //     this.$bus.on('add-todo', (val) => {
    //         this.addTodo = val
    //     });
    // },
}
</script>