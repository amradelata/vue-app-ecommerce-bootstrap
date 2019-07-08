import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import admin from './views/admin.vue'
import overview from './views/overview.vue'
import Orders from './views/Orders.vue'
import Products from './views/Products.vue'
import profile from './views/profile.vue'
import checkout from './views/checkout.vue'
import {fb} from './firebase'





Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: { requiresAuth: true },
      children: [                     //Nested Routes
        {
          path: "overview",
          component: overview
        },
        {
          path: "products",
          component: Products
        },
        {
          path: "profile",
          component: profile
        },
        {
          path: "orders",
          component: Orders
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],

  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})

router.beforeEach((to, from, next) => {   ///you can't go to the admin without sign up

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;