import Vue from 'vue';
/* eslint-disable import/no-extraneous-dependencies */
import hljs from 'vue-hljs';
import 'highlight.js/styles/github.css';
/* eslint-enable import/no-extraneous-dependencies */
import App from './App.vue';
import '@/styles/default.less';

Vue.config.productionTip = false;

Vue.use(hljs);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
