<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const returnHome = () => {
  router.back()
}
</script>

<template>
  <div class="bg-base-200 flex justify-center items-center" style="min-height: calc(100vh - 4rem)">
    <div class="card bg-base-100 w-96 shadow-xl rounded-xl">
      <div class="card-body">
        <h2 class="card-title text-error">Page Not Found</h2>
        <p class="pt-2 pb-2">
          Oops! Looks like this page doesn't exist. This is most likely because the page is either
          undergoing maintenance or has not been deployed yet.
        </p>
        <div class="card-actions justify-end">
          <ButtonComponent @button-click="returnHome">Return</ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
