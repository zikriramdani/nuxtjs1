export default function ({ store, redirect }) {
    if(!store.state.user.token)
    {
        return redirect('/');
    }
    else if(store.state.user.token && !store.state.user.auth)
    {
        store.dispatch('fetchAuth');
    }
}