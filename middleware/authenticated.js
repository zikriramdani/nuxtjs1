export default function ({ store, redirect }) {
	console.log('aut', store.state.user.token)
	if (!store.state.user.token) {
		return redirect('/')
	} else if (store.state.user.token && !store.state.user.auth) {
		store.dispatch('fetchAuth')
	}
}
