import { createApp } from 'vue'
import App from './App.vue'
import plugin from './plugin'


const app = createApp(App)
// mount 之前要引入插件 
app.use(plugin)
app.mount('#app')


/**
 *  插件功能:用于增强Vue 
 *  本质是：包含install方法的一个对象,install 的第一个参数是Vue,第二个以后得参数是插件使用者传递的数据
 *  使用插件 调用 use 方法
 *  定义插件 格式如文件所示
 * 
 * 
 * */ 