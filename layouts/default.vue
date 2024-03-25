<template>
  <div>
    <header>
      <NavBar/>
    </header>
    <main>
      <NuxtPage />
    </main>
    
    <footer>
     <FooterBar />
    </footer>
  </div>
</template>

<style>
  @import '../styles/styles.scss';
  header {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  </style>
  <script>
  export default {
    // Component options
  }
  </script>
  