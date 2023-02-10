import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [{
                name: 'message',
                path: 'message',
                component: Message,
                children: [{
                    name: 'detail',
                    path: 'detail/:id/:title',
                    component: Detail,

                    // props 第一种:值为对象，对象中的所有key-value都会以props的形式传给Detail组件
                    // props: { a: 1, b: 'hello' },

                    // 第二种:值为布尔值,若为真则把该路由组件收到的所有params参数传给Deatil组件！
                    // props: true,

                    // 第三种:值为函数
                    // props($route) {
                    //     return {
                    //         id: $route.params.id,
                    //         title: $route.params.title
                    //     }
                    // }
                    // 第三种简写
                    props({ query: { id, title } }) {
                        return {
                            id, title
                        }
                    }
                }]
            }, {
                path: 'news',
                component: News
            }]
        },
    ]
})