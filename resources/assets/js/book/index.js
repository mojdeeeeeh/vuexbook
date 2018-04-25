import Store from './index-store'

new Vue({
	el: '#root',

	store: Store,

	computed:{
		books(){
			return this.$store.getters.books;
		}
	},

	mounted(){
		this.$store.dispatch('loadData');
	},
})



// new Vue({
// 	el: '#root',

// 	data:{
// 		books: [
// 		]
// 	},

// 	mounted(){
// 		this.loadData();
// 	},

// 	methods:{
// 		loadData(){
// 			Axios.get('/books')
// 			.then(res => this.books = res.data.data);
// 		}
// 	},
// })