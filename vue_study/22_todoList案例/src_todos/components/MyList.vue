<!-- 组件的结构 -->
<template>
    <ul class="todo-main">
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyItem>    
    </ul>
</template>

<script>    

import MyItem from './MyItem.vue'

//  组件交互相关的代码
// 默认暴露    
export default {    
    data() {
        return {
         
        }
    },   
    // 声明接收App 传递过来的数据 todos 是自己用的 checkTodo 和 deleteTodo 是给子组件用的
    props:['todos','checkTodo','deleteTodo'],        
    components:{
        MyItem
    }
}

</script>
 
<style scoped>
    /* 组件的样式 */
    .todo-main{
        margin-left: 0px;border: 1px solid #ddd;border-radius: 2px;padding: 0px;
    }

</style>