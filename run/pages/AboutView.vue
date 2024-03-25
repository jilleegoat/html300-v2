<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

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
        import image1 from '@/assets/02.jpg';
        import image2 from '@/assets/bizlaboption2.jpg';
        import image3 from '@/assets/footer-logo-light.png';
        // import more images

        export default {
          data() {
            return {
              isLoggedIn: false,
              images: [
                image1,
                image2,
                image3,
                // more images
              ]
            }
          },
          computed: {
            computedImages() {
              return this.images;
            }
          },
          methods: {
            login() {
              this.isLoggedIn = true;
            }
          }
        }
      }
    },
    methods: {
      login() {
        this.isLoggedIn = true;
      }
    }
  }
</script>

<template>
    <div class="about">
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
  
  