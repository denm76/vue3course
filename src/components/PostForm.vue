<template>
        <form @submit.prevent>
            <h4>Создание поста</h4>
            <my-input
                    v-model="post.title"
                    type="text"
                    placeholder="Название"
            />
            <my-input
                    v-model="post.body"
                    type="text"
                    placeholder="Описание"
            />
            <my-button class="form-btn" @click="createPost">Создать</my-button>
        </form>
</template>

<script>
    import MyInput from "./UI/MyInput";
    export default {
        name: "PostForm",
        components: {MyInput},
        data(){
            return {
                post: {
                    title:'',
                    body:''
                }
            }
        },
        methods:{
            createPost() {
                this.post.id = Date.now();
                this.$emit('create', this.post);
                this.post = {
                    title:'',
                    body:''
                }
            }
        }
    }
</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
    }



    .form-btn{
        align-self: flex-end;
        margin-top: 15px;
    }


</style>