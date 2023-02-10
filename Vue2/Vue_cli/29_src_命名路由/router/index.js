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
                    path: 'detail',
                    component: Detail
                }]
            }, {
                path: 'news',
                component: News
            }]
        },
    ]
})
