<template>
    <div class="index">
      <h1 v-if="isLoggedIn">Welcome back, user!</h1>
      <h1 v-else>Please log in to continue.</h1>
      <button v-if="!isLoggedIn" @click="login">Login</button>
       <!-- Image gallery -->
       <div v-if="isLoggedIn">
        <h2>Your Images</h2>
        <div v-for="(image, index) in computedImages" :key="index">
      <img :src="image" :alt="'Image ' + (index + 1)">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false,
        images: [
          '02.jpg',
          'bizlaboption2.jpg',
          'footer-logo-light.png',
          // more image filenames
        ]
      }
    },
    computed: {
      computedImages() {
        return this.images.map(image => require(`@/assets/${image}`));
      }
    },
    methods: {
      login() {
        this.isLoggedIn = true;
      }
    }
  }
  </script>
  