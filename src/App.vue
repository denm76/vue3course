<template>
    <div class="app">
        <h1>Страница с постами</h1>
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
                :posts = "posts"
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
            posts: [{}],
            dialogVisible:false,
            selectedSort:'',
            sortOptions:[
                {value:'title', name:'По названию'},
                {value:'body', name:'По содержимому'}
            ]
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

                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;

            }
            catch (e) {
                alert('Ошибка!');
            }
        },
    },
    mounted(){
        this.fetchPosts();
    }

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


</style>