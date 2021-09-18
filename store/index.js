import categoryStror from './category'
export const state = () => ({
    authenticated: true,

})

export const mutations = {
    authSetup(state) {
        return state.authenticated = !state.authenticated
    },

}

export const modules = () => ({
    category: categoryStror
})