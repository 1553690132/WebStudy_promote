import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'
const router = new VueRouter({
    // 默认为哈希hash
    mode: 'history',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [{
                name: 'message',
                path: 'message',
                component: Message,
                meta: { isAuth: true, title: '信息' },
                children: [{
                    name: 'detail',
                    path: 'detail/:id/:title',
                    component: Detail,
                    meta: { title: '详情' },
                    props({ query: { id, title } }) {
                        return {
                            id, title
                        }
                    }
                }]
            }, {
                path: 'news',
                component: News,
                // meta为路由元信息:配置路由的属性
                meta: { isAuth: true, title: '新闻' },
            }]
        },
    ]
})


export default router

