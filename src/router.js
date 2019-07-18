import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import admin from './views/admin.vue'
import overview from './views/overview.vue'
import Orders from './views/Orders.vue'
import Products from './views/Products.vue'
import profile from './views/profile.vue'
import cart from './views/cart.vue'
import checkOut from './views/checkOut.vue'
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
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/checkOut',
      name: 'checkOut',
      component: checkOut
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
      path: '/product/:id',
      name: 'singleBage',
      component: () => import('./views/singleBage.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      // route level code-splitting
      // this generates a separate chunk (shop.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "shop" */ './views/shop.vue')
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
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