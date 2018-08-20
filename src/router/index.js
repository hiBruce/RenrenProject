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
      path:"/filmstore",
      name:"filmstore",
      component:() => import('@/components/filmStore/index'),
    }
  ]
})
