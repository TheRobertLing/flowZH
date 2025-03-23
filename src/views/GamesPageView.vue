<script setup lang="ts">
import GamesDescriptionCardComponent from '@/components/GamesDescriptionCardComponent.vue';
import { gameMetaInfoList } from '@/data/games';
</script>

<template>

  <div class="bg-base-200 flex justify-center gap-8">
    <!-- Left Sidebar for future content-->
    <!-- <div class="border grow-1 min-h-screen">
      Left
    </div> -->

    <!-- Main Content -->
    <div class="flex flex-col max-w-352 items-center bg-base-300 grow-3 min-h-screen text-center mt-8 mb-8 rounded-xl p-8">
      <h2 class="text-xl font-semibold mb-8 select-none">ZiFlow's Curated Games</h2>

      <!-- Game Cards -->
      <div class="grid-container grid gap-8 mb-8 max-w-7xl">
        <div v-for="item, index in gameMetaInfoList" :key="index">
          <GamesDescriptionCardComponent
          :data="item"
          ></GamesDescriptionCardComponent>
        </div>
      </div>
    </div>

    <!-- Right Sidebar for future content -->
    <!-- <div class="border grow-1 min-h-screen">
      Right
    </div> -->
  </div>

</template>

<style scoped>
.grid-container {
  grid-template-columns: repeat(auto-fit, 1fr);
}

@media (min-width: 40rem) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 64rem) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
