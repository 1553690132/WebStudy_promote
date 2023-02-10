// 人员相关配置
import axios from "axios";
export default {
    namespaced: true,
    state: {
        personList: [{ id: '001', name: 'lwh' }]
    },
    actions: {
        addPersonKing(context, value) {
            if (value.name.indexOf('King') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须为King!')
            }
        },
        addPersonServer(context) {
            axios.get('http://localhost:8081/api/people').then((result) => {
                context.commit('ADD_PERSON', result.data)
            }).catch((err) => {
                throw new Error(err.message)
            });
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.push(value)
        }
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}