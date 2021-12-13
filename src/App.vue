<template>
  <div id="app">
    <h1>Flix</h1>
    <div id="nav">
      <router-link to="/media" v-if="isLoggedIn()"> Movies and TV | </router-link> 
      <router-link to="/reviews" v-if="isLoggedIn()"> Reviews | </router-link> 
      <router-link to="/reviews/new" v-if="isLoggedIn()">Create Review |</router-link> 
      <router-link to="/signup" v-if="!isLoggedIn()">Signup | </router-link> 
      <router-link to="/login" v-if="!isLoggedIn()">Login </router-link> 
      <router-link to="/logout" v-if="isLoggedIn()"> Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

