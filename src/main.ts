import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';

Vue.use(element);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
