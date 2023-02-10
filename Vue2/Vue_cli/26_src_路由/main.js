import Vue from 'vue'
import App from './App.vue'

// 引入并应用VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引入路由器
import router from './router/index'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')