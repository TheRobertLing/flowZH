<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['enter'])

const answer = ref<string>('')

const handleEnter = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    emit('enter', answer.value)
    answer.value = ''
  }
}
</script>

<template>
  <div>
    <label
      for="user-input"
      class="block text-lg font-medium"
    ></label>
    <input
      id="user-input"
      type="text"
      class="input focus:outline-0 rounded-xl w-full bg-base-200 focus:border-green-500"
      placeholder="Enter Pinyin Here"
      maxlength="50"
      @keydown="handleEnter"
      v-model="answer"
    />
  </div>
</template>

<style scoped></style>
