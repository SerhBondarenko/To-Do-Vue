<template>
    <form @submit.prevent>
        <h4>Створення поста</h4>
         <input v-model="post.title" class="input" type="text" placeholder="Назва">
         <input v-model="post.body" class="input" type="text" placeholder="Опис">
         <my-button @click="createPost" class="btn" style="align-self: flex-end" >Створити</my-button>
    </form>

</template>

<script>
import MyButton from './UI/myButton.vue';
export default {
    components: {
        MyButton
    },
    data() {
        return {
            post: {
                title: "",
                body: "",
            }
        }
    },
    methods: {
        createPost() {
        this.post.id = Date.now();
        this.$emit("create", this.post)
        this.post = { 
            title: "",
            body: "",
            };
        this.body = "";
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}



.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top:15px;

}
</style>