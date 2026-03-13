<script setup lang="ts">
const showCookieBanner = ref(true)

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (consent) showCookieBanner.value = false
})

function acceptCookies() {
  localStorage.setItem('cookie-consent', 'accepted')
  showCookieBanner.value = false
}

function declineCookies() {
  localStorage.setItem('cookie-consent', 'declined')
  showCookieBanner.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-primary-500 focus:px-4 focus:py-3 focus:text-white"
    >
      Zum Hauptinhalt springen
    </a>
    <AppHeader />
    <main id="main-content" tabindex="-1" class="flex-1 focus:outline-none">
      <slot />
    </main>
    <AppFooter />
    <CookieBanner
      v-if="showCookieBanner"
      @accept="acceptCookies"
      @decline="declineCookies"
    />
  </div>
</template>
