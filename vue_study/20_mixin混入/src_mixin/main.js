import { createApp } from 'vue'
import App from './App.vue'
import { hunhe } from './mixin'
// 配置全局混合
// import {hunhe} from './mixin'

// Vue.minxi(hunhe)
createApp(App).mount('#app')
/**
 * 混合也叫做混入:功能就是可以把多个组件公用的配置提取成一个混入对象
 * 有全局混合和局部混入两种方式
 * 
 * 
 * */ 