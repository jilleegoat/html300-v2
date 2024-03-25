<template>
  <div class="resourcepage">
    <h1>This the Resource Page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'resourcepage',
  components: {
    HelloWorld, FooterBar
}}
</script>