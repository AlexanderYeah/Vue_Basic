<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学生信息:{{name}}</h2>
        <h2>学校地址:{{age}}</h2>
    </div>
</template>
 
<script>    

//  组件交互相关的代码
// 默认暴露    
export default {
    name:'student',
    data() {
        return {
            name:"Leonardo",
            age:38
        }
    },
}


</script>
 
<style>
    /* 组件的样式 */
    .demo{
        background-color: rgb(196, 197, 255);
    }

</style>