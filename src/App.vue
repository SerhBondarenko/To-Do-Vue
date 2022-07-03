<template>
<div class="app" >
    <h1>Сторінка з постами</h1>
    <div class="app__btns" >
 <my-button @click="shovDialog">Створити пост</my-button>
 <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
<post-form  @create="createPost" />
    </my-dialog>
<post-list v-bind:posts="posts"
@remove="removePost"
v-if="!isPostLoading"
/>
<div v-else>Іде завантаження...</div>
</div>
</template>

<script>
import PostForm  from "./components/PostForm.vue"
import PostList  from "./components/PostList.vue"
import MyButton from "./components/UI/myButton.vue";
import axios from "axios";

export default {
components: {
    PostForm,
    PostList,
    MyButton
},

    data() { 
        return{
    posts: [],
    dialogVisible: false,
    isPostLoading: false,
    selectedSort: "",
    sortOptions: [
        {value: 'title', name: 'По назві'},
        {value: 'body', name: 'По вмісту'},
    ],
        }
    },
    methods: {
       createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
console.log(post);
       },
       removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
       },
       shovDialog() {
        this.dialogVisible = true;
       },
       async fetchPosts() {
try{
    this.isPostLoading = true;
const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
this.posts = response.data;
console.log(response);
} catch(e) {
alert('Помилка')
    } finally {
        this.isPostLoading = false;
    }
} 
      
    },
     mounted() {
        this.fetchPosts();
       },
       watch: {
        selectedSort(newValue) {
            console.log(newValue)
        }
       }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px
    }
.app__btns{ 
   margin: 15px 0;
   display: flex; 
   justify-content: space-between;
}


</style>
