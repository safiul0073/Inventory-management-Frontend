export const state = () => ({
    authenticated: false,

})

export const mutations = {
    authSetup(state) {
        return state.authenticated = !state.authenticated
    },

}