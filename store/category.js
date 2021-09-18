export default () => {
    namespaced = true;
    const state = () => ({
        isTable: true,
        data: []
    })

    const mutations = {
        setTableShow(state) {
            return state.isTable = !state.isTable
        },
        setUpdateOrSave(state) {
            return state.isUpdate = !state.isUpdate
        }
    }
}