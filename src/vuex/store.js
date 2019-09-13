import Vue from 'vue'
import Vuex from 'vuex'
import { setTimeout } from 'timers';
Vue.use(Vuex);

const state={
    count:1
}
const mutations={
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count --;
        if(state.count < 0){
            state.count ++;
        }
    }
}
const getters={
    //count:state=>state.count+=100    
    count:function(state){
        return state.count+=10;
      }
}
const actions={
    addActions(context){
        context.commit('add',10);
        setTimeout(()=>{context.commit('reduce')},2000);
        console.log('先执行了');
    },
    reduceActions({commit}){
        commit('reduce');
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})