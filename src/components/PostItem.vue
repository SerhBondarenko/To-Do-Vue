<template>
<div class="post"> 
    <div>
<div> <strong> Назва: {{post.title}} </strong> </div>
<div> <strong> Опис: {{post.body}} </strong> </div>
</div>
<div class="post_btns">
    <button>Видалити</button>
</div>
    </div>

</template>

<script>
export default {
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

</style>