<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <div class="page__wrapper">
            <div
                    v-for="pageNumber in totalPages"
                    :key="pageNumber"
                    class="page"
                    :class="{
                        'current_page': page === pageNumber
                    }"
                    @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
        <my-input v-model="searchQuery" placeholder="Поиск..."></my-input>
        <div class="app__btns">
            <my-button
                    @click="showDialog">Создать пост</my-button>
            <my-select
                    v-model="selectedSort"
                    :options="sortOptions"
            ></my-select>
        </div>
<!--        <input type="text" v-model.trim="modificatorValue">&lt;!&ndash; trim обрезает пробелы с начала и конца вводимой строки, number приводит к числу&ndash;&gt;-->
<!--        <my-button @click="fetchPosts" style="margin-right: 10px">Получить посты</my-button>-->

        <my-dialog v-model:show = "dialogVisible">
            <post-form
                    @create = "createPost"
            />
        </my-dialog>


        <post-list
                :posts = "sortedAndSearchedPosts"
                @remove = "removePost"
        />

    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
    components:{
        PostList, PostForm
    },

    data() {
        return {
            posts: [],
            dialogVisible:false,
            selectedSort:'',
            sortOptions:[
                {value:'title', name:'По названию'},
                {value:'body', name:'По содержимому'}
            ],
            searchQuery:'',
            page: 1,
            limit: 10,
            totalPages: 0,
        }
    },

    methods: {
        createPost(post) {
           this.posts.push(post);
           this.dialogVisible = false;
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog(){
            this.dialogVisible = true;
        },
        async fetchPosts(){
            try {

                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
                        {
                            params:{
                                _page:this.page,
                                _limit:this.limit,
                            }
                        });
                    this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit);
                    this.posts = response.data;

            }
            catch (e) {
                alert('Ошибка!');
            }
        },
        changePage(pageNumber){
            this.page = pageNumber;
        }
    },
    mounted(){
        this.fetchPosts();
    },
    computed: {
        sortedPost(){
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortedAndSearchedPosts(){
            return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        page(){
            this.fetchPosts();
        }
    }
    // watch:{
    //     selectedSort(newValue){
    //         this.posts.sort((post1, post2) =>{
    //             return post1[newValue]?.localeCompare(post2[newValue])
    //         })
    //     }
    // }

}


</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app{
        padding: 20px;
    }

    .app__btns{
        display: flex;
        justify-content: space-between;
        margin:15px 0;
    }
    .page__wrapper{
        display: flex;
        margin-top: 15px;
    }
    .page{
        border: 1px solid black;
        padding: 10px;
        margin-right: 5px;
    }

    .current_page{
        border: 2px solid green;
    }

</style>