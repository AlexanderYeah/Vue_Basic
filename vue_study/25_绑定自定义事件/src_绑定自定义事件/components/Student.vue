<template>
    <div class="astudent" >   
        <h2>学生名字:{{name}}</h2>    
        <h2>年龄:{{age}}</h2>    
        <button @click="sendName">点我把名字发送给App</button>   
        <button @click="unbind">解绑自定义的事件</button>
    </div>
  </template>
  
  <script>
 
  
  export default {
  
    
      data() {
        return {
            name:'leonardo',
            age:18
        }
      },
      components:{
      
      },
      methods:{      
        sendName(){          
          // 触发自定义的事件
          this.$emit('leonarnoHi',this.name)
        },
        unbind(){
          // 解绑单个
          // this.$off('leonarnoHi')
          // 解绑多个
          // this.$off(['leonarnoHi'])
          // 解绑所有         
          // this.$off()
        }              
      },
    
      
  }
  </script>
  
  <style>
    .astudent{background-color:aquamarine;padding: 10px;margin-top: 50px;}
  </style>