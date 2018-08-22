export default {
    namespaced: true,
    state: {
        username: ''
    },
    mutations: {
        'SET_USERNAME'(state, payload) {
            state.username = payload
        }
    },
    actions: {
        setUsername({commit}, payload) {
            commit('SET_USERNAME', payload)
        }
    }
}
