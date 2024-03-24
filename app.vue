<template>
  <div>
  <NavBar/>
    <nav>
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/infopage">Info</NuxtLink>
    <NuxtLink to="/resourcepage">Resources</NuxtLink>
    <NuxtLink to="/index">Index</NuxtLink>
  </nav>
  <router-view/>
<FooterBar/>
</div>
</template>
<script>
import FooterBar from '../components/FooterBar.vue';
import NavBar from '../components/NavBar.vue';
export default {
  components: {
    FooterBar, NavBar
  }
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>