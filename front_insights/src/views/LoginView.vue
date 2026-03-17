<script setup>
import { ref } from 'vue';
// import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

// const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const handleLogin = async () => {
//   try {
//     await authStore.login({ email: email.value, password: password.value });
//     router.push('/'); // Redirection vers l'accueil après succès
//   } catch (err) {
//     console.error("Échec de connexion :", err);
//   }
};
</script>

<template>
  <div class="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-900 px-4">
    <div class="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8">
      
      <div class="text-center mb-10">
        <h2 class="text-3xl font-extrabold text-white mb-2">Bon retour !</h2>
        <p class="text-slate-400">Connectez-vous pour partager vos citations.</p>
      </div>

      <form class="space-y-6">
        
        <div>
          <label class="block text-sm font-medium text-slate-300 mb-2">Adresse Email</label>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              ✉️
            </span>
            <input 
              type="email" 
              placeholder="nom@exemple.com" 
              class="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-2">
            <label class="text-sm font-medium text-slate-300">Mot de passe</label>
            <a href="#" class="text-xs text-cyan-400 hover:underline">Oublié ?</a>
          </div>
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              🔒
            </span>
            <input 
              type="password" 
              placeholder="••••••••" 
              class="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>

        <button 
          type="submit" 
          class="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-cyan-900/30 transform active:scale-[0.98] transition duration-150"
        >
          Se connecter
        </button>

      </form>

      <p class="mt-8 text-center text-slate-400 text-sm">
        Pas encore de compte ? 
        <router-link to="/register" class="text-cyan-400 font-semibold hover:text-cyan-300 transition">
          Créer un compte
        </router-link>
      </p>

    </div>
  </div>
</template>