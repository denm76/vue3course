<template>
    <div class="post" v-for="post in posts">
        <div><strong>Название:</strong>{{ post.title }}</div>
        <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
</template>

<script>
    export default {
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