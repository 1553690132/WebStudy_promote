// 创建整个应用的路由
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

import VueRouter from "vue-router";
// 创建暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
})