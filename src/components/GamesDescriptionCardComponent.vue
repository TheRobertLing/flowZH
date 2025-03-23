<script setup lang="ts">
import type { GameCardData } from '@/types'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  data: GameCardData
}>()

const redirectToGamePage = () => {
  router.push({ name: props.data.viewName })
}
</script>

<template>
  <div
    class="card bg-base-100 shadow-sm h-full rounded-xl cursor-pointer hover-shadow"
    @click="redirectToGamePage"
  >
    <figure class="bg-base-200">
      <slot name="game_img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          version="1.1"
          width="100%"
          height="100%"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="ic_fluent_games_24_filled" fill="#212121" fill-rule="nonzero">
              <path
                d="M14.9978834,5 C18.8638767,5 21.9978834,8.13400675 21.9978834,12 C21.9978834,15.7854517 18.9931001,18.8690987 15.2385332,18.995941 L14.9978834,19 L9.00211656,19 C5.13612331,19 2.00211656,15.8659932 2.00211656,12 C2.00211656,8.21454828 5.00689994,5.13090132 8.76146681,5.00405902 L9.00211656,5 L14.9978834,5 Z M14.75,12.5 C14.0596441,12.5 13.5,13.0596441 13.5,13.75 C13.5,14.4403559 14.0596441,15 14.75,15 C15.4403559,15 16,14.4403559 16,13.75 C16,13.0596441 15.4403559,12.5 14.75,12.5 Z M8,9 C7.62030423,9 7.30650904,9.28215388 7.25684662,9.64822944 L7.25,9.75 L7.25,11.248 L5.75,11.2487458 C5.33578644,11.2487458 5,11.5845322 5,11.9987458 C5,12.3784415 5.28215388,12.6922367 5.64822944,12.7418991 L5.75,12.7487458 L7.25,12.748 L7.25,14.25 C7.25,14.6642136 7.58578644,15 8,15 C8.37969577,15 8.69349096,14.7178461 8.74315338,14.3517706 L8.75,14.25 L8.75,12.748 L10.25,12.7487458 C10.6642136,12.7487458 11,12.4129593 11,11.9987458 C11,11.61905 10.7178461,11.3052548 10.3517706,11.2555924 L10.25,11.2487458 L8.75,11.248 L8.75,9.75 C8.75,9.33578644 8.41421356,9 8,9 Z M16.75,9 C16.0596441,9 15.5,9.55964406 15.5,10.25 C15.5,10.9403559 16.0596441,11.5 16.75,11.5 C17.4403559,11.5 18,10.9403559 18,10.25 C18,9.55964406 17.4403559,9 16.75,9 Z"
                id="🎨-Color"
              ></path>
            </g>
          </g>
        </svg>
      </slot>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <slot name="name">{{ props.data.name || 'Coming Soon!' }}</slot>
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p class="break-all">
        <slot name="description">{{ props.data.description || 'New game coming soon!' }} </slot>
      </p>
      <div class="card-actions justify-end">
        <template v-if="props.data.viewName">
          <div
            class="badge badge-neutral rounded-xl"
            v-for="(item, index) in props.data.categories"
            :key="index"
          >
            {{ item }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-shadow {
  transition: box-shadow 0.3s ease;
  transition: scale 0.3s ease;
}

.hover-shadow:hover {
  box-shadow: 0 0 8px 1px oklch(0.792 0.209 151.711);
  scale: 0.95;
}
</style>
