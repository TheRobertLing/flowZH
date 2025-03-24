Hardcoded component for the pinyin typer game, port this to Unity in the future
<script setup lang="ts">
import type { GameSettingsV1 } from '@/types'
import ButtonComponent from '../ButtonComponent.vue'
import { computed, ref } from 'vue'

const emit = defineEmits(['startGame'])

// Hard coded settings, port later
const options = ref([
  {
    name: 'Character Count',
    selections: [10, 20, 50],
    selected: 10,
  },
  {
    name: 'Require Tone Numbers',
    selections: ['Off', 'On'],
    selected: 'Off',
  },
  {
    name: 'Character Level Preset',
    selections: [1, 2, 3],
    selected: 1,
  },
])

const settingsData = computed((): GameSettingsV1 => {
  return {
    count: options.value[0].selected as 10 | 20 | 50,
    tones: options.value[1].selected as 'On' | 'Off',
    preset: options.value[2].selected as 1 | 2 | 3,
  }
})
</script>

<template>
  <div class="card w-full max-w-md shadow-xl bg-base-100 p-6 sm:p-8 space-y-8 rounded-xl">
    <h2 class="text-center text-3xl font-bold">Game Settings</h2>

    <div v-for="(item, index) in options" :key="index" class="space-y-2">
      <h3 class="text-lg font-bold text-center">{{ item.name }}</h3>

      <div class="flex flex-wrap gap-2 justify-center">
        <button
          v-for="(option, idx) in item.selections"
          :key="idx"
          @click="item.selected = option"
          :class="[
            'btn btn-sm rounded-xl font-bold ',
            item.selected === option ? 'bg-green-500 text-black' : 'btn-neutral',
          ]"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <ButtonComponent
      class="w-full"
      @button-click="
        emit('startGame', settingsData)
      "
      >Begin Game</ButtonComponent
    >
  </div>
</template>

<style scoped></style>
