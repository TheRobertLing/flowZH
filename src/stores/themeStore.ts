import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Theme } from '../types/themes'


export const useThemeStore = defineStore('theme', () => {
  const chosenTheme = ref<Theme>(Theme.Light)

  const applyTheme = (): void => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', chosenTheme.value)
    }
  }

  const loadThemeFromLocalStorage = (): void => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme && Object.values(Theme).includes(savedTheme)) {
      chosenTheme.value = savedTheme
    } else {
      chosenTheme.value = Theme.Light
    }
    applyTheme()
  }

  const saveThemeToLocalStorage = (): void => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', chosenTheme.value)
    }
  }

  const toggleTheme = (): void => {
    chosenTheme.value = chosenTheme.value === Theme.Light ? Theme.Dark : Theme.Light

    saveThemeToLocalStorage()
    applyTheme()
  }

  if (typeof window !== 'undefined') {
    loadThemeFromLocalStorage()
  }

  return { chosenTheme, toggleTheme, applyTheme }
})
