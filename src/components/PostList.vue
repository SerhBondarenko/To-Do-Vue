<template>
<div class="post" v-for="post in posts"> 
<div> <strong> Назва: {{post.title}} </strong> </div>
<div> <strong> Опис: {{post.body}} </strong> </div>
</div>
</template>

<script>
export default {
    props: {
        posts: Array,
        //required: true,
    }
}
</script>

<style scoped >
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}

</style>