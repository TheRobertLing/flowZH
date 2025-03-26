<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LightDarkModeToggleComponent from './LightDarkModeToggleComponent.vue'
</script>

<template>
  <div class="navbar bg-base-200 shadow-sm sticky top-0 z-20">
    <div class="navbar-start">
      <!-- Responsive Dropdown -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/games">Games</RouterLink></li>
          <li><RouterLink to="/resources">Resources</RouterLink></li>
          <li><RouterLink to="/articles">Articles</RouterLink></li>
        </ul>
      </div>
      <RouterLink to="/" class="btn btn-ghost text-xl">FlowZH</RouterLink>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/games">Games</RouterLink></li>
        <li><RouterLink to="/resources">Resources</RouterLink></li>
        <li><RouterLink to="/articles">Articles</RouterLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <LightDarkModeToggleComponent />
    </div>
  </div>
</template>

<style scoped>
li:hover {
  color: oklch(0.723 0.219 149.579);
}
</style>
