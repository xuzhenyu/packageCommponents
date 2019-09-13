import Vue from 'vue'
import api from '@/api/api'

export default{
    install(Vue,options){
        Vue.prototype.$api = api;  //api地址全局方法
    }
}