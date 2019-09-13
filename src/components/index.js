import vkprovice from './vkcomponents/provice.vue'
import vkinput from './vkcomponents/vxInput.vue'
import vkselect from './vkcomponents/vxSelect.vue'

//使用install方法来全局注册该组件
const vkComponents = {
    install:function(Vue){
        Vue.component('vk-provice',vkprovice);//vk-provice这就是后面可以使用的组件的名字，install是默认的一个方法
        Vue.component('vk-input',vkinput);
        Vue.component('vk-select',vkselect);
    }
}

//导出组件
export default vkComponents