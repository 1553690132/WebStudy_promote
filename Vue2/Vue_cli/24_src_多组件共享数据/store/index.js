// 用于创建 vuex 中核心 store
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
import Vue from 'vue'
Vue.use(Vuex)
// 准备actions:响应组件中的动作
const actions = {
    // context为上下文对象，包含了后续需要的commit等方法。
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADD', value)
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500);
    },
}
// 准备mutations:用于操作数据(state)
const mutations = {
    // state包含了数据，value为传入的数据
    ADD(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.push(value)
    }
}
// 准备state:用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
    personList: [{ id: '001', name: 'lwh' }]
}
// 准备getters:用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store 
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})