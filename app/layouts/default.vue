<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-ink focus:px-5 focus:py-3 focus:font-bold focus:text-paper"
    >
      Zum Hauptinhalt springen
    </a>
    <AppHeader />
    <main id="main-content" tabindex="-1" class="flex-1 focus:outline-none">
      <slot />
    </main>
    <AppFooter />
    <CookieConsent />
  </div>
</template>
