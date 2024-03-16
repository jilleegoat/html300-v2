<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FooterBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, FooterBar
  }
}
</script>
<style>
</style>
