<template>
  <div id="vue-frontend-app">
    <h2>Frontend App</h2>
    <p> it works!</p>

    <router-link to="/">Home</router-link>
    <router-link to="/profile">Profile</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
console.log("yessir")
</script>

<style>

</style>
