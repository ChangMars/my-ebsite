import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardLayout from '../layout/dashboard/DashboardLayout.vue';


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    name: '',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
      },
      {
        path: '/userprofile',
        name: 'userprofile',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue')
      },
    ]
    // redirect: '/dashboard',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
