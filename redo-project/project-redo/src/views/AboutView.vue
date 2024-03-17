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
    <div>
      <image-component
  v-if="isLoggedIn"
  :src="require('../assets/02.jpg')"
  alt="Image description"
  title="Title of Image"
/>

  </div>
  </div>
</template>

<script>
import ImageComponent from '../components/ImageComponent.vue';

export default {
  components: {
    ImageComponent
  },
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
