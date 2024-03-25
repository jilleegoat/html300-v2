// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com', // example base URL
  },
  plugins: [
    './plugins/geocode.js' // Ensure the file extension matches your plugin file
  ],

  // Other configurations...
};