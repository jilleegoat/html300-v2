<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" img src="/project-redo/src/assets/footer-logo-light.png" alt="Brand Logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="aboutus.html">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="localresources.html">Local Resources</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="index.html">Home</a>
                    <a class="dropdown-item" href="aboutus.html">About Us</a>
                    <a class="dropdown-item" href="blog.html">Blog</a>
                    <a class="dropdown-item" href="localresources.html">Local Resources</a>
                  </div></li></ul></div>
    </nav>
  </template>
  
  <script>
// Import your image
export default {
  name: 'NavBar',
};
</script>

  
  <style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #444;
    box-sizing: border-box;
    padding-right: 5%;
    padding-left: 10%;
    padding-bottom: 2%;
  }

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 20px; 
}
img {
  border: 0;
}
  </style>