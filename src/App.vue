<template>
<div>
<div class="post"> 
    <div> <strong>Назва:</strong> Пост про JavaScript </div>
    <div> <strong>Опис:</strong> JavaScript універсальна мова програмування </div>
</div>
</div>
</template>

<script>
export default {
    data() { 
        return{
            likes: 0,
            dislikes: 2,
        }
    },
    methods: {
        addLike() {this.likes += 1},
        addDislike() {this.dislikes += 1},
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>