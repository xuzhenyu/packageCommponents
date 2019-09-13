<template>
    <div>
        <h2>这是另一个页面{{msg}}</h2><hr/><hr/>
        <h3> {{count}}</h3>
        <!-- <p>
            <button @click="$store.commit('add',5)">+</button>
            <button @click="reduce">-</button>
        </p> -->
        <p>
            <button @click="addActions">+</button>
            <button @click="reduceActions">-</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store';
    import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex'
            }
        },
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
            // computed:mapState({
            //    count:state=>state.count 
            // }),
            computed:{
                ...mapState(['count'])
                //...mapGetters(['count'])
            },
            methods:{
                ...mapMutations(['add','reduce']),
                ...mapActions(['addActions','reduceActions'])
            },
        store
    }
</script>