// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Other configurations...

  plugins: [
    './plugins/geocode.js' // Ensure the file extension matches your plugin file
  ],

  // Other configurations...
};


export default defineNuxtConfig({
  devtools: { enabled: true }
})
