import Vue from 'vue';
import Router from 'vue-router';
import HomeLayout from '../components/homeLayout.vue';
import Home from '@/pages/home';
import Login from '@/pages/login';
import MeterList from '@/pages/meterList';
import UserCenter from '@/pages/userCenter';
import MeterListTop from '@/parts/meterListTop';

Vue.use(Router);

export default new Router({
  // mode: 'history', //手机不支持
  routes: [
    {
      path: '/home',
      name: 'homeLayout',
      component: HomeLayout,
      children: [
        {
          path: 'index',
          name: 'home',
          components: {
            default: Home
          }
        },
        {
          path: 'meterList',
          name: 'meterList',
          components: {
            default: MeterList,
            top: MeterListTop
          }
        },
        {
          path: 'userCenter',
          name: 'userCenter',
          components: {
            default: UserCenter
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // { path: '/', redirect: '/test' }
    { path: '/', redirect: '/home/index' }
    // { path: '*', redirect: '/404', hidden: true }
  ]
});
