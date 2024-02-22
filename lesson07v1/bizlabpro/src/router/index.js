import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import AboutUs from '@/components/AboutUs.vue';
import Branding from '@/components/Branding.vue';
import LocalResources from '@/components/LocalResources.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: 'aboutus', name: 'AboutUs', component: AboutUs },
    { path: 'branding', name: 'Branding', component: Branding },
    { path: '/localresources', name: 'LocalResources', component: LocalResources },
    // Add more routes as needed
  ],
});

export default router;
