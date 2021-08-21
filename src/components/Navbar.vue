<template>
    <div class="navbar">
        <div class="logo" @click="$router.push('/')"><h3>Vue 3</h3></div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')">О сайте</my-button>
            <my-button @click="$router.push('/store')">Store</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    .logo{
        cursor: pointer;
    }
    .navbar{
        height: 50px;
        background-color:teal;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .navbar__btns{
        margin-left: auto;
    }
    .navbar__btns button{
        border-radius: 5px;
        margin-left: 5px;
        cursor:pointer;
    }
</style>