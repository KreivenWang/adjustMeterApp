import Vue from 'vue';
import Router from 'vue-router';
import HomeLayout from '../components/homeLayout.vue';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Test from '@/pages/test';
import AdjustMeter from '@/pages/adjustMeter';
import UserCenter from '@/pages/userCenter';

Vue.use(Router);

export default new Router({
  // mode: 'history', //手机不支持
  routes: [
    // { path: '/home', redirect: '/home/index' },
    {
      path: '/home',
      name: 'homeLayout',
      component: HomeLayout,
      children: [
        {
          path: 'index',
          name: 'home',
          component: Home
        },
        {
          path: 'adjustMeter',
          name: 'adjustMeter',
          component: AdjustMeter
        },
        {
          path: 'userCenter',
          name: 'userCenter',
          component: UserCenter
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    // { path: '/', redirect: '/test' }
    { path: '/', redirect: '/home/index' }
    // { path: '*', redirect: '/404', hidden: true }
  ]
});
