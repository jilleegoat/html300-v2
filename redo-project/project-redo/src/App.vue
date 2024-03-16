<template>
  <div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/infopage">Info</router-link>
    <router-link to="/resourcepage">Resources</router-link>
  </nav>
  <router-view/>
<FooterBar/>
</div>
</template>
<script>
import FooterBar from '@/components/FooterBar.vue'; // Update the path if necessary

export default {
  components: {
    FooterBar //  FooterBar component
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

nav a {
  font-weight: bold;
  color: navy;
  padding: 2.5%;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>