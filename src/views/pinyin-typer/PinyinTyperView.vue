<script setup lang="ts">
import LoadingBarComponent from '@/components/LoadingBarComponent.vue'
import PTCounterComponent from '@/components/pinyin-typer/PTCounterComponent.vue'
import PTInputComponent from '@/components/pinyin-typer/PTInputComponent.vue'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isLoading = ref(true)
const data = ref(null)

const characterCount = route.query['character-count']
// const requireToneNumbers = route.query['require-tone-numbers']
const characterPreset = route.query['character-preset']

onMounted(async () => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/games/pinyin-typer/characters?count=${characterCount}&preset=${characterPreset}`,
    )
    data.value = await res.json()
  } catch (err) {
    console.error('API call failed', err)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div
    v-if="isLoading"
    class="bg-base-200 min-h-screen flex justify-center items-center"
    style="min-height: calc(100vh - 4rem)"
  >
    <LoadingBarComponent />
  </div>
  <div
    class="bg-base-200 min-h-screen flex flex-col justify-center items-center"
    style="min-height: calc(100vh - 4rem)"
    v-else
  >
    <PTCounterComponent />
    {{ data }}
    <PTInputComponent class="w-1/2" />
  </div>
</template>

<style scoped></style>
