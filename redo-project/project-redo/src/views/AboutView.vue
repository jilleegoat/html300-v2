<template>
  <div class="about">
    <h1 v-if="isLoggedIn">Welcome back, user!</h1>
    <h1 v-else>Please log in to continue.</h1>
    <button v-if="!isLoggedIn" @click="login">Login</button>

    <!-- Image gallery -->
    <div v-if="isLoggedIn" class="image-gallery">
      <h2>Your Images</h2>
      <div v-for="(image, index) in computedImages" :key="index" class="image-wrapper">
        <image-component
          :src="image"
          :alt="'Image ' + (index + 1)"
          :title="'Image ' + (index + 1)"
        />
      </div>
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

<style>
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}

.image-wrapper {
  margin: 1rem;
  max-width: 500px; /* Adjust this value to control the size of images */
}

.image-wrapper img {
  width: 100%;
  height: auto; /* This maintains the aspect ratio of the images */
  object-fit: cover; /* This ensures that the images cover the area without stretching */
}
</style>
