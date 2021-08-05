<template>
    <div>
        <h3>Список пользователей</h3>
        <post-item
                v-for="post in posts"
                :post="post"
        />
    </div>
</template>

<script>
    import PostItem from "./PostItem";
    export default {
        name: "PostList",
        components: {PostItem},
        props:{
            posts: {
                type:Array,//что передаётся
                required:true //обязательный параметр
            }
        }
    }
</script>

<style scoped>
    .post{
        width:100%;
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>