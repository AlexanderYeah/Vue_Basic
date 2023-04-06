import { createApp } from 'vue'
import App from './App.vue'
import plugin from './plugin'


const app = createApp(App)
// mount 之前要引入插件 
app.use(plugin)
app.mount('#app')

/**
 *   1 组件化流程:
 *         1> 拆分静态组件:组件按照功能点拆分，命名不要与html元素冲突
 *         2> 实现动态组件:考虑好数据的存放位置，数据是一个组件再用 还是一些组件在用
 *         3> 实现交互,绑定组件
 *   2 
 *      1>props 适用于父组件 ===> 子组件 通信
 *      2>子组件===> 父组件(要求父先给子一个函数)
 *   3 使用v-model 时候要切记:v-model 绑定的值不能是props 传递过来的值,因为props 是不能修改的   
 *      
 * 
 * 
 * 
 * */ 