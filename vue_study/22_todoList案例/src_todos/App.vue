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
        todos:[
          {'id':'001','title':'抽烟','done':true},
          {'id':'002','title':'喝酒','done':false},
          {'id':'003','title':'开车','done':true}
        ]
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