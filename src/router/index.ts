import AboutPageView from '@/views/AboutPageView.vue'
import ChangeLogPageView from '@/views/ChangeLogPageView.vue'
import GamesPageView from '@/views/GamesPageView.vue'
import HomePageView from '@/views/HomePageView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import PinyinTyperView from '@/views/pinyin-typer/PinyinTyperView.vue'
import ResourcesPageView from '@/views/ResourcesPageView.vue'
import RoadMapView from '@/views/RoadMapView.vue'

import { createRouter, createWebHistory } from 'vue-router'
import ArticlesMenuView from '@/views/ArticlesMenuView.vue'
import ArticlesSingleView from '@/views/ArticlesSingleView.vue'

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

    // Resource Routes
    { path: '/resources', name: 'ResourcesPage', component: ResourcesPageView },

    // Article Routes
    { path: '/articles', name: 'ArticlesMenuPage', component: ArticlesMenuView },

    // Implement Later
    { path: '/articles/:slug', name: 'ArticlesSinglePage', component: ArticlesSingleView },

    // Other Routes
    { path: '/about', name: 'AboutPage', component: AboutPageView },
    { path: '/changelog', name: 'ChangeLogPage', component: ChangeLogPageView },
    { path: '/roadmap', name: 'RoadMapPage', component: RoadMapView },

    // Page not found
    { path: '/page-not-found', name: 'PageNotFoundPage', component: PageNotFoundView },
    { path: '/:pathMatch(.*)*', redirect: { name: 'PageNotFoundPage' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
