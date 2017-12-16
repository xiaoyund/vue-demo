export const routes = [
  {
    path: '/',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/a',
    component: () => import('../components/index.vue')
  },
  {
    path: '/b',
    component: () => import('../components/index2.vue')
  },
  {
    path: '/c',
    component: () => import('../components/index3.vue')
  },
  {
    path: '/d',
    component: () => import('../components/index4.vue')
  },
  {
    path: '/e',
    component: () => import('../components/index5.vue')
  }
]

