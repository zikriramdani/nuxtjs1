export const state = () => ({
    books        : [],
    selectBooks   : null
})

export const mutations = {
   	setBooks(state, payload)
    {
        state.books = payload;
    },
    changeSelectBooks(state, payload)
    {
        state.selectBooks = payload;
    }
}

export const actions = {
	fetchBooks(context, payload)
    {
        this.$axios.get('/books').then((result) => {
            if(result.data.status)
            {
                context.commit('setBooks', result.data.data.books);
            }
        }).catch((error) => {
            console.log(error);
        });
    },
    createBooks(context, payload)
    {
        return new Promise((resolve, reject) => {
            this.$axios.post('/books/insert', payload).then((result) => {
                if(result.data.status)
                {
                    resolve(result.data);
                }
                else
                {
                    reject(result.data);
                }
            }).catch((error) => {
                reject(result.data);
            });
        });
    },
    updateBooks(context, payload)
    {
        return new Promise((resolve, reject) => {
            this.$axios.put('/books/edit', payload).then((result) => {
                if(result.data.status)
                {
                    resolve(result.data);
                }
                else
                {
                    reject(result.data);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export const getters = {
   
}