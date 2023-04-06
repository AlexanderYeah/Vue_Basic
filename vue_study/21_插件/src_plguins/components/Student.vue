<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2 >姓名:{{name}}</h2>
        <h2>性别:{{sex}}</h2>      
    </div>
</template>
 
<script>    



//  组件交互相关的代码
// 默认暴露    
export default {
    
    data() {
        return {
           name:'张三爱吃大鱼',
           sex:'男'
        }
    },
   
    
}

</script>
 
<style>
    /* 组件的样式 */
    .demo{
        background-color: cadetblue;
    }

</style>