<script setup>


</script>


<template>
  <div class="min-h-screen bg-slate-900 text-slate-200 p-4 md:p-8">
    <div class="max-w-5xl mx-auto">
      
      <header class="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 class="text-3xl font-extrabold text-white tracking-tight">Fil d'actualité</h1>
          <p class="text-slate-400 text-sm mt-1">Découvrez les meilleures pensées de la communauté.</p>
        </div>
        
        <div class="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 w-fit">
          <button class="px-4 py-2 rounded-lg bg-cyan-600 text-white text-sm font-bold shadow-lg shadow-cyan-900/20">
            Récents
          </button>
          <button class="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition">
            Populaires
          </button>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <article class="group bg-slate-800 rounded-2xl border border-slate-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300 p-6 flex flex-col justify-between">
          
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white font-bold border-2 border-slate-700">
                  JD
                </div>
                <div>
                  <h3 class="text-sm font-bold text-white leading-none">Jean Dupont</h3>
                  <span class="text-xs text-slate-500 italic">Il y a 2 heures</span>
                </div>
              </div>
              <button class="text-slate-500 hover:text-white">•••</button>
            </div>

            <div class="relative">
              <span class="absolute -top-4 -left-2 text-6xl text-slate-700 font-serif opacity-50">“</span>
              <p class="text-lg md:text-xl text-slate-100 font-medium leading-relaxed relative z-10 italic">
                Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.
              </p>
            </div>

            <div class="flex flex-wrap gap-2 mt-6">
              <span class="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-700">#Motivation</span>
              <span class="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-900 text-slate-500 border border-slate-700">#Succès</span>
            </div>
          </div>

          <div class="flex items-center justify-between mt-8 pt-4 border-t border-slate-700/50">
            <div class="flex items-center space-x-6">
              <button class="flex items-center space-x-2 text-slate-400 hover:text-red-500 transition group/btn">
                <span class="text-xl group-hover/btn:scale-125 transition">❤️</span>
                <span class="text-sm font-bold">24</span>
              </button>
              <button class="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition group/btn">
                <span class="text-xl group-hover/btn:scale-125 transition">💬</span>
                <span class="text-sm font-bold">12</span>
              </button>
            </div>
            
            <button class="text-slate-500 hover:text-yellow-500 transition">
              <span class="text-xl">🔖</span>
            </button>
          </div>

        </article>
        </div>

      <div class="mt-12 text-center">
        <button class="px-8 py-3 rounded-xl border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white transition font-semibold">
          Afficher plus de citations
        </button>
      </div>

    </div>
  </div>
</template>


<style scoped>


</style>