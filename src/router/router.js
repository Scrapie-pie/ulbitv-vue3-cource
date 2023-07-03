import Main from '@/pages/Main'
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import PostIdPage from "@/pages/PostIdPage";
import About from "@/pages/About";


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },

]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;