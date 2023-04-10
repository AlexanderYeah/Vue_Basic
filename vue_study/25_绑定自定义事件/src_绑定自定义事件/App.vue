<template>
  <div class="root">       
    <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 自定义事件 在子组件中进行触发实现传递数据（第一种写法） -->
    <Student v-on:leonarnoHi="getStudentName"></Student>
     <!-- 自定义事件 在子组件中进行触发实现传递数据（第二种写法） -->
    <!-- <Student ref="student"></Student> -->
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
         
      }
    },
    components:{
      School,
      Student
    },
    methods:{
      // 添加一个todo
      getSchoolName(name){
        alert(name)
      },
      getStudentName(name){
        alert(name)
      }      
    },
    mounted(){
      // 当 leonarnoHi 事件触发的时候 去调用 getStudentName 这个方法
      console.log(this.$refs.student)
      // this.$refs.student.$on('leonarnoHi',this.getStudentName)
    }              
}
</script>

<style>
  /* base */
  .root {background-color: lightslategray;padding: 20px;}
  
</style>