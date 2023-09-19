import Vue from 'vue';
import App from './App.vue';
import store from './store';
import LxjUI from './components';

Vue.config.productionTip = false;
Vue.use(LxjUI);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
