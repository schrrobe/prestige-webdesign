<script setup lang="ts">
const emit = defineEmits<{
  accept: []
  decline: []
}>()
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-8"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-8"
  >
    <div class="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div class="container-narrow mx-auto">
        <div
          class="glass-card p-6 md:p-8 shadow-2xl shadow-black/40 flex flex-col md:flex-row items-start md:items-center gap-6"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
          aria-modal="false"
        >
          <div class="flex-1">
            <h3 id="cookie-banner-title" class="text-white font-semibold mb-2">Cookie-Einstellungen</h3>
            <p id="cookie-banner-description" class="text-dark-200 text-sm leading-relaxed">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind technisch notwendig, andere helfen uns, die Website zu verbessern.
              <NuxtLink to="/datenschutz" class="text-primary-400 hover:text-primary-300 underline ml-1">Mehr erfahren</NuxtLink>
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              type="button"
              class="px-6 py-2.5 text-sm font-medium text-dark-200 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200"
              @click="emit('decline')"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              class="btn-primary !px-6 !py-2.5 text-sm"
              @click="emit('accept')"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
