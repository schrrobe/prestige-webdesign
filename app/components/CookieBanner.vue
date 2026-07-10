<script setup lang="ts">
const emit = defineEmits<{
  accept: []
  decline: []
}>()

const dialog = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    dialog.value?.querySelector<HTMLElement>('button')?.focus()
  })
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('decline')
    return
  }
  if (e.key !== 'Tab' || !dialog.value) return
  const focusables = Array.from(dialog.value.querySelectorAll<HTMLElement>('a[href], button'))
  if (!focusables.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}
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
          ref="dialog"
          class="glass-card p-6 md:p-8 shadow-2xl shadow-black/40 flex flex-col md:flex-row items-start md:items-center gap-6"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
          aria-modal="true"
          @keydown="onKeydown"
        >
          <div class="flex-1">
            <h2 id="cookie-banner-title" class="text-white font-semibold mb-2">Cookie-Einstellungen</h2>
            <p id="cookie-banner-description" class="text-dark-200 text-sm leading-relaxed">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind technisch notwendig, andere helfen uns, die Website zu verbessern.
              <NuxtLink to="/datenschutz" class="text-primary-300 hover:text-primary-200 underline ml-1">Mehr erfahren</NuxtLink>
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button type="button" class="btn-ghost" @click="emit('decline')">
              Nur notwendige
            </button>
            <button type="button" class="btn-primary !px-6 !py-2.5 text-sm" @click="emit('accept')">
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
