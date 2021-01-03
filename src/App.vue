<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
}

  nav {
    display: flex;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: #eb7434;
    color: #fff;

    .navigation-logo {
      font-weight: bold;
      font-size: 32;
      color: #fff;
    }
    .navigation-user {
      font-weight: bold;
    }
  }
</style>
