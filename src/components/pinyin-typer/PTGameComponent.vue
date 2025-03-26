<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import type { Character } from '@/types'
import ButtonComponent from '../ButtonComponent.vue'
import PTInputComponent from './PTInputComponent.vue'
import { numberToDiacritic, removeTone } from 'pinyin-tools'

// Use props once backend is deployed
const props = defineProps<{
  characters: Character[]
  requireTone: boolean
}>()

const emit = defineEmits(['replay'])

// TOAST THE HINT
const toast = useToast()

// Game state variables
type State = 'game' | 'results'
const state = ref<State>('game')
const index = ref<number>(0)
const results: {
  character: string
  expected: string
  received: string
  isCorrect: boolean
}[] = []

const handleInput = (answer: string): void => {
  if (props.requireTone) {
    results.push({
      character: props.characters[index.value].simplified,
      expected: props.characters[index.value].pinyin,
      received: answer,
      isCorrect: props.characters[index.value].pinyin
        .split(', ')
        .includes(numberToDiacritic(answer)),
    })
  } else {
    results.push({
      character: props.characters[index.value].simplified,
      expected: props.characters[index.value].pinyin,
      received: answer,
      isCorrect: props.characters[index.value].pinyin
        .split(', ').map(char => removeTone(char))
        .includes(removeTone(answer)),
    })
  }

  // Load next character
  if (index.value < props.characters.length - 1) {
    index.value += 1
  } else {
    state.value = 'results'
  }
}

const showHint = (): void => {
  const py = props.characters[index.value].pinyin.split(', ')
  const initials = py.map((char) => char[0]).join(', ')
  if (py.length > 1) {
    toast(`This is a polyphonic character and the starting letters are: ${initials}.`)
  } else {
    toast(`The starting letter is: ${initials}.`)
  }
}
</script>

<template>
  <div class="flex flex-col">
    <!-- Actual character itself -->
    <div
      class="p-8 aspect-square flex items-center justify-center rounded-xl bg-gray-100 select-none"
      v-if="state === 'game'"
    >
      <svg viewBox="0 0 100 100" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <text x="50" y="60" text-anchor="middle" dominant-baseline="middle" font-size="100">
          {{ props.characters[index].simplified }}
        </text>
      </svg>
    </div>

    <!-- How many characters left -->
    <div class="text-center text-xl font-bold mt-4" v-if="state === 'game'">
      {{ index + 1 }} / {{ props.characters.length }}
    </div>

    <!-- Hints and Options-->
    <div class="flex justify-around mt-4" v-if="state === 'game'">
      <ButtonComponent class="bg-neutral" @button-click="showHint">Hint</ButtonComponent>
      <ButtonComponent class="bg-neutral" @button-click="handleInput('')">Skip</ButtonComponent>
    </div>

    <PTInputComponent
      class="space-y-4"
      @enter="handleInput"
      v-if="state === 'game'"
    ></PTInputComponent>

    <!-- Results Screen -->
    <div class="text-center text-xl font-bold mt-4" v-if="state === 'results'">
      <p>
        Congratulations, you scored {{ results.filter((r) => r.isCorrect).length }} /
        {{ results.length }}
      </p>
    </div>
    <div
      class="text-xl mt-4 max-w-4xl mx-auto h-[32rem] overflow-y-auto border rounded-2xl shadow-md bg-white p-6"
      v-if="state === 'results'"
    >
      <ul class="space-y-6">
        <li
          v-for="(item, index) in results"
          :key="index"
          class="p-5 border rounded-xl bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div class="text-center md:text-left">
            <p class="text-4xl font-bold mb-2">{{ item.character }}</p>
            <p class="text-base text-gray-600">
              <span class="font-semibold">Expected:</span> {{ item.expected }}
            </p>
            <p class="text-base text-gray-600">
              <span class="font-semibold">Your Answer:</span> {{ item.received }}
            </p>
          </div>
          <div>
            <span
              class="px-4 py-2 rounded-full text-base font-semibold"
              :class="item.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
            >
              {{ item.isCorrect ? '✅ Correct' : '❌ Incorrect' }}
            </span>
          </div>
        </li>
      </ul>
    </div>

    <ButtonComponent
      class="bg-base-300 mt-4"
      @button-click="emit('replay')"
      v-if="state === 'results'"
      >Play Again</ButtonComponent
    >
  </div>
</template>

<style scoped></style>
