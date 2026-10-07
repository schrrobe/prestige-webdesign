<script setup lang="ts">
/**
 * Nicht-modaler Hinweis (keine Fokus-Falle, kein Abdunkeln): die Seite
 * bleibt bedienbar. Ablehnen ist genauso groß und nah wie Zustimmen.
 */
const { bannerOpen, decide } = useConsent()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="translate-y-full"
  >
    <section
      v-if="bannerOpen"
      class="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-hair bg-paper pb-[env(safe-area-inset-bottom)] shadow-[0_18px_48px_-16px_rgba(0,0,0,0.28)] sm:inset-x-6"
      aria-labelledby="consent-title"
    >
      <div class="flex flex-col gap-4 p-5 md:flex-row md:items-center md:gap-8 md:p-6">
        <div class="md:flex-1">
          <h2 id="consent-title" class="font-bold">Darf ich anonym messen, wie die Seite genutzt wird?</h2>
          <p class="mt-1 text-[0.9375rem] text-ink-soft">
            Mit Ihrer Zustimmung lade ich Google Analytics. Ohne Zustimmung wird nichts geladen – die Seite funktioniert genauso.
            <NuxtLink to="/datenschutz" class="link text-ink">Details im Datenschutz</NuxtLink>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-3 md:flex">
          <button type="button" class="btn btn-outline" @click="decide('denied')">Ablehnen</button>
          <button type="button" class="btn btn-dark" @click="decide('granted')">Zustimmen</button>
        </div>
      </div>
    </section>
  </Transition>
</template>
