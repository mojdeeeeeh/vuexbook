export default new Vuex.Store({
	state: {
		books_data:[],
	},

	getters:{
		books: state => state.books_data,
	},

	mutations:{
		setbooks: (state, data) => state.books_data = data,
	},

	actions:{
		loadData(context){
			Axios.get('/books')
			     .then(res => context.commit('setbooks', res.data.data));
		}
    },
})