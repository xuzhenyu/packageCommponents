<template>
    <div>
        <vk-provice></vk-provice>
        <!-- <vk-input v-model="ttt" keyCode="tmc" propData="keyCode"></vk-input> -->
        {{ttt}}
        <vk-select labelGroup v-model="city" @change="cityMethods"></vk-select>
        {{city}}
    </div>
</template>
<script>
    export default {
        data(){
            return{
                ttt:'xxx',
                city:'请输入城市',
            }
        },
        methods:{
            cityMethods(){
                console.log('val',arguments)
            }
        }
    }
</script>
