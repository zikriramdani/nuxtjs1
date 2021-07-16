export default function ({ store, redirect }) {
	console.log('unauthenticated', store.state.user.token)
	if (store.state.user.token) {
		console.log('unauthenticated if', store.state.user.token)
		return redirect('/welcome')
	}
}
