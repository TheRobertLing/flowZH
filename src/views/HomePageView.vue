<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonComponent from '../components/ButtonComponent.vue'

const router = useRouter()

const handleClick = () => {
  router.push({ name: 'PinyinTyperSettings' })
}
</script>

<template>
  <!-- Landing Page Image -->
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Welcome to <span class="text-green-500">ZiFlow</span>.</h1>
        <p class="py-6 mt-3 mb-3">
          We offer individually handcrafted games (and more) to boost your Chinese learning
          experience.
        </p>

        <div class="flex w-full flex-col gap-2 lg:flex-row">
          <ButtonComponent class="flex-1" @button-click="handleClick"
            >Explore Games</ButtonComponent
          >
          <div class="divider lg:divider-horizontal"></div>
          <ButtonComponent class="flex-1" @button-click="handleClick"
            >Explore Resources</ButtonComponent
          >
        </div>
      </div>
    </div>
  </div>

  <!-- Some Site Introductions and Navigation, Maybe Tutorial Video Sometime -->
  <div>

    <!-- Placeholder Carousel Here, REplace with content later -->
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          class="w-full"
        />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          class="w-full"
        />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          class="w-full"
        />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          class="w-full"
        />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
