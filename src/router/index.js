import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyWorks from '../views/MyWorks.vue'
import MyBlog from '../views/MyBlog.vue'
import BlogDetail from '../views/BlogDetail.vue'
import WorksDetail from '../views/WorksDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    component: MyWorks
  },
  {
    path: '/blog',
    name: 'blog',
    component: MyBlog
  },
  {
    path: '/blog/:id',
    name: 'blogdetail',
    component: BlogDetail
  },
  {
    path: '/works/:id',
    name: 'worksdetail',
    component: WorksDetail
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
