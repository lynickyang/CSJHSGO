import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewEditNote from '../views/ViewEditNote.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: "/:id",
      name: "item",
      component: () => import("../views/ItemDetail.vue"),
      props: (route) => ({ id: route.params.id }),
    },
    {
      path: '/editNote/:id',
      name: 'edit-note',
      component:ViewEditNote
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue')
    }
  ]
})

export default router
