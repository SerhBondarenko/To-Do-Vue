<template>
<div class="post"> 
    <div>
    <div>{{post.id}}</div>
<div> <strong> Назва: {{post.title}} </strong> </div>
<div> <strong> Опис: {{post.body}} </strong> </div>
</div>
<div class="post_btns">
    <my-button @click="$router.push(`/posts/${post.id}`)"
    > Відкрити
    </my-button>
    <my-button @click="$emit('remove', post)"
    >
    Видалити</my-button>
</div>
    </div>

</template>

<script>
//import MyButton from './UI/myButton.vue';
export default {
    /* components: {
        MyButton
    },
    */
    props: {
        post: {
        type: Object,
        required: true,
        }
    }
}
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post_btns{
    display: flex;
}

</style>