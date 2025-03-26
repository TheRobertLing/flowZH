<script setup lang="ts"></script>

<template>
  <div class="flex justify-center gap-8">
    <!-- Left Sidebar for future content-->
    <!-- <div class="border grow-1 min-h-screen">
      Left
    </div> -->

    <!-- Articles -->
    <div
      class="flex flex-col max-w-352 items-center bg-base-300 grow-3 min-h-screen mt-8 mb-8 rounded-xl p-8"
    >
      <h2 class="text-3xl font-bold mb-8 select-none">FlowZH's Article Archive</h2>

      <!-- Orientation Text -->
      <p class="mb-8">
        Learning any language involves plenty of reading — Chinese is no exception. Only through
        reading can you start to understand how vocabulary and grammar work together in real
        context. FlowZH's article releases aim to provide short, self-contained and easy to digest
        reads across a variety of everyday topics (and more!) so that anyone can build confidence
        reading Chinese, one bite-sized piece at a time.
      </p>

      <!-- Articles List Use Notion Embed For Now -->
      <h3 class="text-xl font-bold mb-8 select-none">Article List</h3>
      <p class="mb-4">
        Unfortunately, due to university obligations, the full in-site article archive is still a
        work in progress. For now, we're using embedded Notion pages as a temporary substitute.
        Sorry about the delay — thanks for your patience! 🙏
      </p>

      <iframe
        src="https://goldenrod-pressure-ac4.notion.site/ebd/1c17e71b9ead80e2a722fefb0f59e9dc"
        class="w-full h-screen"
        sandbox="allow-same-origin allow-scripts"
        referrerpolicy="no-referrer"
      />
    </div>

    <!-- Right Sidebar for future content -->
    <!-- <div class="border grow-1 min-h-screen">
      Right
    </div> -->
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
