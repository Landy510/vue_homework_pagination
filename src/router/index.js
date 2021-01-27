import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/components/DashBoard'
import Login from '@/components/pages/login'
import Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'login'
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'HelloWorld',
      component: DashBoard,
      meta: { requiresAuth: true },
      children:[
        {
          path:'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        }
      ]
    }
  ]
});

