<template>
  <div id="root">   
    <div class="todo-container">

      <div class="todo-warp">
        <MyHeader :add-todo="addTodo"></MyHeader>    
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>        
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>

      </div>
    </div>       
   
    
  </div>
</template>

<script>
// 引入组件
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'


export default {

    name:'App',
    data() {
      return {
        todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    components:{
      MyHeader,
      MyList,
      MyFooter     
    },
    methods:{
      // 添加一个todo
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      // 勾选或者取消勾选一个todo
      checkTodo(id){
        this.todos.forEach((item)=>{            
            if(item.id === id){             
              item.done = !item.done
            }
        })
      },
      // 勾选全部
      checkAllTodo(done){
        this.todos.forEach((item)=>item.done = done)
      },
      // 删除一个todo
      deleteTodo(id){
          this.todos = this.todos.filter(todo => todo.id !== id)
      }, 
      // 清除已经完成
      clearAllTodo(){
        this.todos = this.todos.filter(todo => todo.done === false)
      } 
    },
    // 监视todos属性 浏览器存储
    // 这里要开启deep 属性,因为监视的是数组 数组里面又有对象 所以当按钮点击时候 对象选中的属性发生变化时
    // 不开启深度监视则数据不会改变
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    }
    
}
</script>

<style>
  /* base */
  body {background-color: white;}
  .btn-danger{color: #ffffff;background-color:#da4f49;border: 1px solid #bd362f;}
  .btn-danger:hover{color:#fff;background-color:#bd362f}
  .btn-danger:focus{outline: none;}
  .todo-container{width: 600px;margin:0 auto;}
  .todo-conatiner .todo-wrap {padding: 10px;border: 1px solid #ddd;border-radius: 5px;}
</style>