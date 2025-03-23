import AboutPageView from '@/views/AboutPageView.vue'
import ChangeLogPageView from '@/views/ChangeLogPageView.vue'
import GamesPageView from '@/views/GamesPageView.vue'
import HomePageView from '@/views/HomePageView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import PinyinTypeSettingsView from '@/views/pinyin-typer/PinyinTypeSettingsView.vue'
import PinyinTyperView from '@/views/pinyin-typer/PinyinTyperView.vue'
import ResourcesPageView from '@/views/ResourcesPageView.vue'
import RoadMapView from '@/views/RoadMapView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home Route
    { path: '/', name: 'HomePage', component: HomePageView },




    // Game Routes
    { path: '/games', name: 'GamesPage', component: GamesPageView },
    {
      path: '/pinyin-typer',
      name: 'PinyinTyperGame',
      component: PinyinTyperView,
    },
    {
      path: '/pinyin-typer/settings',
      name: 'PinyinTyperSettings',
      component: PinyinTypeSettingsView,
    },



    // Resource Routes
    { path: '/resources', name: 'ResourcesPage', component: ResourcesPageView },




    // Other Routes
    { path: '/about', name: 'AboutPage', component: AboutPageView },
    { path: '/changelog', name: 'ChangeLogPage', component: ChangeLogPageView },
    { path: '/roadmap', name: 'RoadMapPage', component: RoadMapView },




    // Page not found
    { path: '/page-not-found', name: 'PageNotFoundPage', component: PageNotFoundView },
    { path: '/:pathMatch(.*)*', redirect: { name: 'PageNotFoundPage' } },
  ],
})

export default router
