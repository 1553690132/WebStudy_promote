// 引入不再是Vue构造函数，引入的是名为createApp的工厂函数、
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象app(类似于之前Vue2中的vm，但app相比vm更加轻量)
const app = createApp(App)
app.mount('#app')
// createApp(App).mount('#app')

// 旧版写法
// const vm = new Vue({
//     render: h=>h(App)
// }).$mount('#app')