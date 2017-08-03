// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import YDUI from 'vue-ydui';
// import axios from 'axios';
import router from './router';
import store from './store';
import directives from './directives';
import lang from './assets/js/lang';
import Layout from './components/layout';
//import 'vue-ydui/dist/ydui.rem.css'; /*在index.html中直接引入了， 注：需要将//打头的字符图标链接改为http://，否则手机上不显示 使用px的话：import 'vue-ydui/dist/ydui.px.css'; */

Vue.config.productionTip = false;
Vue.use(YDUI);
// Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //not Router!
  lang,
  store,
  directives,
  template: '<Layout/>',
  components: { Layout }
});
