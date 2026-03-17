import { createRouter, createWebHistory } from 'vue-router';
// Import direct pour la Home (chargement immédiat)
import AcceuilView from '@/views/AcceuilView.vue';
import ProfilView from '@/views/ProfilView.vue';

const routes = [
  {
    path: '/acceuil',
    name: 'Home',
    component: AcceuilView,
    meta: { title: 'Fil d’actualité' }
  },
  {
    path: '/',
    name: 'Login',
    // Lazy loading : le composant n'est chargé que si l'utilisateur y va
    component: () => import('../views/LoginView.vue'),
    meta: { guestOnly: false } // Pour empêcher un user déjà connecté d'y retourner
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/SignInView.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/quote/:id',
    name: 'QuoteDetails',
    component: () => import('../views/QuoteDetails.vue'),
    props: true // Permet de recevoir l'ID directement en tant que variable props
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilView,
    meta: { requiresAuth: true } // Route protégée
  },
  {
    path: '/create-quote',
    name: 'CreateQuote',
    component: () => import('../views/CreateQuote.vue'),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Scroll en haut de page lors d'un changement de route
  scrollBehavior() {
    return { top: 0 };
  }
});

/**
 * Navigation Guard : Vérifie l'authentification avant chaque passage
 */
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Vérification simple du JWT

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si la route demande d'être membre et qu'on ne l'est pas -> Login
    next({ name: 'Login' });
  } else if (to.meta.guestOnly && isAuthenticated) {
    // Si on est déjà connecté et qu'on veut aller sur Login/Register -> Home
    next({ name: 'Acceuil' });
  } else {
    next();
  }
});

export default router;