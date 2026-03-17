<script setup>
import { ref } from 'vue';
// import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

// const authStore = useAuthStore();
const router = useRouter();
const isMenuOpen = ref(false); // État pour le menu mobile

const handleLogout = () => {
//   authStore.logout();
  router.push('/login');
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="flex">
    
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 left-0 h-screen w-64 bg-slate-900 border-r border-slate-800 p-4 transform transition-transform duration-300 z-50',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      ]"
    >
      <!-- Logo -->
      <div class="mb-8">
        <router-link to="/" class="text-2xl font-black text-cyan-500">
          QUOTE.APP
        </router-link>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col space-y-3">
<router-link
  to="/acceuil"
  class="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md transition"
>
  Home
</router-link>
 

        <router-link
          to="/create-quote"
          class="nav-item text-cyan-400"
        >
          + Publier
        </router-link>

        <router-link to="/profil" class="nav-item">
          Profil
        </router-link>

        <button
          @click="handleLogout"
          class="text-left text-red-400 hover:text-red-300 px-3 py-2 rounded-md"
        >
          Déconnexion
        </button>
      </nav>
    </aside>

    <!-- Overlay mobile -->
    <div
      v-if="isMenuOpen"
      @click="toggleMenu"
      class="fixed inset-0 bg-black/50 z-40 md:hidden"
    ></div>

    <!-- Main content -->
    <div class="flex-1 md:ml-64">
      
      <!-- Top bar mobile -->
      <div class="md:hidden flex items-center justify-between bg-slate-900 p-4 border-b border-slate-800">
        <span class="text-white font-bold">QUOTE.APP</span>
        <button @click="toggleMenu" class="text-white text-2xl">
          ☰
        </button>
      </div>

      <!-- Page content -->
      <div class="p-6 text-white">
        <router-view />
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>