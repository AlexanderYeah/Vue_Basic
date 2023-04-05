import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
/**
 * 关于vue.js 和 vue.runtime.xxx.js 的区别
 *  1> vue.js 是完整的Vue，包含核心功能和模板解析器
 *  2> vue.runtime.xxx.js 是运行版本的vue，只是包含核心功能，没有模板解析器
 *  
 *  因为vue.runtime.xxx.js 没有模板解析器 。所以不能使用template 配置项 render 函数接收到createElement函数去指定具体内容
 *
 * 
 * 
 * 
*/