<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonComponent from '../components/ButtonComponent.vue'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import heroImage from '../assets/imgs/hero.jpg'

const router = useRouter()

const WEB3FORMS_ACCESS_KEY = 'f786d4e2-21fb-4ad2-b625-eefba9666c66'
const name = ref('')
const email = ref('')
const message = ref('')
const toast = useToast()

const submitForm = async () => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })
  const result = await response.json()
  if (result.success) {
    toast.success('Message successfully sent', {
      timeout: 5000,
    })
    name.value = ''
    email.value = ''
    message.value = ''
  } else {
    toast.error('Message unable to be sent. Try again later.', {
      timeout: 5000,
    })
  }
}

const goToGames = () => {
  router.push({ name: 'GamesPage' })
}

const goToResources = () => {
  router.push({ name: 'ResourcesPage' })
}
</script>

<template>
  <!-- Welcome Banner -->
  <div
    class="hero relative min-h-screen bg-base-100"
    :style="{
      minHeight: 'calc(100vh - 4rem)',
    }"
  >
    <img
      :src="heroImage"
      alt="Hero"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      style="
        -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        mask-size: 100% 100%;
        mask-repeat: no-repeat;
      "
    />

    <!-- Content -->
    <div class="hero-content text-center relative z-10">
      <div class="max-w-md text-base-content">
        <h1 class="text-5xl font-bold">Welcome to <span class="text-green-500">FlowZH</span>.</h1>
        <p class="py-6 mt-3 mb-3 text-xl">
          A small open project with a simple goal - make Chinese learning more accessible to
          everyone.
        </p>

        <div class="flex w-full flex-col gap-2 lg:flex-row">
          <ButtonComponent class="flex-1" @button-click="goToGames">Explore Games</ButtonComponent>
          <div class="divider lg:divider-horizontal"></div>
          <ButtonComponent class="flex-1" @button-click="goToResources"
            >Explore Resources</ButtonComponent
          >
        </div>
      </div>
    </div>
  </div>

  <!-- Mission Statement -->
  <section class="mt-8 text-center max-w-352 m-auto">
    <h2 class="text-3xl font-bold mb-8">Built To Be Open</h2>
    <p class="max-w-3xl m-auto mb-8">
      The FlowZH Project was created with a simple goal: to provide a free and open-source platform
      for learning Chinese — without barriers.
      <br /><br />
      No paywalls. No subscriptions. No locked features. Ever.
      <br /><br />
      Every game, tool, and resource on FlowZH is — and will always be — free to use. Built for
      self-learners, teachers, and the curious alike.
    </p>
  </section>

  <div class="divider"></div>

  <!-- Planned Changes -->
  <section class="mt-8 text-center max-w-5xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">What's Coming Next</h2>

    <p class="max-w-3xl m-auto mb-8">
      FlowZH is still in its early stages — there's not much here yet, but it's being actively
      developed with more tools and features on the way.
      <br /><br />
      The goal is to gradually grow FlowZH into a complete resource — one small, helpful tool at a
      time. If you're curious about what's coming next or want to share ideas, check out the roadmap
      and feel free to reach out.
    </p>

    <!-- Include an image here -->
    <img src="../assets/imgs/jumpinggif.gif" alt="熊猫头表情包" class="m-auto" />
  </section>

  <div class="divider"></div>

  <!-- Contact Section -->
  <section class="">
    <div class="mt-8 m-auto max-w-3xl">
      <h2 class="mb-8 text-3xl font-bold text-center">Get In Contact</h2>

      <p class="mb-8 text-center max-w-2xl mx-auto">
        The goal is to gradually grow FlowZH into a complete resource — one small, helpful tool at a
        time. If you're interested in contributing, suggesting features, or just following along,
        feel free to check out the project on
        <a href="https://github.com/your-repo" class="link">GitHub</a>.
      </p>

      <form @submit.prevent="submitForm" class="space-y-8">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium">Name</label>
          <input
            id="name"
            class="border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            type="text"
            name="name"
            placeholder="Jane Doe"
            v-model="name"
            required
          />
        </div>

        <div>
          <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="exampleemail@gmail.com"
            v-model="email"
            required
          />
        </div>

        <div>
          <label for="message" class="block mb-2 text-sm font-medium">Your message</label>
          <textarea
            id="message"
            rows="6"
            class="border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Leave a comment, suggestion, or report a bug..."
            v-model="message"
          ></textarea>
        </div>

        <ButtonComponent class="mb-8 w-full" type="submit">Submit Form</ButtonComponent>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
