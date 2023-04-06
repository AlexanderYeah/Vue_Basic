<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2 @click="showName">姓名:{{name}}</h2>
        <h2>性别:{{sex}}</h2>      
    </div>
</template>
 
<script>    

import {hunhe} from '../mixin'

//  组件交互相关的代码
// 默认暴露    
export default {
    
    data() {
        return {
           name:'张三',
           sex:'男'
        }
    },
    mixins:[hunhe]
    
}

</script>
 
<style>
    /* 组件的样式 */
    .demo{
        background-color: cadetblue;
    }

</style>