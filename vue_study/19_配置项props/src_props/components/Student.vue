<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>姓名:{{name}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2>年纪:{{age}}</h2>
    </div>
</template>
 
<script>    

//  组件交互相关的代码
// 默认暴露    
export default {
    
    data() {
        return {
           
        }
    },
    //方式1: 接收传递过来的数据
    // props:['name','sex','age']
    
    //方式2: 接受同时限制类型
    // props:{
    //     name:String,
    //     sex:String,
    //     age:Number
    // }

    // 方式3: 可以配置默认值
    props:{
        name:{  
            type:String, // 名字的类型
            required:true // 是否是必传的
        },
        sex:{  
            type:String,  
            required:true  
        },
        age:{  
            type:Number,  
            default:99 // 不传默认99
        }
        
    }

}

</script>
 
<style>
    /* 组件的样式 */
    .demo{
        background-color: cadetblue;
    }

</style>