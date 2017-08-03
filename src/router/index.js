import Vue from 'vue';
import Router from 'vue-router';
import HomeLayout from '../components/homeLayout.vue';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Test from '@/pages/test';
import AdjustMeter from '@/pages/adjustMeter';
import UserCenter from '@/pages/userCenter';
import adjustMeterTop from '@/parts/adjustMeterTop';

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
          path: 'adjustMeter',
          name: 'adjustMeter',
          components: {
            default: AdjustMeter,
            top: adjustMeterTop
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
