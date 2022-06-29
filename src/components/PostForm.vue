<template>
    <form @submit.prevent>
        <h4>Створення поста</h4>
         <input v-bind:value="title" @input="title = $event.target.value" class="input" type="text" placeholder="Назва">
         <input v-bind:value="body"  @input="body = $event.target.value" class="input" type="text" placeholder="Опис">
         <button class="btn"  >Створити</button>
    </form>

</template>

<script>

</script>

<style>
.form {
    display: flex;
    flex-direction: column;
}

.btn {
    margin-top:15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}

.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top:15px;

}
</style>