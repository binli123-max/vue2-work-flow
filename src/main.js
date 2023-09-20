import Vue from 'vue';
import App from './App.vue';
import LxjUI from './components';

Vue.config.productionTip = false;

Vue.use(LxjUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
