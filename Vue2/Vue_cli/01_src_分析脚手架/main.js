// 入口文件
import Vue from 'vue'
// 引入App组件:所有组件的父组件
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false
// 创建Vue实例对象vm
new Vue({
  // 将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
