<template>
  <router-view>
    <main-screen></main-screen>
    <math-main></math-main>
  </router-view>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
    }
  }
}
</script>

<style>
  @import "../node_modules/vuetify/dist/vuetify.min.css";
</style>
