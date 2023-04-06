<!-- 组件的结构 -->
<template>
    <li>
        <label for="">
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      
    </li>
</template>
 
<script>    



//  组件交互相关的代码

// 默认暴露    
export default {    
    data() {
        return {
         
        }
    },  
    props:['todo','checkTodo','deleteTodo'],
    methods:{        
        handleCheck(id){          
            this.checkTodo(id)    
        },
        handleDelete(id){
            if(confirm('确定要删除吗')){
                this.deleteTodo(id)
            }          
        }
    }
    
}

</script>
 
<style scoped>
    /* 组件的样式 */
    li{list-style: none;height: 36px;line-height: 36px;padding: 0px 5px;border-bottom: 1px solid #ddd;}
    li label{float: left;cursor: pointer;}
    li button {float: right;margin-top: 7px;display: block;}
</style>