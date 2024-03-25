
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Home Page"/>
    <GeoCode />
    <FooterBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterBar from '@/components/FooterBar.vue'
import GeoCode from '@/components/GeoCode.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, FooterBar, GeoCode
  }
}
</script>
<style>
</style>
