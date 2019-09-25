import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import test from '@/components/test'
//import test1 from '@/components/test1'
//import parent from '@/components/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vx',
      name: 'test',
      component: resolve => require(['@/components/test.vue'], resolve)
    },
    {
      path: '/vxx',
      name: 'test1',
      component: resolve => require(['@/components/test1.vue'], resolve)
    },
    {
      path: '/parent',
      name: 'parent',
      component: resolve => require(['@/components/parent.vue'], resolve)
    },
    {
      path:'/installcp',
      name:'installComponent',
      component: resolve => require(['@/components/installComponent.vue'], resolve)
    },
    {
      path:'/1.2',
      name:'1.2',
      component: resolve => require(['@/components/1.2/index.vue'], resolve)
    },
    {
      path:'/brother',
      name:'brother',
      component: resolve => require(['@/components/brother/CCC.vue'], resolve)
    }
  ]
})
