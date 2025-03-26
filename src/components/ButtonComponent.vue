<script setup lang="ts">
const emit = defineEmits(['buttonClick'])
</script>

<template>
  <button
    @click="emit('buttonClick')"
    class="btn btn-neutral btn-xs sm:btn-sm md:btn-md border-2 border-solid rounded-xl hover:text-green-500"
  >
    <slot> Click Me </slot>
  </button>
</template>
