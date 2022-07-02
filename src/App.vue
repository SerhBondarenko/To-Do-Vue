<template>
<div class="app" >
<post-form  @create="createPost" />
<post-list v-bind:posts="posts"/>
</div>
</template>

<script>
import PostForm  from "./components/PostForm.vue"
import PostList  from "./components/PostList.vue"

export default {
components: {
PostForm, PostList
},

    data() { 
        return{
    posts: [
            {id: 1, title: 'Javascript 0', body: 'Опис поста'},
            {id: 2, title: 'Javascript 1', body: 'Опис поста'},
            {id: 3, title: 'Javascript 2', body: 'Опис поста'},
            {id: 4, title: 'Javascript 3', body: 'Опис поста'},
    ],
        }
    },
    methods: {
       createPost(post) {
        this.posts.push(post);
console.log(post);

        /*
        const newPost = {id: Date.now(),
        title: this.title,
        body: this.body,
        }
        this.posts.push(newPost);
        this.title = "";
        this.body = "";
        */
       },
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



</style>
