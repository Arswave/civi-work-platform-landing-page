<script setup>
import introV from '../components/introV.vue'
import homeJobPart from '../components/homeJobPart.vue'
import footerBar from '../components/footerBar.vue'
import popularBar from '../components/popularBar.vue'
</script>

<template>
  <!-- intro -->
  <introV />
  <!-- feature job and sponsor -->
  <homeJobPart />
  <!-- popular bar -->
  <popularBar />
  <!-- footer -->
  <footerBar />
</template>

<style type="less" lang="less">
@import '../assets/index';
</style>
