<template>
  <header>
    <navBar></navBar>

  </header>
  <RouterView />

</template>


<script setup lang="ts">
import navBar from "@/components/NavBar.vue";
import {RouterView} from "vue-router";
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Metrophobic&display=swap');
</style>
