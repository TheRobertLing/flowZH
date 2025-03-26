<script setup lang="ts"></script>

<template>
  <div class="flex justify-center gap-8">
    <!-- Left Sidebar for future content-->
    <!-- <div class="border grow-1 min-h-screen">
      Left
    </div> -->

    <div
      class="flex flex-col max-w-352 w-full items-center bg-base-300 grow min-h-screen text-center mt-8 mb-8 rounded-xl p-8"
    >
      <h2 class="text-3xl font-bold mb-8 select-none">FlowZH's Resources</h2>

      <!-- Downloadables Section -->
      <section class="w-full text-left mb-12">
        <h3 class="text-2xl font-bold mb-4">📦 Downloadables</h3>
        <ul class="space-y-4">
          <li class="bg-base-100 p-4 rounded shadow hover:bg-base-200 transition">
            <p class="font-medium">General Standard Chinese Characters List (Simplified)</p>
            <a
              href="/downloads/SimplifiedDataCSV.csv"
              download
              class="text-blue-500 hover:underline"
              >Download CSV</a
            >
          </li>
          <li class="bg-base-100 p-4 rounded shadow hover:bg-base-200 transition">
            <p class="font-medium">
              Anki Deck: Pinyin Recognition (All 8105 General Standard Chinese Characters)
            </p>
            <a
              href="/downloads/PinyinRecognitionDeck.apkg"
              download
              class="text-blue-500 hover:underline"
              >Download .apkg</a
            >
          </li>
        </ul>
      </section>

      <!-- Dev Tools / Open Source -->
      <section class="w-full text-left mb-12">
        <h3 class="text-2xl font-bold mb-4">🛠️ For Devs</h3>
        <ul class="space-y-4">
          <li class="bg-base-100 p-4 rounded shadow hover:bg-base-200 transition">
            <p class="font-medium">Check Out My GitHub For Python/Javascript Packages</p>
            <a
              href="https://github.com/TheRobertLing"
              target="_blank"
              class="text-blue-500 hover:underline"
              >Github Link</a
            >
          </li>
        </ul>
      </section>

      <!-- External Tools Section -->
      <section class="w-full text-left mb-12">
        <h3 class="text-2xl font-bold mb-4">🌐 Useful Tools & References</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <a
            href="https://www.pleco.com"
            target="_blank"
            class="bg-base-100 p-4 rounded shadow hover:bg-base-200 transition"
          >
            <h4 class="font-semibold">Pleco</h4>
            <p class="text-sm">The go-to Chinese dictionary app with handwriting and flashcards.</p>
          </a>
          <a
            href="https://resources.allsetlearning.com/chinese/grammar/"
            target="_blank"
            class="bg-base-100 p-4 rounded shadow hover:bg-base-200 transition"
          >
            <h4 class="font-semibold">Chinese Grammar Wiki</h4>
            <p class="text-sm">One of the most comprehensive grammar reference tools.</p>
          </a>
          <!-- Add more as needed -->
        </div>
      </section>

      <!-- Placeholder Section -->
      <section class="w-full text-left text-base-content/70 border border-dashed p-4 rounded">
        More resources, guides, and interactive tools coming soon!
      </section>
    </div>

    <!-- Right Sidebar for future content -->
    <!-- <div class="border grow-1 min-h-screen">
      Right
    </div> -->
  </div>
</template>

<style scoped></style>
