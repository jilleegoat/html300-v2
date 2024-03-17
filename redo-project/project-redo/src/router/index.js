import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue'; // Assuming you need to import this as well
import InfoPage from '../views/InfoPage.vue';
import ResourcePage from '../views/ResourcePage.vue'; // Import statement for ResourcePage

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // Lazy-loaded route for AboutView
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/infopage',
    name: 'infopage',
    component: InfoPage,
  },
  {
    path: '/resourcepage', // Corrected the path here
    name: 'resourcepage',
    component: ResourcePage, // Now ResourcePage is correctly imported and used
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;