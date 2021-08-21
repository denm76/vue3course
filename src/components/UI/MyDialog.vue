<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div class="dialog__content" @click.stop> <!--Предотвращение закрытия диалогового окна по клику на него(stop.propagation)-->
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import toggleMixin from "../../mixins/toggleMixin";

    export default {
        name: "my-dialog",
        mixins: [toggleMixin],
    }
</script>

<style scoped>
    .dialog{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0, 0.5);
        position: fixed;
        display: flex;
    }

    .dialog__content{
        min-height: 50px;
        min-width: 300px;
        margin: auto;
        background: white;
        border-radius: 15px;
        padding: 20px;
    }
</style>