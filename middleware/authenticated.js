export default function({ store, redirect, auth }) {

    if (!store.state.authenticated) {
        return redirect('/auth/login')
    }
}