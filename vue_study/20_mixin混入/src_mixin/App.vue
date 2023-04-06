<template>
  <div>          
    <Student/>    
    <hr>
    <School/>  
    
    
  </div>
</template>

<script>
// 引入组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    data() {
      return {
        msg:'To only buy stocks currencies or cryptos on  pullbacks not breakouts'
      }
    },
    components:{
      Student,
      School
    },
    methods:{
       
    }
    
}
</script>

<style>

</style>