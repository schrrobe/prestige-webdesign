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
    <AppHeader />
    <main class="flex-1">
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
