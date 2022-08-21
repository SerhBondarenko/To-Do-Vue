<template>
<div>
    <h1>Сторінка з постами</h1>
    <my-input
    v-model="searchQuery"
    placeholder="Пошук..."
    v-focus
    />
    <div class="app__btns" >
 <my-button @click="shovDialog">Створити пост</my-button>
 <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
<post-form  @create="createPost" />
    </my-dialog>
<post-list v-bind:posts="sortedAndSearchedPosts"
@remove="removePost"
v-if="!isPostLoading"
/>
<div v-else>Іде завантаження...</div>
<div v-intersection="loadMorePosts" class="observer"></div>
 <!--   <div class="page__wrapper">
<div v-for="pageNumber in totalPage" :key="pageNumber" class="page" :class="{'current-page': page === pageNumber}"
@click="changePage(pageNumber)"
>{{pageNumber}}</div>
</div>
-->
</div>
</template>

<script>
import PostForm  from "../components/PostForm.vue"
import PostList  from "../components/PostList.vue"
import MyButton from "../components/UI/myButton.vue";
import axios from "axios";
//import { computed } from "vue";
//import Button from "./components/UI/Button.vue"

export default {
components: {
    PostForm,
    PostList,
    MyButton,
},

    data() { 
        return{
    posts: [],
    dialogVisible: false,
    isPostLoading: false,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPage: 0,
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
   /*    changePage(pageNumber) {
this.page = pageNumber
       },*/
       async fetchPosts() {
try{
    this.isPostLoading = true;
const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
    params: {
        _page: this.page,
        _limit: this.limit,
    }
});
this.totalPage = Math.ceil(response.headers['x-total-count']/ this.limit)
this.posts = response.data;
console.log(response);
} catch(e) {
alert('Помилка')
    } finally {
        this.isPostLoading = false;
    }
},

       async loadMorePosts() {
try{
    this.page += 1;
const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
    params: {
        _page: this.page,
        _limit: this.limit,
    }
});
this.totalPage = Math.ceil(response.headers['x-total-count']/ this.limit)
this.posts = [...this.posts, ...response.data];
console.log(response);
} catch(e) {
alert('Помилка')
    }
} 
      
    },
     mounted() {
        this.fetchPosts();
console.log(this.$refs.observer);
     /*   const options = {
    rootMargin: '0px',
    threshold: 1.0
}
const callback = (entries, observer) => {
    //console.log(entries)
    if(entries[0].isIntersecting && this.page < this.totalPage) {
        console.log('Перетин')
        this.loadMorePosts()
    }

};
const observer = new IntersectionObserver(callback, options);
observer.observe(this.$refs.observer);*/
       },
       computed: {
sortedPost() {
    return [...this.posts].sort((post1, post2) => {
              return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])  
            })
},
sortedAndSearchedPosts() {
    return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
}
       },
       watch: {
       //page() {
      //  this.fetchPosts()
      // }
       }
}
</script>

<style>
.app__btns{ 
   margin: 15px 0;
   display: flex; 
   justify-content: space-between;
}
.page__wrapper{
    display: flex;
    margin-top: 15px;
}
.page {
    display: flex;
    border: 1px solid black;
    padding: 10px;
}
.current-page {
   border: 2px solid teal;
}
.observer{
    height: 30px;
    background: green;
}

</style>
