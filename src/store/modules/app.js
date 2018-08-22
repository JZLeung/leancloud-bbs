export default {
    namespaced: true,
    state: {
        loading: false,
        navbar: false
    },
    mutations: {
        'SET_LOADING'(state, payload) {
            state.loading = payload
        },
        'SET_NAVBAR'(state, payload) {
            state.navbar = payload
        }
    },
    actions: {
        setLoading({commit}, payload) {
            commit('SET_LOADING', payload)
        },
        setNavBar({commit}, payload) {
            commit('SET_NAVBAR', payload)
        }
    }
}
