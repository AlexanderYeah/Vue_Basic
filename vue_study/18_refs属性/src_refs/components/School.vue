<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学校信息:{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>
 
<script>    

//  组件交互相关的代码
// 默认暴露    
export  default {
    
    data() {
        return {
            schoolName:"RSI",
            address:"CHINA"
        }
    },
}

</script>
 
<style>
    /* 组件的样式 */
    .demo{
        background-color: bisque;
    }

</style>