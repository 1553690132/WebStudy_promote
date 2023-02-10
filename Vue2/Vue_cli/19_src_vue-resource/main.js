import Vue from "vue";
import App from "./App.vue";
// 引入并使用vue-resource插件
import vueResource from 'vue-resource'
Vue.use(vueResource)

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')