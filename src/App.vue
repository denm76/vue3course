<template>
    <button @click="addLike">Like</button>&nbsp
    <button @click="addDizLike">Dizlike</button>
    <div>Кол-во лайков: <strong>{{ likes }}</strong></div>
    <div>Кол-во дизлайков: <strong>{{ dizlikes }}</strong></div>
</template>

<script>

export default {
    data(){
        return {
            likes:0,
            dizlikes:0,
        }
    },
    methods: {
        addLike(){
            this.likes +=1;
        },
        addDizLike(){
            this.dizlikes +=1;
        }
    }
}

</script>

<style scoped>

</style>