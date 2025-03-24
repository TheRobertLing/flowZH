<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import { Theme } from '@/types/themes'

const themeStore = useThemeStore()
</script>

<template>
  <div class="cursor-pointer" @click="themeStore.toggleTheme()">
    <label class="swap swap-rotate">
      <!-- this hidden checkbox controls the state -->
      <input
        type="checkbox"
        class="theme-controller"
        :checked="themeStore.chosenTheme === Theme.Dark"
        :value="themeStore.chosenTheme"
        @change="themeStore.toggleTheme"
      />

      <!-- sun icon -->
      <svg
        class="swap-off h-7 w-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path
          d="M480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-450H40v-60h160v60Zm720 0H760v-60h160v60ZM450-760v-160h60v160h-60Zm0 720v-160h60v160h-60ZM262-658l-100-97 43-44 96 100-39 41Zm494 496-98-100 41-41 99 98-42 43Zm-99-537 98-99 44 42-99 98-43-41ZM162-205l99-98 42 42-98 99-43-43Zm318-275Z"
        />
      </svg>

      <!-- moon icon -->
      <svg
        class="swap-on h-7 w-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path
          d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.67 16.5Q688.67-384 660-384q-114.69 0-195.34-80.66Q384-545.31 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z"
        />
      </svg>
    </label>
  </div>
</template>

<style scoped>
.circle-effect-enter-active,
.circle-effect-leave-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.circle-effect-enter-from {
  transform: scale(0) rotate(360deg);
  opacity: 0;
}

.circle-effect-enter-to {
  transform: scale(1) rotate(0deg);
  opacity: 1;
}

.circle-effect-leave-from {
  transform: scale(1) rotate(0deg);
  opacity: 1;
}

.circle-effect-leave-to {
  transform: scale(0) rotate(-360deg);
  opacity: 0;
}
</style>
