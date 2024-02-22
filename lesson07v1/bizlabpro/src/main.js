import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


createApp(App).use(router).mount('#app')
