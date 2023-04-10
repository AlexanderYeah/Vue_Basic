<template>
    <div class="school" >   
        <h2>学校名字:{{schoolName}}</h2>    
        <h2>学校地址:{{address}}</h2> 
        <button @click="sendName">点我把名字发送给App</button>     
    </div>
  </template>
  
  <script>
 
  
  export default {

      data() {
        return {
            schoolName:'open',
            address:'上海'
        }
      },
      components:{
      
      },
      props:['getSchoolName'],
      methods:{
        // 添加一个todo
        sendName(){
          this.getSchoolName(this.schoolName)
        }
              
      },
    
      
  }
  </script>
  
  <style>
    .school{background-color: antiquewhite;padding: 10px;}
  </style>