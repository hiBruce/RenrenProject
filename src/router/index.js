import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/home')
    },{
      path: '/info',
      name: 'info',
      component:() => import('@/components/infomation/info'),
    },
    {
      path:"/info/:id",
      name:"infoDetail",
      component:() => import('@/components/infomation/detail'),
    },
    {
      path:"/sns/:id",
      name:"snsAcitivity",
      component:() => import('@/components/infomation/snsActivity'),
    },
    {
      path:"/filmstore",
      name:"filmstore",
      component:() => import('@/components/filmStore/index'),
    },
    {
      path:"/filmstore/:id",
      name:"filmDetail",
      component:() => import('@/components/filmStore/detail'),
    },
    {
      path:"/filmstore/episode/:id",
      name:"episode",
      component:() => import('@/components/filmStore/episode2'),
    }
  ]
})
