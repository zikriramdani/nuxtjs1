export const state = () => ({
    token   	: '', //localStorage.getItem('token'),
    auth    	: null
})

export const mutations = {
	setToken(state, payload)
	{
		localStorage.setItem('token', payload);
		state.token = payload;
	},
	setAuth(state, payload)
	{
		state.auth = payload;
	},
	removeToken(state, payload)
	{
		localStorage.removeItem('token');
		state.token = null;
		state.auth  = null;
	}
}

export const actions = {
	// Proses Login
	login(context, payload)
	{
		return new Promise((resolve, reject) => {
			this.$axios.post('/users/login', payload).then((result) => {
				console.log('asd', result)
				// if(result.data.status)
				// {
				// 	context.commit('setToken', result.data.data.jwt.token);
				// 	context.commit('setAuth', result.data.data.user);

				// 	resolve(result.data);
				// }
				// else
				// {
				// 	reject(result.data);
				// }
			}).catch((error) => {
				reject(error);
			});
		});
	},

	// Logout
	logout(context, payload)
	{
		return new Promise((resolve, reject) => {
			context.commit('removeToken');
			resolve(true);
		});
	},

	// Data Profile
	fetchAuth(context, payload)
	{
		this.$axios.get('/users/me').then((result) => {
			if(result.data.status)
			{
				context.commit('setAuth', result.data.data.profile);
			}
		}).catch((error) => {
			console.log(error);
		});
	}
}

export const getters = {
   	getAuthUsername: state => {
        return state.auth ? state.auth.username : '';
    },
    getAuthName: state => {
        return state.auth ? state.auth.name : '';
    }
}