import { createApp } from 'vue'
import App from './App.vue'
import plugin from './plugin'


const app = createApp(App)
// mount 之前要引入插件 
app.use(plugin)
app.mount('#app')

/**
 *  组件的自定义事件:
 * 1 是一种组件间的通信方式 适用于子组件传递给父组件
 * 2 使用场景 A 是父组件  B 是子组件 ，B想给A传递数据，那么就要在A中给B绑定自定义事件
 * 3 绑定自定义事件:
 *      3.1 第一种方式 <Demo @myClick= "showSth"> 或者  <Demo v-on:myClick= "showSth"> 
 *      3.2 使用ref 属性
 *     
 * 4 触发自定义事件  this.$emit('myClick',"参数")     
 * 5 解绑自定义事件  this.$off 
 * 6 组件也可以绑定原生DOM事件，使用native 修饰符
 * 
 * */ 