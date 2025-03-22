import HomeView from '@/views/HomeView.vue'
import PinyinTypeSettingsView from '@/views/pinyin-typer/PinyinTypeSettingsView.vue'
import PinyinTypeView from '@/views/pinyin-typer/PinyinTypeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Welcome', component: WelcomeView },
    { path: '/home', name: 'Home', component: HomeView },
    {
      path: '/pinyin',
      name: 'PinyinTyperGame',
      component: PinyinTypeView,
    },
    {
      path: '/pinyin/settings',
      name: 'PinyinTyperSettings',
      component: PinyinTypeSettingsView,
    },
  ],
})

export default router
