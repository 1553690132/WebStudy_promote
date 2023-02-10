// 求和相关的配置
export default  {
    namespaced: true,
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    actions: {
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
    },
    mutations: {
        ADD(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}