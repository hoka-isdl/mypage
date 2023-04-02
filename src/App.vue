<template>
  <div>
    <HomeHeader />
    <router-view />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
export default {
  components: {
    HomeHeader,
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
