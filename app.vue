<template>
  <div>
    <nav>
    <NuxtLink to="/HomeView">Home</NuxtLink> |
    <NuxtLink to="/AboutView">About</NuxtLink>
    <NuxtLink to="/InfoPage">Info</NuxtLink>
    <NuxtLink to="/ResourcePage">Resources</NuxtLink>
    <NuxtLink to="/">Index</NuxtLink>
  </nav>
  <router-view/>
<FooterBar/>
</div>
</template>
<script>
import FooterBar from '../components/FooterBar.vue';
export default {
  components: {
    FooterBar
  }
};

</script>
<style>
@import './styles/styles.scss';
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