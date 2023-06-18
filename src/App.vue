<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/navBar.vue'
</script>

<template>
  <!-- nav bar menu and info bar -->
  <navBar />
  <!-- body  -->
  <main>
    <RouterView />
  </main>
</template>
