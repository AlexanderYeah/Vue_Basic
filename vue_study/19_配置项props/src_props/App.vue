<template>
  <div>          
    <Student name="张三" sex="男" :age="88"/>    
    <hr>
    <Student name="李四" sex="女" :age="58"/>  
    <hr>
    <Student name="王老五" sex="男"/>  
  </div>
</template>

<script>
// 引入组件
import Student from './components/Student.vue'

export default {
    name:'App',
    data() {
      return {
        msg:'To only buy stocks currencies or cryptos on  pullbacks not breakouts'
      }
    },
    components:{
      Student 
    },
    methods:{
       
    }
    
}
</script>

<style>

</style>