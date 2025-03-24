<script setup lang="ts">
import LoadingBarComponent from '@/components/LoadingBarComponent.vue'
import PTGameComponent from '@/components/pinyin-typer/PTGameComponent.vue'
import PTSettingsComponent from '@/components/pinyin-typer/PTSettingsComponent.vue'

import type { Character, GameSettingsV1 } from '@/types'

import { onMounted, ref } from 'vue'

// TODO: Port game to unity to avoid in DOM game

// Game State
type State = 'settings' | 'loading' | 'game'
const state = ref<State>('loading')

// Game Data
const tone = ref<boolean>(false)
const characters = ref<Character[]>([])

const fetchGameData = async (data: GameSettingsV1) => {
  const baseUrl = import.meta.env.DEV
    ? import.meta.env.VITE_API_BASE_URL_LOCAL
    : import.meta.env.VITE_API_BASE_URL_PROD

  tone.value = data.tones === 'On' ? true : false

  // Switch to loading screen as data is fetched from backend
  state.value = 'loading'

  // Fetch data from backend
  try {
    const params = new URLSearchParams()
    params.append('count', `${data.count}`)
    params.append('preset', `${data.preset}`)

    const response = await fetch(`${baseUrl}/api/v1/games/pinyin-typer/characters?${params}`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    characters.value = (await response.json()) as Character[]
  } catch (error) {
    console.error((error as Error).message)
  } finally {
    console.log(characters.value)
    state.value = 'game'
  }
}

onMounted(() => {
  // Mimick loading for a few seconds for realism
  setTimeout(() => {
    state.value = 'settings'
  }, 3000)
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
      <div class="mb-8 w-full bg-base-200 content flex justify-center items-center aspect-video">
        <PTSettingsComponent v-if="state === 'settings'" @start-game="fetchGameData" />
        <LoadingBarComponent v-else-if="state === 'loading'" />
        <PTGameComponent
          v-else-if="state === 'game'"
          :characters="characters"
          @replay="state = 'settings'"
        />
      </div>

      <div class="divider"></div>

      <div class="w-full">
        <!-- Title -->
        <h3 class="text-2xl font-bold mb-8">Pinyin Typer</h3>

        <!-- Description -->
        <h4 class="text-xl font-bold">Description</h4>
        <p class="leading-8">
          Pinyin Typer is an interactive Chinese character guessing game designed to help you
          improve your Mandarin typing skills. You'll be shown a Chinese character, and your goal is
          to type the correct pinyin (with tone numbers) as fast and accurately as possible.
        </p>

        <!-- Instructions -->
        <h4 class="text-xl font-bold">Instructions</h4>
        <p class="leading-8">
          When the game starts, choose your desired settings and start typing! Note that certain functionalities may be
          missing as the game is still in the process of being ported into Unity. Apologies for any inconvenience caused.
        </p>
      </div>
    </div>

    <!-- Right Sidebar for future content -->
    <!-- <div class="border grow-1 min-h-screen">
      Right
    </div> -->
  </div>
</template>

<style scoped></style>
