<template>
  <div>
    <!-- ref 属性 
      1.被用来给元素或者子组件注册引用信息（id 的替代者）
      2.应用在html 标签上获取的是真实的DOM 元素，应用在组件标签的上是实例对象
    
    -->
    <h1 ref="title" v-text="msg"></h1>
    <!-- 原生的id="h1"  -->
    <button @click="showDOM" ref="btn">点击按钮输出上方的dom元素</button>
    <School ref="sch"/>
    
  </div>
</template>

<script>
// 引入组件
import School from './components/School'

export default {
    name:'App',
    data() {
      return {
        msg:'To only buy stocks currencies or cryptos on  pullbacks not breakouts'
      }
    },
    components:{
        School 
    },
    methods:{
      showDOM(){
        // 原生的方式 输出h1
        // console.log(document.getElementById("h1"))
        // vuecompoents 身上的元素refs  
        console.log(this.$refs.title)// 真实的DOM元素
        console.log(this.$refs.btn)//  真实的DOM元素
        console.log(this.$refs.sch)// School 组件的实例对象
      }
    }
    
}
</script>

<style>

</style>