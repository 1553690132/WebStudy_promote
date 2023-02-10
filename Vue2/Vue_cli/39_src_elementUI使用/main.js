import Vue from 'vue'
import App from './App.vue'
// 引入全部elementUI组件库和全部css样式
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// ElementUI全部应用
// Vue.use(ElementUI)


// ElementUI按需引入
import { Button, DatePicker, Row } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Row.name, Row)



Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')