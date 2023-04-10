// 插件是一个对象
export default {
    install(Vue){
        // 这里可以利用Vue 做很多事情
        console.log('vue me me ',Vue)       
        // 配置全局过滤器
        
        // 定义一个混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })
    },
    
    
}