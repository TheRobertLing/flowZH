import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home Route
    { path: '/', name: 'HomePage', component: () => import('@/views/HomePageView.vue') },

    // Game Routes
    { path: '/games', name: 'GamesPage', component: () => import('@/views/GamesPageView.vue') },
    {
      path: '/pinyin-typer',
      name: 'PinyinTyperGame',
      component: () => import('@/views/pinyin-typer/PinyinTyperView.vue'),
    },

    // Resource Routes
    {
      path: '/resources',
      name: 'ResourcesPage',
      component: () => import('@/views/ResourcesPageView.vue'),
    },

    // Article Routes
    {
      path: '/articles',
      name: 'ArticlesMenuPage',
      component: () => import('@/views/ArticlesMenuView.vue'),
    },
    {
      path: '/articles/:slug',
      name: 'ArticlesSinglePage',
      component: () => import('@/views/ArticlesSingleView.vue'),
    },

    // Other Routes
    { path: '/about', name: 'AboutPage', component: () => import('@/views/AboutPageView.vue') },
    {
      path: '/changelog',
      name: 'ChangeLogPage',
      component: () => import('@/views/ChangeLogPageView.vue'),
    },
    { path: '/roadmap', name: 'RoadMapPage', component: () => import('@/views/RoadMapView.vue') },

    // Page not found
    {
      path: '/page-not-found',
      name: 'PageNotFoundPage',
      component: () => import('@/views/PageNotFoundView.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: { name: 'PageNotFoundPage' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
