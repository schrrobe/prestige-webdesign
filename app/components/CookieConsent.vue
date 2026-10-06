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
      class="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-ink bg-sheet pb-[env(safe-area-inset-bottom)]"
      aria-labelledby="consent-title"
    >
      <div class="wrap flex flex-col gap-4 py-4 md:flex-row md:items-center md:gap-8">
        <div class="md:flex-1">
          <h2 id="consent-title" class="font-bold">Darf ich anonym messen, wie die Seite genutzt wird?</h2>
          <p class="mt-1 text-[0.9375rem] text-ink-soft">
            Mit Ihrer Zustimmung lade ich Google Analytics. Ohne Zustimmung wird nichts geladen – die Seite funktioniert genauso.
            <NuxtLink to="/datenschutz" class="link text-ink">Details im Datenschutz</NuxtLink>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-3 md:flex">
          <button type="button" class="btn btn-outline" @click="decide('denied')">Ablehnen</button>
          <button type="button" class="btn btn-ink" @click="decide('granted')">Zustimmen</button>
        </div>
      </div>
    </section>
  </Transition>
</template>
