import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showFooter: true,
      keepAlive: true,
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop/Shop.vue'),
    children: [
      {
        path: '/shop/goods',
        name: 'ShopGoods',
        component: () => import(/* webpackChunkName: "about" */ '../views/Shop/ShopGoods.vue')
      },
      {
        path: '/shop/rate',
        name: 'Rate',
        component: () => import(/* webpackChunkName: "about" */ '../views/Shop/Rate.vue')
      },
      {
        path: '/shop/info',
        name: 'Info',
        component: () => import(/* webpackChunkName: "about" */ '../views/Shop/Info.vue')
      },
      {
        path: '/',
        redirect: '/shop/goods'
      }
    ]
  },
  {
    path: '/searchlocal',
    name: 'SearchLocal',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchLocal.vue')
  },
  {
    path: '/searchshops',
    name: 'SearchShops',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchShops.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderDetail.vue')
  },
  {
    path: '/addresslist',
    name: 'AddressList',
    component: () => import(/* webpackChunkName: "about" */ '../views/Address/AddressList.vue'),
    // meta:{
    //   keepAlive: true,
    // }
  },
  {
    path: '/addaddress',
    name: 'AddAddress',
    component: () => import(/* webpackChunkName: "about" */ '../views/Address/AddAddress.vue'),
    meta:{
      keepAlive: true,
    }
  },
  {
    path: '/editaddress',
    name: 'EditAddress',
    component: () => import(/* webpackChunkName: "about" */ '../views/Address/EditAddress.vue'),
    meta:{
      keepAlive: true,
    }
  },
  {
    path: '/paymentorder',
    name: 'PaymentOrder',
    component: () => import(/* webpackChunkName: "about" */ '../views/pay/PaymentOrder.vue')
  },
  {
    path: '/scan',
    name: 'Scan',
    component: () => import(/* webpackChunkName: "about" */ '../views/pay/Scan.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
