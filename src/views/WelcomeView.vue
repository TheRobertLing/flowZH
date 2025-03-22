<script setup lang="ts">
import { useRouter } from 'vue-router';
import ButtonComponent from '../components/ButtonComponent.vue'

const router = useRouter();

const handleClick = () => {
  router.push({ name: 'PinyinTyperSettings' })
}
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Welcome to <span class="text-green-500">ZiFlow</span></h1>
        <p class="py-6 mt-3 mb-3">
          Sharpen your tones and boost your speed with this fast-paced pinyin typing game. From
          beginners to pros, ZiFlow helps you master recognition—one keystroke at a time.
        </p>
        <ButtonComponent @button-click="handleClick">Start Typing</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
