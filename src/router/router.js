import Main from '@/pages/Main'
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage";
import PostIdPage from "@/pages/PostIdPage";
import About from "@/pages/About";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";


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
  {
    path: '/store',
    component: PostPageWithStore
  },
  {
    path: '/composition',
    component: PostPageCompositionApi
  },

]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;