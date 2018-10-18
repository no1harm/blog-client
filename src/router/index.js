import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/pages/Create/Create'
import Detail from '@/pages/Detail/Detail'
import Edit from '@/pages/Edit/Edit'
import Index from '@/pages/Index/Index'
import Login from '@/pages/Login/Login'
import My from '@/pages/My/My'
import Register from '@/pages/Register/Register'
import User from '@/pages/User/User'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/Create',
      component: Create
    },
    {
      path: '/Detail',
      component: Detail
    },
    {
      path: '/Edit',
      component: Edit
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/My',
      component: My
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/User',
      component: User
    }
  ]
})
