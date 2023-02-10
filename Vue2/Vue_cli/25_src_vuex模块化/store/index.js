// 用于创建 vuex 中核心 store
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)

// 创建并暴露store 
export default new Vuex.Store({
    modules: {
        count: countOptions,
        person: personOptions
    }
})