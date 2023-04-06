<!-- 组件的结构 -->
<template>
    <div class="todo-header">
        <input v-model="title" type="text" placeholder="请输入你的任务名称 回车键确认~" @keyup.enter="add">        
    </div>
</template>
 
<script>    

import {nanoid} from 'nanoid'

//  组件交互相关的代码
// 默认暴露    
export default {    
    
    data() {
        return {
            // 用户输入的title
            title:""
        }
    }, 
    // 接收从外部传递过来的数据
    props:['addTodo'],
    methods:{
        add(){
            console.log('addTodo');
            // 校验输入的数据
            if(this.title.trim()==="") return alert('输入不能为空')
            // 将用户的输入包装成一个对象
            const todoObj = {id:nanoid(),title:this.title,done:false}
            // 通知App 组件去添加 todo 一个对象
            this.addTodo(todoObj)
            // 清空输入
            this.title = ""

        }
    }      
}

</script>
 
<style scoped>
    /* 组件的样式 */
    .todo-header input{
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid lightgrey;
        border-radius: 8px;
        padding: 4px 7px;
    }
    .todo-header input:focus{
        outline: none;
        border-color: lightblue;
        box-shadow: inset 0 1px 1px rgb(0, 0, 0,0.075),0 0 8px lightblue;
    }
</style>