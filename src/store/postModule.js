import axios from "axios";

export const postModule = {
    state: ()=>({
        posts: [],
        isPostsLoading: false,
        selectedSort:'',
        sortOptions:[
            {value:'title', name:'По названию'},
            {value:'body', name:'По содержимому'}
        ],
        searchQuery:'',
        page: 1,
        limit: 10,
        totalPages: 0,
    }),
    getters: {
        sortedPost(state){
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },
        sortedAndSearchedPosts(state, getters){
            return getters.sortedPost.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        },
        setLoading(state, bool){
            state.isPostsLoading = bool;
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort;
        },
        setPage(state, page){
            state.page = page;
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery;
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages;
        },

    },
    actions: {
        async fetchPosts({state, commit, }){
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
                    {
                        params:{
                            _page:state.page,
                            _limit:state.limit,
                        }
                    });
                commit('setTotalPages',Math.ceil(response.headers['x-total-count']/this.limit));
                commit('setPosts',response.data);

            }
            catch (e) {
                alert('Ошибка!');
            }
            finally{
                commit('setLoading', false);
            }
        },
        async loadMorePosts({state, commit}){
            try {
                 //Переключение страницы на одну вперед при вызове данной функции.
                commit('setPage', state.page+1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
                    {
                        params:{
                            _page:state.page,
                            _limit:state.limit,
                        }
                    });
                commit('setTotalPages',Math.ceil(response.headers['x-total-count']/state.limit));
                commit('setPosts',response.data);
            }
            catch (e) {
                alert('Ошибка!');
            }
        },
    },
    namespaced:true
}