<script setup lang="ts">
import LoadingBarComponent from '@/components/LoadingBarComponent.vue';
import PTSettingsComponent from '@/components/pinyin-typer/PTSettingsComponent.vue';

import { onMounted, ref } from 'vue';

type State = "settings" | "loading" | "game" | "results";

const state = ref<State>("loading")
const characters = ref(null)

const fetchGameData = async (data: object) => {
  console.log("hi this works")
  console.log(data)

  // Switch to loading screen as data is fetched from backend
  state.value = 'loading'

  // Fetch data from backend
  try {
    const response = await fetch('');
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

  } catch (error) {
    console.error(error.message);
  } finally {
    state.value = 'game'
  }
}

onMounted(() => {
  // Mimick loading for a few seconds
  setTimeout(() => {
    state.value = "settings"
  }, 3000);
})
</script>

<template>
  <div class="bg-base-200 flex justify-center gap-8">
    <!-- Left Sidebar for future content-->
    <!-- <div class="border grow-1 min-h-screen">
      Left
    </div> -->

    <!-- Main Content -->
    <div
      class="flex flex-col max-w-352 items-center bg-base-300 grow-3 min-h-screen mt-8 mb-8 rounded-xl p-8"
    >
      <!-- Game Window -->
      <div class="mb-8 w-full bg-secondary flex justify-center items-center aspect-video">
        <PTSettingsComponent v-if="state === 'settings' " @start-game="fetchGameData"/>
        <LoadingBarComponent v-else-if="state === 'loading'"/>
      </div>

      <div class="divider"></div>

      <div class="w-full">
        <!-- Title -->
        <h3 class="text-2xl font-bold mb-8">Pinyin Typer</h3>

        <!-- Description -->
        <h4 class="text-xl font-bold">Description</h4>
        <p class="leading-8">Here is a generic description</p>

        <!-- Instructions -->
        <h4 class="text-xl font-bold">Instructions</h4>
        <p class="leading-8">Here is a generic instruction</p>

        <!-- Demonstration Video -->
        <h4 class="text-xl font-bold">Demonstration</h4>
        <p class="leading-8">Here is a demonstration video</p>
      </div>
    </div>

    <!-- Right Sidebar for future content -->
    <!-- <div class="border grow-1 min-h-screen">
      Right
    </div> -->
  </div>
</template>

<style scoped></style>
