<script setup lang="ts">
import NavigationBarComponent from './components/NavigationBarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <NavigationBarComponent></NavigationBarComponent>
  <RouterView></RouterView>
  <FooterComponent></FooterComponent>
</template>

<style scoped>
</style>
