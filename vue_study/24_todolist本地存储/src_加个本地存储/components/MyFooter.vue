<!-- 组件的结构 -->
<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model="isAll" >
        </label>
        <span>
            <span>已完成{{doneTotal}} / 全部{{total}}</span>
        </span>

        <button class="btn btn-danger" @click="clearAll">清除已经完成的任务</button>

    </div>
</template>
 
<script>    


 
//  组件交互相关的代码
// 默认暴露    

export default {
    
    data() {
        return {
          
        }
    },
    props:['todos','checkAllTodo','clearAllTodo'],
    computed:{
        //  总数
        total(){
            return this.todos.length
        },
        // 已经完成的数
        doneTotal(){
            return this.todos.reduce((pre,todo)=>{
                return pre + (todo.done ? 1 : 0)
            },0)
        },
        // 全选框是否勾选
        isAll:{
            get(){
                return this.doneTotal === this.total && this.total > 0
            },
            set(value){
                this.checkAllTodo(value)
            }
        },        
      
        
    },
    methods:{
       clearAll(){
        this.clearAllTodo()
       }
    },
 
    
}

</script>
 
<style>
    .todo-footer{height: 40px;line-height: 40px;padding-left: 6px;margin-top: 5px;}    
    .todo-foote label{}
</style>