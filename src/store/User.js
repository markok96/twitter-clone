export const UserModule = {
    namespaced: true,

    state: {
        user: null
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },

    actions: {
        commitUser({ commit }, user) {
            commit('setUser', user)
        }
    },
}