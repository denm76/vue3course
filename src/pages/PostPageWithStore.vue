<template>
    <div>
        <h1>{{$store.state.post.limit}}</h1>
<!--        <h1>Страница с постами</h1>-->
<!--        <my-input-->
<!--                v-model="searchQuery"-->
<!--                v-focus-->
<!--                placeholder="Поиск..."></my-input>-->
<!--        <div class="app__btns">-->
<!--            <my-button-->
<!--                    @click="showDialog">Создать пост</my-button>-->
<!--            <my-select-->
<!--                    v-model="selectedSort"-->
<!--                    :options="sortOptions"-->
<!--            ></my-select>-->
<!--        </div>-->
<!--        &lt;!&ndash;        <input type="text" v-model.trim="modificatorValue">&lt;!&ndash; trim обрезает пробелы с начала и конца вводимой строки, number приводит к числу&ndash;&gt;&ndash;&gt;-->
<!--        &lt;!&ndash;        <my-button @click="fetchPosts" style="margin-right: 10px">Получить посты</my-button>&ndash;&gt;-->

<!--        <my-dialog v-model:show = "dialogVisible">-->
<!--            <post-form-->
<!--                    @create = "createPost"-->
<!--            />-->
<!--        </my-dialog>-->

<!--        <post-list-->
<!--                :posts = "sortedAndSearchedPosts"-->
<!--                @remove = "removePost"-->
<!--        />-->
        <!--        <div class="page__wrapper">-->
        <!--            <div-->
        <!--                    v-for="pageNumber in totalPages"-->
        <!--                    :key="pageNumber"-->
        <!--                    class="page"-->
        <!--                    :class="{-->
        <!--                                'current_page': page === pageNumber-->
        <!--                            }"-->
        <!--                    @click="changePage(pageNumber)"-->
        <!--            >-->
        <!--                {{ pageNumber }}-->
        <!--            </div>-->
        <!--        </div>-->


        <div v-intersection="loadMorePosts" class="observer">

        </div>

    </div>
</template>

<script>
    import PostForm from "@/components/PostForm";
    import PostList from "@/components/PostList";
    import axios from "axios";

    export default {
        components:{
            PostList, PostForm,
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
            // changePage(pageNumber){
            //     this.page = pageNumber;
            //     this.fetchPosts();
            // }
        },
        mounted(){
            //this.fetchPosts();
            //логика отслеживания достижения конца страницы(Intersection Observer API)
            //console.log(this.$refs.observer);
        },
        computed: {

        },
        // watch: {
        //     // page(){
        //     //     this.fetchPosts();
        //     // }
        // }
        watch:{
            selectedSort(newValue){
                this.posts.sort((post1, post2) =>{
                    return post1[newValue]?.localeCompare(post2[newValue])
                })
            }
        }

    }

</script>

<style>
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
        cursor:pointer;
    }

    .current_page{
        border: 2px solid green;
        background: blanchedalmond;
    }
    .observer{
        height: 30px;
    }
</style>