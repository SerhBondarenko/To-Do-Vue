import Main from "../pages/Main.vue";
import PostPage from "../pages/PostPage.vue";
import About from "../pages/About.vue";
import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
];


const router = createRouter ({
    routes,
    history: createWebHashHistory()
    //history: createWebHashHistory(process.env.Base_URL)
})

export default router;