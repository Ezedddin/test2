import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/service',
      name: 'service',
      component: HomeView, // Voeg de service route toe
      meta: { scrollTo: 'service' },
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView,
    },

  ],
  scrollBehavior(to) {
    if (to.meta.scrollTo) {
      return { el: `#${to.meta.scrollTo}`, behavior: 'smooth' };
    }
    return { top: 0 }; // Scroll naar boven als er geen specifieke sectie is
  },
});

export default router;
