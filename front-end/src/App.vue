<template>
  <div id="app">
    <!--Navigation: Dropdown menu -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/">
        <a class="navbar-brand">Home</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav" >
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link">About</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart">
              <a class="nav-link">Cart</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="title-bar">
      <!--    <h1>LILIES DESIGNS</h1>-->
      <div class="header-background">
        <h1>Lilies Designs - Art Store </h1>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <router-link to="/admin">Admin | </router-link>
      <a class="button" href="https://github.com/ls88888/creative_project_4">GitHub</a>

    </div>

  </div>
</template>

<script>
  // import Home from "@/views/Home";

  export default {
    // name: 'App',
    // components: {
    //   Home
    // }
  }
</script>

<style>
  /*#app {*/
  /*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
  /*}*/

  /*mobile */
  .homepage-grid {
    display: grid;
    grid-template: 1fr / 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    text-align: center;
  }

  /*desktop*/
  @media only screen and (min-width: 1000px) {
    .homepage-grid {
      grid-template: auto / 1fr 1fr 1fr;
    }
  }

  /*mobile */
  .homepage-footer-grid {
    display: grid;
    grid-template: 1fr / 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    text-align: center;
  }

  /*desktop*/
  @media only screen and (min-width: 1000px) {
    .homepage-footer-grid {
      padding-left: 30px;
      grid-template: auto / 2fr 1fr;
    }
  }

  img {
    width: 100%;
    display: block;
    margin: auto;
    background-color: black;
  }

  .black-and-center {
    margin: auto;
    background-color: black;
  }

  .title-bar {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
    text-align: center;
    color: greenyellow;
  }

  .header-background {
    background-image: url("img/BlackStainedGlass.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 75px;
    padding-bottom: 75px;
  }

  h1 {
    font-family: Papyrus;
    font-size: 80px;
    opacity: 1;
    background-color: black;
    padding-top: 20px;
  }

  h2 {
    text-align: center;
    font-family: Papyrus;
    background-color: black;
    color: greenyellow;
    padding-top: 15px;
  }

  h3 {
    font-weight: bold;
    font-size: large;
  }

  body {
    padding-bottom: 90px;
  }

  footer {
    /*clear: both;*/
    /*position: relative;*/
    height: 100px;
    /*margin-top:auto;*/
    position: fixed;
    text-align: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.0rem;
    padding-bottom: 2.5rem;

    /*background-color: #404040;*/
    /*color: greenyellow;*/
    /*text-align: center;*/
  }
</style>
