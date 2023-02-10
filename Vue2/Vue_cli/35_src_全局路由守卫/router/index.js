import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'
const router = new VueRouter({
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
                meta: { isAuth: true, title: '新闻' }
            }]
        },
    ]
})

// 全局前置路由守卫——————路由初始化或每次路由切换前调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    // if (to.path === '/home/news' || to.name === 'message') {
    //     if (localStorage.getItem('username') === 'lwh') {
    //         next()
    //     } else alert('用户名错误!无权限访问!')
    // } else {
    //     next()
    // }

    // 简便写法
    if (to.meta.isAuth) { // 控制是否需要鉴权
        if (localStorage.getItem('username') === 'lwh') {
            next()
        } else {
            alert('权限不够!')
        }
    } else {
        next()
    }
})

// 全局后置路由守卫——————路由初始化或每次路由切换后调用
router.afterEach((to, from) => {
    document.title = to.name
    console.log('前置路由守卫', to, from);
})

export default router

